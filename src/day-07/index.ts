export type None = { readonly _tag: '' }; // TODO
export type Some<A> = { readonly _tag: ''; readonly value: undefined }; // TODO
export type Option<A> = None | Some<A>;

export const none = <const>({ }); // TODO
export const some = <A>(value: A): Some<A> => <const>({ }); // TODO

/** Imperative */
export const headI = <A>(xs: ReadonlyArray<A>) => {
  if (xs.length === 0) throw new Error('empty array');
  return xs[0];
};

export const inverseI = (x: number) => {
  if (x === 0) throw new Error('cannot divide by zero');
  return 1 / x;
};

/** fp-ts */
type Head = <A>(xs: ReadonlyArray<A>) => Option<A>;
type Inverse = (x: number) => Option<number>;

export const head: Head = xs => xs.length === 0 ? none : some(xs[0]);
export const inverse: Inverse = x => x === 0 ? none : some(1 / x);
