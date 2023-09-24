import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * The past few days we learned how to operate using `Option`,
 * but we haven't get the value from `Option` yet.
 * We need to define a `getOrElse` function to get the value from `Option`,
 * and return a specific value(from `onNone` function) if `None`.
 */
export type GetOrElse = <A>(onNone: undefined) => (x: undefined) => undefined;
export const getOrElse: GetOrElse = onNone => x => undefined;

/** Now we can compose functions we defined at day-07 */

/** helper functions */
const double = (x: number) => x * 2;

/** Imperative style */
export const headI = <A>(xs: ReadonlyArray<A>) => {
  if (xs.length === 0) throw new Error('empty array');
  return xs[0];
};

export const inverseI = (x: number) => {
  if (x === 0) throw new Error('cannot divide by zero');
  return 1 / x;
};

export const imperativeOrElse = (xs: ReadonlyArray<number>) => {
  try {
    return inverseI(double(headI(xs))); // get
  } catch {
    return 0; // orElse
  }
};

/** helper functions we defined at day-07 */
type Head = <A>(xs: ReadonlyArray<A>) => O.Option<A>;
type Inverse = (x: number) => O.Option<number>;

export const head: Head = xs => xs.length === 0 ? O.none : O.some(xs[0]);
export const inverse: Inverse = x => x === 0 ? O.none : O.some(1 / x);

export const fpElse = (xs: ReadonlyArray<number>) => pipe( // use [1, 2, 3] as an example
  xs, // [1, 2, 3]
  head, // { _tag: 'Some', value: 1 }
  O.map(double), // { _tag: 'Some', value: 2 }
  O.flatMap(inverse), // { _tag: 'Some', value: 0.5 }
  O.getOrElse(() => 0), // 0.5
);

/**
 * But what if we want onNone function output different type from our `onSome` type?
 * We need to define a `getOrElseW` function to get the value from `Option`,
 * and return a specific value(from `onNone` function) if `None` (and with different type).
 */
export type GetOrElseW = <A, B>(onNone: undefined) => (x: undefined) => undefined;
export const getOrElseW: GetOrElseW = onNone => x => undefined;

export const imperativeOrElseW = (xs: ReadonlyArray<number>) => {
  try {
    return inverseI(double(headI(xs))); // get
  } catch {
    return 'no value'; // orElse
  }
};

export const fpElseW = (xs: ReadonlyArray<number>) => pipe( // use [0, 2, 3] as an example
  xs, // [0, 2, 3]
  head, // { _tag: 'None' }
  O.map(double), // { _tag: 'None' }
  O.flatMap(inverse), // { _tag: 'None' }
  getOrElseW(() => 'no value'), // 'no value'
);
