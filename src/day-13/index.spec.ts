// import { describe, expect, test } from 'bun:test';
// import O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import type { Req } from './index';
// import { fromNullable, fromPredicate } from './index';

// describe('fromNullable is correctly implement', () => {
//   test(`
//   Given: req = { query: { str: 'hello', id: 1 } }
//   When: isNotEmptyString(req)
//   Then: 'result: 0.5'`, () => {
//     const req: Req = { query: { str: 'hello', id: 1 } };
//     const original = pipe(
//       req.query.str,
//       O.fromNullable,
//       O.map(str => `${str} is not empty`),
//       O.getOrElse(() => 'is empty'),
//     );
//     const received = pipe(
//       req.query.str,
//       fromNullable,
//       O.map(str => `${str} is not empty`),
//       O.getOrElse(() => 'is empty'),
//     );
//     const expected = `${req.query.str} is not empty`;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });

// describe('fromPredicate is correctly implement', () => {
//   test(`
//   Given: req = { query: { str: 'hello', id: 1 } }
//   When: isValidId(req)
//   Then: 'result: 0.5'`, () => {
//     const req: Req = { query: { str: 'hello', id: 1 } };
//     const original = pipe(
//       req.query.id,
//       O.fromPredicate(id => id > 0),
//       O.map(id => `${id} is valid`),
//       O.getOrElse(() => 'is invalid'),
//     );
//     const received = pipe(
//       req.query.id,
//       fromPredicate(id => id > 0),
//       O.map(id => `${id} is valid`),
//       O.getOrElse(() => 'is invalid'),
//     );
//     const expected = `${req.query.id} is valid`;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
