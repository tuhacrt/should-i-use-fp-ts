// import { beforeEach, describe, expect, test } from 'bun:test';

// import { flow2, narrowFlow2 } from './index';

// /** Helper functions */
// const inc = (x: number): number => x + 1;
// const toString = (x: number): string => x.toString();
// const split = (x: string): Array<string> => x.split('');

// describe('narrowFlow2(f, g) => x => g(f(x))', () => {
//   let list: Array<number>;
//   beforeEach(() => list = [1, 2, 3, 4, 5]);

//   test(`
//   Given: f = inc, g = toString
//   Then: ['2', '3', '4', '5', '6']`, () => {
//     const received = list.map(narrowFlow2(inc, toString));
//     const expected = ['2', '3', '4', '5', '6'];

//     expect(received).toEqual(expected);
//   });
// });

// describe('flow2(f, g) => x => g(f(x))', () => {
//   let list: Array<number>;
//   beforeEach(() => list = [1, 2, 3, 4, 5]);

//   test(`
//   Given: f = inc, g = toString
//   Then: ['2', '3', '4', '5', '6']`, () => {
//     const received = list.map(flow2(inc, toString));
//     const expected = ['2', '3', '4', '5', '6'];

//     expect(received).toEqual(expected);
//   });

//   test(`
//   Given: f = toString, g = split
//   Then: [['1'], ['2'], ['3'], ['4'], ['5']]`, () => {
//     const received = list.map(flow2(toString, split));
//     const expected = [['1'], ['2'], ['3'], ['4'], ['5']];

//     expect(received).toEqual(expected);
//   });
// });
