// import { describe, expect, it } from 'bun:test';
// import * as A from 'fp-ts/Array';
// import { pipe } from 'fp-ts/function';
// import { isString } from 'fp-ts/string';

// describe('Array ADT operation', () => {
//   it('filterWithIndex', () => {
//     const xs = [-3, 1, -2, 5];
//     const received = pipe(
//       xs,
//       A.filterWithIndex((i: number, x: number) => x > 0 && i <= 2),
//     );
//     const expected = [1];

//     expect(received).toEqual(expected);
//   });

//   it('partition', () => {
//     const xs = ['a', 1, {}, 'b', 5];
//     const received = pipe(xs, A.partition(isString));
//     const expected = { left: [1, {}, 5], right: ['a', 'b'] };

//     expect(received).toEqual(expected);
//   });
// });
