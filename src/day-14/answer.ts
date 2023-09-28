import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * In recent days, We always operate on one variable,
 * what if we need to operate on multiple variables?
 * Here is `Do` notation, it can help us to operate on multiple variables.
 */
type DoType = O.Option<object>;
export const Do: DoType = O.of({});

/**
 * `Do` can be viewed as a container that store our variables,
 * we can use `bind` and `bindTo` to inject variables into `Do`.
 * we take a look at `bind` example first, and then implement it.
 */
// use x=1, y=2 as example
export const bindExample = (x: number, y: number) => pipe(
  O.Do, // { _tag: 'Some', value: {} }
  O.bind('x', () => O.of(x * 2 + 3)), // { _tag: 'Some', value: { x: 5 } }
  // bind's second fn can use the value of or Do.
  O.bind('y', ({ x }) => O.of(y + x * 3)), // { _tag: 'Some', value: { x: 5, y: 17 } }
  O.map(({ x, y }) => x + y), // { _tag: 'Some', value: 22 }
  O.getOrElse(() => 0), // 22
);

/**
 * `bind` is a function that inject a variable into `Do`,
 * we can implement it as following:
 */
export type Bind =
  <N extends string, A, B>(name: Exclude<N, keyof A>, f: (a: A) => O.Option<B>)
    => (ma: O.Option<A>)
    => O.Option<{ readonly [K in keyof A | N]: K extends keyof A ? A[K] : B }>;
/**
 * as we already know how to use `bind` in `Do` notation,
 * so we focus on the detail implementation of `bind`.
 * as our ma is an Option<A>, so we can use `O.flatMap` to prevent nested Option.
 * and we use `Object.assign` to inject the result of f(a) into ma.
 */
export const bind: Bind = (name, f) => ma => pipe(
  ma,
  O.flatMap(a => pipe(
    f(a),
    O.map(b => Object.assign({}, a, { [name]: b }) as any),
  )),
);
