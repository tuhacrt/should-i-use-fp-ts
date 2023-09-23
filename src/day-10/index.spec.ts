// import { describe, expect, test } from 'bun:test';
// import * as O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import { flatMap, isFailed } from './index';

// /** Helper functions */

// describe('flatMap is correctly implement', () => {
//   test(`
//   Given: x = 40
//   When: pipe(x, O.of, O.map(x => x * 1.2), flatMap(isFailed))
//   Then: { _tag: 'Some', value: 2 }`, () => {
//     const x = 40;
//     const original = pipe(x, O.of, O.map(x => x * 1.2), O.flatMap(isFailed));
//     const received = pipe(x, O.of, O.map(x => x * 1.2), flatMap(isFailed));
//     const expected = { _tag: 'None' };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   test(`
//   Given: x = 60
//   When: pipe(x, O.of, O.map(x => x * 1.2), flatMap(isFailed))
//   Then: { _tag: 'Some', value: 2 }`, () => {
//     const x = 60;
//     const original = pipe(x, O.of, O.map(x => x * 1.2), O.flatMap(isFailed));
//     const received = pipe(x, O.of, O.map(x => x * 1.2), flatMap(isFailed));
//     const expected = { _tag: 'Some', value: 72 };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
