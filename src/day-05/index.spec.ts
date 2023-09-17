// import { describe, expect, test } from 'bun:test';

// import {
//   notPointfreeCompose, notPointfreeInc, notPointfreeToString,
//   pointfreeCompose, pointfreeInc, pointfreeToString,
// } from './index';

// describe('Pointfree result must be equal to notPointfree', () => {
//   test(`
//   Given: arr = [1, 2, 3, 4, 5]
//   When: Inc(x)
//   Then: [2, 3, 4, 5, 6]`, () => {
//     const receivedPointfree = pointfreeInc;
//     const receivedNotPointfree = notPointfreeInc;
//     const expected = [2, 3, 4, 5, 6];

//     expect(receivedPointfree).toEqual(expected);
//     expect(receivedNotPointfree).toEqual(expected);
//   });

//   test(`
//   Given: arr = [1, 2, 3, 4, 5]
//   When: [Inc(x), toString(x)]
//   Then: ['2', '3', '4', '5', '6']`, () => {
//     const receivedPointfree = pointfreeToString;
//     const receivedNotPointfree = notPointfreeToString;
//     const expected = ['2', '3', '4', '5', '6'];

//     expect(receivedPointfree).toEqual(expected);
//     expect(receivedNotPointfree).toEqual(expected);
//   });

//   test(`
//   Given: arr = [1, 2, 3, 4, 5]
//   When: toString(Inc(x))
//   Then: ['2', '3', '4', '5', '6']`, () => {
//     const receivedPointfree = notPointfreeCompose;
//     const receivedNotPointfree = pointfreeCompose;
//     const expected = ['2', '3', '4', '5', '6'];

//     expect(receivedPointfree).toEqual(expected);
//     expect(receivedNotPointfree).toEqual(expected);
//   });
// });
