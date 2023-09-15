import { describe, expect, test } from 'bun:test';

import { flowEasy, pipeEasy } from './answer';

/** Helper functions */
const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();
const split = (x: string) => x.split('');
const reverse = (x: Array<string>) => x.reverse();

describe('pipeEasy(x, ...fns)', () => {
  test(`
  Given: x = 1, fns = [inc, inc, inc]
  Then: 4`, () => {
    const x = 1;
    const fns = [inc, inc, inc];
    const received = pipeEasy(x, ...fns);
    const expected = 4;

    expect(received).toEqual(expected);
  });

  test(`
  Given: x = 100, fns = [inc, toString, split, reverse]
  Then: ['1', '0', '1']`, () => {
    const x = 100;
    const fns = [inc, toString, split, reverse];
    const received = pipeEasy(x, ...fns);
    const expected = ['1', '0', '1'];

    expect(received).toEqual(expected);
  });
});

describe('flowEasy(...fns)(x)', () => {
  test(`
  Given: x = 1, fns = [inc, inc, inc]
  Then: 4`, () => {
    const x = 1;
    const fns = [inc, inc, inc];
    const received = flowEasy(...fns)(x);
    const expected = 4;

    expect(received).toEqual(expected);
  });

  test(`
  Given: x = 100, fns = [inc, toString, split, reverse]
  Then: ['1', '0', '1']`, () => {
    const x = 100;
    const fns = [inc, toString, split, reverse];
    const received = flowEasy(...fns)(x);
    const expected = ['1', '0', '1'];

    expect(received).toEqual(expected);
  });
});
