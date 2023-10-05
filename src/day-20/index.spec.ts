// import { describe, expect, it } from 'bun:test';
// import * as E from 'fp-ts/Either';
// import { pipe } from 'fp-ts/lib/function';

// const unsafeParse = (...args: Parameters<typeof JSON.parse>) => {
//   try {
//     return JSON.parse(...args);
//   } catch (error) {
//     return error;
//   }
// };

// const parse = (...args: Parameters<typeof JSON.parse>) => E.tryCatch(
//   () => JSON.parse(...args),
//   e => e instanceof Error ? e : new Error('Unexpected error'),
// );

// const stringify = (...args: Parameters<typeof JSON.stringify>) => {
//   try {
//     const stringified = JSON.stringify(...args);
//     if (typeof stringified !== 'string') throw new Error('Unsupported structure');

//     return E.right(stringified);
//   } catch (error) {
//     return E.left(error);
//   }
// };

// describe('Either is correctly implement', () => {
//   it(`
//   Given: user
//   When: parse(user)
//   Then: E.isLeft()`, () => {
//     const user = { username: 'test', email: '', password: '' };
//     const received = parse(user);
//     const expected = true;

//     expect(E.isLeft(received)).toEqual(expected);
//   });

//   it(`
//   Given: user
//   When: stringify(user)
//   Then: { _tag: 'Right', left: '{"username":"test","email":"","password":""}' };`, () => {
//     const user = { username: 'test', email: '', password: '' };
//     const received = stringify(user);
//     const expected = E.right('{"username":"test","email":"","password":""}');

//     expect(received).toEqual(expected);
//   });

//   it(`
//   Given: user
//   When: stringify(user)
//   Then: E.isLeft()`, () => {
//     const user = () => ({});
//     const received = stringify(user);
//     const expected = true;

//     expect(E.isLeft(received)).toBe(expected);
//   });
// });
