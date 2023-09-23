import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';

export const one = O.of(1); // { _tag: 'Some', value: 1 }

export type IncO = (x: O.Option<number>) => O.Option<number>;
export const incO: IncO = x => x._tag === 'None' ? O.none : O.some(x.value + 1);

export const two = pipe(
  one, // { _tag: 'Some', value: 1 }
  incO, // { _tag: 'Some', value: 2 }
);

/**
 * map :: (a -> b) -> Option a -> Option b
 * Make your own `map` function. to implement `twoMap` and `noneCase`.
 */
export type Map = <A, B>(f: undefined) => (x: undefined) => undefined; // TODO
export const map: Map = f => x => x._tag === '' ? undefined : undefined; // TODO

const inc = (x: number) => x + 1;

export const twoMap = pipe(
  one, // { _tag: 'Some', value: 1 }
  map(inc), // { _tag: 'Some', value: 2 }
);

export const noneCase = pipe(
  O.none, // { _tag: 'None' }
  map(inc), // { _tag: 'None' }
);

/**
 * We separate isFailed from adjustScore because we can't use `O.map` to implement `adjustScore`.
 */
type IsFailed = (x: O.Option<number>) => O.Option<number>;
export const isFailed: IsFailed = (x) => {
  if (x._tag === 'None') return O.none;
  return x.value > 60 ? O.some(x.value) : O.none;
};

type AdjustScore = (x: number) => O.Option<number>;
export const adjustScore: AdjustScore = flow( // use 40 as an example
  O.of, // { _tag: 'Some', value: 40 }
  O.map(x => x * 1.2), // { _tag: 'Some', value: 48 }
  isFailed, // { _tag: 'None' }
  O.map(Math.round), // { _tag: 'None' }
  O.map(x => x > 100 ? 100 : x), // { _tag: 'None' }
);

export const studentA = adjustScore(40); // { _tag: 'None' }
export const studentB = adjustScore(60); // { _tag: 'Some', value: 72 }
export const studentC = adjustScore(100); // { _tag: 'Some', value: 100 }

/**
 * We can not use `O.map` to implement `adjustScore2`
 * because `O.map` will wrap the result in `Option` again.
 */
// const adjustScore2: AdjustScore = flow(
//   O.of, // Option<number>
//   O.map(x => x * 1.2), // Option<number>
//   O.map(x => x > 60 ? some(x) : none), // Option<Option<number>>
//   O.map(Math.round), // never: type mismatch
//   O.map(x => x > 100 ? 100 : x), // never
// );
