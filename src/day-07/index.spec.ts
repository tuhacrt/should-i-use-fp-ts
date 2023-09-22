// import { describe, expect, test } from 'bun:test';
// import * as O from 'fp-ts/lib/Option';

// import { head, inverse } from './index';

// /** Original functions */
// const headO = <A>(xs: ReadonlyArray<A>) => xs.length === 0 ? O.none : O.some(xs[0]);
// const inverseO = (x: number) => x === 0 ? O.none : O.some(1 / x);

// describe('head = xs => x', () => {
//   test(`
//   Given: xs = [1, 2, 3, 4, 5]
//   When: head(xs)
//   Then: 1`, () => {
//     const xs = [1, 2, 3, 4, 5];
//     const received = head(xs);
//     const original = headO(xs);
//     const expected = { _tag: 'Some', value: 1 };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   test(`
//   Given: xs = [1, 2, 3, 4, 5]
//   When: head(xs)
//   Then: none`, () => {
//     const xs: Array<number> = [];
//     const received = head(xs);
//     const original = headO(xs);
//     const expected = { _tag: 'None' };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });

// describe('inverse = x => x', () => {
//   test(`
//   Given: x = 5
//   When: inverse(x)
//   Then: 0.2`, () => {
//     const x = 5;
//     const received = inverse(x);
//     const original = inverseO(x);
//     const expected = { _tag: 'Some', value: 0.2 };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   test(`
//   Given: x = 0
//   When: inverse(x)
//   Then: none`, () => {
//     const x = 0;
//     const received = inverse(x);
//     const original = inverseO(x);
//     const expected = { _tag: 'None' };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
