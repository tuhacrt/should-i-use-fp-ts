// import { describe, expect, test } from 'bun:test';
// import * as O from 'fp-ts/Option';
// import { pipe } from 'fp-ts/function';

// import { map, two, twoMap } from './index';

// /** Helper functions */

// describe('map', () => {
//   test(`
//   Given: two and twoMap
//   Then: { _tag: 'Some', value: 2 }`, () => {
//     const original = two;
//     const received = twoMap;
//     const expected = { _tag: 'Some', value: 2 };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   test(`
//   Given: x = 1, fns = [inc, toString]
//   When: operation with O.map and map
//   Then: { _tag: 'Some', value: '2' }`, () => {
//     const inc = (x: number) => x + 1;
//     const toString = (x: number) => x.toString();
//     const x = 1;
//     const original = pipe(
//       O.of(x),
//       O.map(inc),
//       O.map(toString),
//     );
//     const received = pipe(
//       O.of(x),
//       map(inc),
//       map(toString),
//     );
//     const expected = { _tag: 'Some', value: '2' };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
