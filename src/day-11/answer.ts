import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * We have learned how to use `getOrElse` to get the value from `Option` yesterday,
 * but there still a situation that we want all of our return value being modified.
 * So we need to implement a `match` function to match `onNone` and `onSome` situation.
 */
export type Match = <A, B>(onNone: () => B, onSome: (x: A) => B) => (x: O.Option<A>) => B;
export const match: Match = (onNone, onSome) => x => x._tag === 'None' ? onNone() : onSome(x.value);

/** Now we can compose functions we defined at day-07 */

/** helper functions */
export const double = (x: number) => x * 2;

/** Imperative style */
export const headI = <A>(xs: ReadonlyArray<A>) => {
  if (xs.length === 0) throw new Error('empty array');
  return xs[0];
};

export const inverseI = (x: number) => {
  if (x === 0) throw new Error('cannot divide by zero');
  return 1 / x;
};

export const imperativeMatch = (xs: ReadonlyArray<number>) => {
  try {
    return `result: ${inverseI(double(headI(xs)))}`; // onSome
  } catch {
    return 'no value'; // onNone
  }
};

/** helper functions we defined at day-07 */
type Head = <A>(xs: ReadonlyArray<A>) => O.Option<A>;
type Inverse = (x: number) => O.Option<number>;

export const head: Head = xs => xs.length === 0 ? O.none : O.some(xs[0]);
export const inverse: Inverse = x => x === 0 ? O.none : O.some(1 / x);

export const fpMatch = (xs: ReadonlyArray<number>) => pipe( // use [1, 2, 3] as an example
  xs, // [1, 2, 3]
  head, // { _tag: 'Some', value: 1 }
  O.map(double), // { _tag: 'Some', value: 2 }
  O.flatMap(inverse), // { _tag: 'Some', value: 0.5 }
  O.match(
    () => 'no value', // onNone
    v => `result: ${v}`, // onSome
  ), // 'result: 0.5'
);

/**
 * `match` also has a `w` version, which can return different type from `onNone` and `onSome`.
 */
export type MatchW = <A, B, C>(onNone: () => C, onSome: (x: A) => B) => (x: O.Option<A>) => B | C;
export const matchW: MatchW = (onNone, onSome) => x => x._tag === 'None' ? onNone() : onSome(x.value);

export const imperativeMatchW = (xs: ReadonlyArray<number>) => {
  try {
    return `result: ${inverseI(double(headI(xs)))}`; // onSome
  } catch {
    return false; // onNone
  }
};

export const fpMatchW = (xs: ReadonlyArray<number>) => pipe( // use [0, 2, 3] as an example
  xs, // [0, 2, 3]
  head, // { _tag: 'None' }
  O.map(double), // { _tag: 'None' }
  O.flatMap(inverse), // { _tag: 'None' }
  O.matchW(
    () => false, // onNone
    v => `result: ${v}`, // onSome
  ), // false
);
