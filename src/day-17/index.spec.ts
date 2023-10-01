// import { describe, expect, test } from 'bun:test';
// import O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import { apS } from './index';

// describe('apS is correctly implement', () => {
//   test(`
//   Given:
//   When: isNotEmptyString(req)
//   Then: 'result: 0.5'`, () => {
//     const x = 2;
//     const original = pipe(
//       O.Do,
//       O.apS('x', O.some(x)),
//       O.map(({ x }) => x),
//       O.getOrElse(() => 0),
//     );
//     const received = pipe(
//       O.Do,
//       apS('x', O.some(x)),
//       O.map(({ x }) => x),
//       O.getOrElse(() => 0),
//     );
//     const expected = 2;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
