import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * Now its time to add pure variable into `Do`.
 * this function is `apS`.
 * Here is the usage of `apS`.
 * `apS` is a function that inject a pure variable into `Do`,
 * it doesn't have the ability to use the value from `Do`.
 */
export const example = pipe(
  O.Do, // { _tag: 'Some', value: {} }
  O.apS('a', O.some('tests')), // { _tag: 'Some', value: { a: 'tests' } }
  O.apS('b', O.some(1)), // { _tag: 'Some', value: { a: 'tests', b: 1 } }
  O.apS('c', O.some(2)), // { _tag: 'Some', value: { a: 'tests', b: 1, c: 2 } }
);

/**
 * `apS` is a function that inject a pure variable into `Do`,
 * type of `apS` is:
 * 1. define a name to be the key of the Do object.
 * 2. and this name should not be the current key of the Do object.
 * 3. then fb is the value of the key.
 * 4. finally, return a function that accept fa (our Do object) as the parameter.
 * we can implement its type as following:
 */
export type ApS = <N extends string, A, B>(name, fb) =>
<A>(fa) =>
O.Option<undefined>;

/**
 * The implement of `apS` is similar to `bindTo`,
 * but inject a pure variable `fb` instead of a function.
 * Now we can implement `apS`:
 */
export const apS: ApS = (name, fb) => fa => pipe(
  undefined,
);
