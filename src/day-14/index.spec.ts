// import { describe, expect, test } from 'bun:test';
// import O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import { bind } from './index';

// describe('bind is correctly implement', () => {
//   test(`
//   Given:
//   When: isNotEmptyString(req)
//   Then: 'result: 0.5'`, () => {
//     const x = 2;
//     const original = pipe(
//       O.Do,
//       O.bind('x', () => O.of(x)),
//       O.map(({ x }) => x),
//       O.getOrElse(() => 0),
//     );
//     const received = pipe(
//       O.Do,
//       bind('x', () => O.of(x)),
//       O.map(({ x }) => x),
//       O.getOrElse(() => 0),
//     );
//     const expected = 2;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
