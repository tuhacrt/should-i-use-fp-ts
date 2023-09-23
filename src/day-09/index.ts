import { pipe } from 'fp-ts/function';

export type None = { readonly _tag: 'None' };
export type Some<A> = { readonly _tag: 'Some'; readonly value: A };
export type Option<A> = None | Some<A>;

export const none: Option<never> = <const>({ _tag: 'None' });
export const some = <A>(value: A): Option<A> => <const>({ _tag: 'Some', value });
export const of = <A>(value: A): Option<A> => some(value);

export const map = <A, B>(f: (a: A) => B) =>
  (x: Option<A>): Option<B> => x._tag === 'None' ? none : some(f(x.value));

export const flatMap = <A, B>(f: (a: A) => Option<B>) =>
  (x: Option<A>): Option<B> => x._tag === 'None' ? none : f(x.value);

export const match = <A, B>(onNone: () => B, onSome: (a: A) => B) =>
  (x: Option<A>): B => x._tag === 'None' ? onNone() : onSome(x.value);

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
