import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * There also a common function flow like following:
 * Using lots of `if-else` statement or `early return` to implement a flow,
 * And each statement return different values.
 */
export type Mice = {
  name: string;
  rank: number;
  award?: string;
};
export const normalAlt = (mice: Mice) => {
  if (mice.award) return `Awarded with ${mice.award}!`;
  else if (mice.rank <= 5) return `No. ${mice.rank} mice on the board!`;
  else if (mice.rank <= 10) return `In top 10 mouses at ${mice.rank}!`;
  else return 'Is on sale!';
};

/**
 * We can use `O.alt`(O.orElse) to implement this flow.
 */
type Alt = <A>(that: () => O.Option<A>) => (me: O.Option<A>) => O.Option<A>;
export const alt: Alt = that => me => O.isNone(me) ? that() : me;

export const getMiceAward = (mice: Mice) => pipe(
  mice.award,
  O.fromNullable,
  O.map(award => `Awarded with ${award}!`),
);

export const getMiceTop5 = (mice: Mice) => pipe(
  mice,
  O.fromPredicate(({ rank }) => rank <= 5),
  O.map(({ rank }) => `No. ${rank} mice on the board!`),
);

export const getMiceTop10 = (mice: Mice) => pipe(
  mice,
  O.fromPredicate(({ rank }) => rank <= 10),
  O.map(({ rank }) => `In top 10 mouses at ${rank}!`),
);

export const fpAlt = (mice: Mice) => pipe(
  mice,
  getMiceAward,
  O.alt(() => getMiceTop5(mice)),
  O.alt(() => getMiceTop10(mice)),
  O.getOrElse(() => 'Is on sale!'),
);

/**
 * `alt` also has a `w` version, which can return different type from `onNone` and `onSome`.
 */
export type AltW = <A, B>(that: () => O.Option<B>) => (me: O.Option<A>) => O.Option<A | B>;
export const altW: AltW = that => me => O.isNone(me) ? that() : me;
