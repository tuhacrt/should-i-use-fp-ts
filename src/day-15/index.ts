import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * We have learned `O.bind` and `O.Do` in day-14,
 * but every time using the following pattern is a little bit verbose.
 */
// use x = 2 as example
export const verbose = (x: number) => pipe(
  O.Do, // { _tag: 'Some', value: {} }
  O.bind('x', () => O.of(x)), // { _tag: 'Some', value: { x: 2 } }
);

/**
 * So we need to implement a function that can help us
 * to build `Do` and variable inject into it at the same time.
 * We call this function `bindTo`.
 * Here is the type of `bindTo`.
 */
type BindTo = <N extends string>(name: undefined) => <A>(fa: undefined) => O.Option<undefined>;
/**
 * The usage is to declare a variable name first,
 * and then give the variable that would injected into `Do`.
 *
 * `bindTo`'s implementation is much simpler than `bind`,
 * we just need to use `O.map` to inject the variable into an empty object as `Do`.
 * and we use `as any` to tell typescript that the type is correct.
 */
export const bindTo: BindTo = name => fa => pipe(
  fa,
  O.map(a => undefined),
);

/**
 * Now we can use `bindTo` to simplify our code.
 */
// use x = 2 as example
export const simple = (x: number) => pipe(
  O.of(x), // { _tag: 'Some', value: 2 }
  O.bindTo('x'), // { _tag: 'Some', value: { x: 2 } }
);
