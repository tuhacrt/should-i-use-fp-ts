import * as O from 'fp-ts/Option';
import { flow } from 'fp-ts/function';

/**
 * The isFailed function we used in src/day-08
 * which is too verbose and not reusable.
 */
type IsFailedOld = (x: O.Option<number>) => O.Option<number>;
export const isFailedOld: IsFailedOld = (x) => {
  if (x._tag === 'None') return O.none;
  return x.value > 60 ? O.some(x.value) : O.none;
};

type AdjustScore = (x: number) => O.Option<number>;
export const oldAdjustScore: AdjustScore = flow( // use 40 as an example
  O.of, // { _tag: 'Some', value: 40 }
  O.map(x => x * 1.2), // { _tag: 'Some', value: 48 }
  isFailedOld, // { _tag: 'None' }
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
 * what if we can implement `isFailed` like this:
 */
type IsFailed = (x: number) => O.Option<number>;
export const isFailed: IsFailed = x => x < 60 ? O.none : O.some(x);

/**
 * flatten :: Option (Option a) -> Option a
 * flatten is a function that takes an `Option (Option a)` and return an `Option a`.
 * It is a very useful function when you want to flatten a nested `Option`.
 */
export type Flatten = <A>(x: O.Option<O.Option<A>>) => O.Option<A>;
export const flatten: Flatten = x => x._tag === 'None' ? O.none : x.value;

export const adjustScoreFlatten: AdjustScore = flow( // use 40 as an example
  O.of, // { _tag: 'Some', value: 40 }
  O.map(x => x * 1.2), // { _tag: 'Some', value: 48 }
  O.map(isFailed), // { _tag: 'None' }
  O.flatten, // { _tag: 'None' }
  O.map(Math.round), // { _tag: 'None' }
  O.map(x => x > 100 ? 100 : x), // { _tag: 'None' }
);

/**
 * flatMap :: (a -> Option b) -> Option a -> Option b
 * the difference between `map` and `flatMap` is that
 * the function `f` of `flatMap` returns `Option b` instead of `b`.
 */
export type FlatMap = <A, B>(f: (a: A) => O.Option<B>) => (x: O.Option<A>) => O.Option<B>;
export const flatMap: FlatMap = f => x => x._tag === 'None' ? O.none : f(x.value);

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
