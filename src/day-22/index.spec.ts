// import { describe, expect, it } from 'bun:test';
// import * as Ap from 'fp-ts/Apply';
// import * as A from 'fp-ts/Array';
// import * as E from 'fp-ts/Either';
// import { pipe } from 'fp-ts/lib/function';

// type User = {
//   username: string;
//   email: string;
//   password: string;
// };

// const validateE = E.getApplicativeValidation(A.getMonoid<string>());
// const sequenceValidateE = Ap.sequenceT(validateE);

// const moreThan3Chars = E.fromPredicate(
//   (xs: string) => xs.length > 3,
//   () => ['Need more than 3 chars'],
// );
// const validateEmail = E.fromPredicate(
//   (xs: string) => xs.includes('@'),
//   () => ['Invalid email'],
// );
// const moreThan6Chars = E.fromPredicate(
//   (xs: string) => xs.length > 6,
//   () => ['Need more than 6 chars'],
// );
// const hasCapital = E.fromPredicate(
//   (xs: string) => /[A-Z]/.test(xs),
//   () => ['Need at least one capital letter'],
// );
// const hasNumber = E.fromPredicate(
//   (xs: string) => /\d/.test(xs),
//   () => ['Need at least one number'],
// );

// const validate = ({ username, email, password }: User) => pipe(
//   sequenceValidateE(
//     moreThan3Chars(username),
//     validateEmail(email),
//     moreThan6Chars(password),
//     hasCapital(password),
//     hasNumber(password),
//   ),
//   E.map(([s]) => s),
// );

// // const validate = ({ username, email, password }: User) => pipe(
// //   username,
// //   moreThan3Chars,
// //   E.bindTo('username'),
// //   E.apS('email', validateEmail(email)),
// //   E.apS('password', pipe(
// //     password,
// //     moreThan6Chars,
// //     E.chain(hasCapital),
// //     E.chain(hasNumber),
// //   )),
// // );

// describe('validate is correctly implement', () => {
//   it(`
//   Given: user with invalid email without @
//   When: validate(user)
//   Then: { _tag: 'Left', left: 'Invalid email' };`, () => {
//     const user = { username: 'test', email: '', password: '' };
//     const received = validate(user);
//     const expected = { _tag: 'Left',left: [
//         'Invalid email',
//         'Need more than 6 chars',
//         'Need at least one capital letter',
//         'Need at least one number',
//       ] };

//     expect(received).toEqual(expected);
//   });

//   it(`
//   Given: user with invalid password less than 6 chars
//   When: validate(user)
//   Then: { _tag: 'Left', left: 'Invalid email' };`, () => {
//     const user = { username: 'test', email: '123456@', password: '' };
//     const received = validate(user);
//     const expected = { _tag: 'Left',left: [
//         'Need more than 6 chars',
//         'Need at least one capital letter',
//         'Need at least one number',
//       ] };

//     expect(received).toEqual(expected);
//   });

//   it(`
//   Given: user with invalid password without capital letter
//   When: validate(user)
//   Then: { _tag: 'Left', left: 'Invalid email' };`, () => {
//     const user = { username: 'test', email: '123456@', password: '1234567' };
//     const received = validate(user);
//     const expected = { _tag: 'Left', left: ['Need at least one capital letter'] };

//     expect(received).toEqual(expected);
//   });

//   it(`
//   Given: user with invalid password without number
//   When: validate(user)
//   Then: { _tag: 'Left', left: 'Invalid email' };`, () => {
//     const user = { username: 'test', email: '123456@', password: 'abcdefG' };
//     const received = validate(user);
//     const expected = { _tag: 'Left', left: ['Need at least one number'] };

//     expect(received).toEqual(expected);
//   });
// });
