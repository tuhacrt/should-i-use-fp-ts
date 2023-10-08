import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * Yesterday we are learn about `O.alt`, and you maybe notice
 * that there something we haven't talk about.
 * `O.fromNullable` and `O.fromPredicate`.
 * Here are theirs' definition:
 */

/** If x is null or undefined, return O.none, else O.some(x) */
// ** hint: need to use Utility Type `NonNullable` */
type FromNullable = <A>(x: A) => undefined;
export const fromNullable: FromNullable = x => undefined;

/** If predicate(x) is true, return O.some(x), else O.none */
type FromPredicate = <A>(predicate: undefined) => (x: undefined) => undefined;
/** fromPredicate need to inject predicate function first(to validate following variable) */
export const fromPredicate: FromPredicate = predicate => x => undefined;

/**
 * These two functions are very useful while common development.
 * for example: we got some random string from request param,
 */
export interface Req { query: { str?: string; id: number } };

export const isNotEmptyString = (req: Req) => pipe(
  req.query.str,
  O.fromNullable,
  O.map(str => `${str} is not empty`),
  O.getOrElse(() => 'is empty'),
);

export const isValidId = (req: Req) => pipe(
  req.query.id,
  O.fromPredicate(id => id > 0),
  O.map(id => `${id} is valid`),
  O.getOrElse(() => 'is invalid'),
);
