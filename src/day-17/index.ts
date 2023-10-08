import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

/**
 * Today we are going to show some example of daily usage of `Option` .
 * This example is for a simple signup form.
 * We have a form with 3 fields: username, email and password.
 * We want to validate the form and if it's valid we want to send the data to the server.
 * first of all, we need to define the types of the data that we are going to use.
 */
interface User {
  username: string;
  email: string;
  password: string;
};

/**
 * We do this validation using original methods without using `Option` .
 */
const moreThan3Chars = (xs: string): string | null => xs.length > 3 ? xs : null;
const validateEmail = (email: string): string | null => email.includes('@') ? email : null;
const moreThan6Chars = (xs: string): string | null => xs.length > 6 ? xs : null;
const hasCapital = (xs: string): string | null => /[A-Z]/.test(xs) ? xs : null;
const hasNumber = (xs: string): string | null => /\d/.test(xs) ? xs : null;

export const validateOriginal = (user: User) => {
  if (!moreThan3Chars(user.username)) return null;

  if (!validateEmail(user.email)) return null;

  if (!moreThan6Chars(user.password)) return null;
  if (!hasCapital(user.password)) return null;
  if (!hasNumber(user.password)) return null;

  return { username: user.username, email: user.email, password: user.password };
};

/**
 * Than we can use `Option` to do the same thing.
 */
const moreThan3CharsOption = O.fromPredicate((xs: string) => xs.length > 3);
const validateEmailOption = O.fromPredicate((xs: string) => xs.includes('@'));
const moreThan6CharsOption = O.fromPredicate((xs: string) => xs.length > 6);
const hasCapitalOption = O.fromPredicate((xs: string) => /[A-Z]/.test(xs));
const hasNumberOption = O.fromPredicate((xs: string) => /\d/.test(xs));

export const validateOption = ({ username, email, password }: User) => pipe(
  O.Do,
  // TODO
  O.getOrElseW(() => null),
);
