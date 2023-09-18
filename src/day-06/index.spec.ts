// import { describe, expect, test } from 'bun:test';

// import { flowAny, pipeAny } from './index';

// /** Helper functions */
// const inc = (x: number) => x + 1;
// const toString = (x: number) => x.toString();
// const split = (x: string) => x.split('');
// const reverse = (x: Array<string>) => x.reverse();

// describe('pipeAny(x, ...fns)', () => {
//   test(`
//   Given: x = 1, fns = [inc, inc, inc]
//   Then: 4`, () => {
//     const x = 1;
//     const received = pipeAny(x, inc, inc, inc);
//     const expected = 4;

//     expect(received).toEqual(expected);
//   });

//   test(`
//   Given: x = 100, fns = [inc, toString, split, reverse]
//   Then: ['1', '0', '1']`, () => {
//     const x = 100;
//     const received = pipeAny(x, inc, toString, split, reverse);
//     const expected = ['1', '0', '1'];

//     expect(received).toEqual(expected);
//   });
// });

// describe('flowAny(...fns)(x)', () => {
//   test(`
//   Given: x = 1, fns = [inc, inc, inc]
//   Then: 4`, () => {
//     const x = 1;
//     const received = flowAny(inc, inc, inc)(x);
//     const expected = 4;

//     expect(received).toEqual(expected);
//   });

//   test(`
//   Given: x = 100, fns = [inc, toString, split, reverse]
//   Then: ['1', '0', '1']`, () => {
//     const x = 100;
//     const received = flowAny(inc, toString, split, reverse)(x);
//     const expected = ['1', '0', '1'];

//     expect(received).toEqual(expected);
//   });
// });
