// import { describe, expect, test } from 'bun:test';
// import * as O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import { double, head, inverse, match, matchW } from './index';

// /** Helper functions */

// describe('match is correctly implement', () => {
//   test(`
//   Given: x = [1, 2, 3]
//   When: pipe(xs, head, O.map(double), O.flatMap(inverse), match(() => 'no value', v => 'result: \${v}')
//   Then: 'result: 0.5'`, () => {
//     const xs = [1, 2, 3];
//     const pre = pipe(xs, head, O.map(double), O.flatMap(inverse));
//     const original = pipe(
//       pre,
//       O.match(
//         () => 'no value',
//         v => `result: ${v}`,
//       ),
//     );
//     const received = pipe(
//       pre,
//       match(
//         () => 'no value',
//         v => `result: ${v}`),
//     );
//     const expected = 'result: 0.5';

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });

// describe('matchW is correctly implement', () => {
//   test(`
//   Given: x = [0, 2, 3]
//   When: pipe(xs, head, O.map(double), O.flatMap(inverse), matchW(() => 'no value', v => 'result: \${v}')
//   Then: false`, () => {
//     const xs = [0, 2, 3];
//     const pre = pipe(xs, head, O.map(double), O.flatMap(inverse));
//     const original = pipe(
//       pre,
//       O.matchW(
//         () => false,
//         v => `result: ${v}`,
//       ),
//     );
//     const received = pipe(
//       pre,
//       matchW(
//         () => false,
//         v => `result: ${v}`),
//     );
//     const expected = false;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
