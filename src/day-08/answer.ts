import * as O from 'fp-ts/lib/Option';
import { flow, pipe } from 'fp-ts/lib/function';

type None = { readonly _tag: 'None' };
type Some<A> = { readonly _tag: 'Some'; readonly value: A };
type Option<A> = None | Some<A>;

const none = <const>({ _tag: 'None' });
const some = <A>(value: A): Some<A> => <const>({ _tag: 'Some', value });

const map = <A, B>(f: (a: A) => B) =>
  (x: Option<A>): Option<B> => x._tag === 'None' ? none : some(f(x.value));

const flatMap = <A, B>(f: (a: A) => Option<B>) =>
  (x: Option<A>): Option<B> => x._tag === 'None' ? none : f(x.value);

const match = <A, B>(onNone: () => B, onSome: (a: A) => B) =>
  (x: Option<A>): B => x._tag === 'None' ? onNone() : onSome(x.value);

/** helper utils */
const double = (x: number) => x * 2;

/** Imperative */
const headI = <A>(xs: ReadonlyArray<A>) => {
  if (xs.length === 0) throw new Error('empty array');
  return xs[0];
};

const inverseI = (x: number) => {
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
