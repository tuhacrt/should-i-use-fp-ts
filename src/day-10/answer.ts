import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';

/** Now we can compose functions we defined at day-07 */
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

export const imperative = (xs: ReadonlyArray<number>) => {
  try {
    return inverseI(double(headI(xs)));
  } catch {
    return 0;
  }
};

export const onOneI = imperative([1, 2, 3]); // 0.5
export const onZeroI = imperative([0, 2, 3]); // 0

/**
 * The helper function we used in src/day-07 can be implemented like this:
 */
type Head = <A>(xs: ReadonlyArray<A>) => O.Option<A>;
type Inverse = (x: number) => O.Option<number>;

export const head: Head = xs => xs.length === 0 ? O.none : O.some(xs[0]);
export const inverse: Inverse = x => x === 0 ? O.none : O.some(1 / x);

export const fp = (xs: ReadonlyArray<number>) => pipe(// use [1, 2, 3] as an example
  xs, // [1, 2, 3]
  head, // { _tag: 'Some', value: 1 }
  O.map(double), // { _tag: 'Some', value: 2 }
  O.flatMap(inverse), // { _tag: 'Some', value: 0.5 }
);

export const onOne = fp([1, 2, 3]); // { _tag: 'Some', value: 0.5 }
export const onZero = fp([0, 2, 3]); // { _tag: 'None' }
