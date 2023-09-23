import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';

/**
 * The isFailed function we used in src/day-08
 * which is too verbose and not reusable.
 */
type OldIsFailed = (x: O.Option<number>) => O.Option<number>;
export const oldIsFailed: OldIsFailed = (x) => {
  if (x._tag === 'None') return O.none;
  return x.value > 60 ? O.some(x.value) : O.none;
};

type AdjustScore = (x: number) => O.Option<number>;
export const oldAdjustScore: AdjustScore = flow( // use 40 as an example
  O.of, // { _tag: 'Some', value: 40 }
  O.map(x => x * 1.2), // { _tag: 'Some', value: 48 }
  oldIsFailed, // { _tag: 'None' }
  O.map(Math.round), // { _tag: 'None' }
  O.map(x => x > 100 ? 100 : x), // { _tag: 'None' }
);

/**
 * map :: (a -> b) -> Option a -> Option b
 * consume a function `f` that takes an `a` and return a `b`
 * and return a function that takes an `Option a` and return an `Option b`.
 */
export type Map = <A, B>(f: (a: A) => B) => (x: O.Option<A>) => O.Option<B>;
export const map: Map = f => x => x._tag === 'None' ? O.none : O.some(f(x.value));

/**
 * flatMap :: (a -> Option b) -> Option a -> Option b
 * the difference between `map` and `flatMap` is that
 * the function `f` of `flatMap` returns `Option b` instead of `b`.
 * You need to implement `flatMap` to make following `adjustScore` valid.
 */
export type FlatMap = <A, B>(f: undefined) => (x: undefined) => undefined; // TODO
export const flatMap: FlatMap = f => x => undefined; // TODO

/**
 * So we can implement `isFailed` like this:
 */
type IsFailed = (x: number) => O.Option<number>;
export const isFailed: IsFailed = x => x < 60 ? O.none : O.some(x);

/**
 * And implement `isFailed` and `adjustScore` like this using `map` and `flatMap`:
 */
export const adjustScore: AdjustScore = flow( // use 40 as an example
  O.of, // { _tag: 'Some', value: 40 }
  O.map(x => x * 1.2), // { _tag: 'Some', value: 48 }
  O.flatMap(isFailed), // { _tag: 'None' }
  O.map(Math.round), // { _tag: 'None' }
  O.map(x => x > 100 ? 100 : x), // { _tag: 'None' }
);

export const studentA = adjustScore(40); // { _tag: 'None' }
export const studentB = adjustScore(60); // { _tag: 'Some', value: 72 }
export const studentC = adjustScore(100); // { _tag: 'Some', value: 100 }

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
