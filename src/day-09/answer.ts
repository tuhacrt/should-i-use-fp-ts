import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';

export type None = { readonly _tag: 'None' };
export type Some<A> = { readonly _tag: 'Some'; readonly value: A };
export type Option<A> = None | Some<A>;

export const none: Option<never> = <const>({ _tag: 'None' });
export const some = <A>(value: A): Option<A> => <const>({ _tag: 'Some', value });

export type Map = <A, B>(f: (a: A) => B) => (x: Option<A>) => Option<B>;
export const map: Map = f => x => x._tag === 'None' ? none : some(f(x.value));

export type FlatMap = <A, B>(f: (a: A) => Option<B>) => (x: Option<A>) => Option<B>;
export const flatMap: FlatMap = f => x => x._tag === 'None' ? none : f(x.value);

export type Match = <A, B>(onNone: () => B, onSome: (a: A) => B) => (x: Option<A>) => B;
export const match: Match = (onNone, onSome) => x => x._tag === 'None' ? onNone() : onSome(x.value);

/** helper utils */
export const double = (x: number) => x * 2;

/** Imperative */
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
    return `Result is ${inverseI(double(headI(xs)))}`;
  } catch {
    return 'no result';
  }
};

/** fp-ts */
export const head = <A>(xs: ReadonlyArray<A>): Option<A> => xs.length === 0 ? none : some(xs[0]);
export const inverse = (x: number): Option<number> => x === 0 ? none : some(1 / x);

export const fp = (xs: ReadonlyArray<number>) => pipe(
  xs,
  head,
  map(double),
  flatMap(inverse),
  match(
    () => 'no result',
    x => `Result is ${x}`,
  ),
);

export const one = O.of(1); // { _tag: 'Some', value: 1 }

export type IncO = (x: O.Option<number>) => O.Option<number>;
export const incO: IncO = x => x._tag === 'None' ? O.none : O.some(x.value + 1);

export const two = pipe(
  one, // { _tag: 'Some', value: 1 }
  incO, // { _tag: 'Some', value: 2 }
);
export const twoMap = pipe(
  one, // { _tag: 'Some', value: 1 }
  O.map(x => x + 1), // { _tag: 'Some', value: 2 }
);

export const noneCase = pipe(
  O.none, // { _tag: 'None' }
  O.map(x => x + 1), // { _tag: 'None' }
);

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

// const adjustScore2: AdjustScore = flow(
//   O.of, // Option<number>
//   O.map(x => x * 1.2), // Option<number>
//   O.map(x => x > 60 ? some(x) : none), // Option<Option<number>>
//   O.map(Math.round), // never
//   O.map(x => x > 100 ? 100 : x), // never
// );
