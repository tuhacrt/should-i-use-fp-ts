// /* eslint-disable ts/ban-ts-comment */
// import { describe, expect, it } from 'bun:test';
// import * as E from 'fp-ts/Either';

// export const normalParse = (...args: Parameters<typeof JSON.parse>) => {
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

// describe('Either is correctly implement', () => {
//   it(`
//   Given: user
//   When: parse(user)
//   Then: E.isLeft()`, () => {
//     const user = { username: 'test', email: '', password: '' };
//     // @ts-expect-error
//     const received = parse(user);
//     const expected = true;

//     expect(E.isLeft(received)).toEqual(expected);
//   });
// });
