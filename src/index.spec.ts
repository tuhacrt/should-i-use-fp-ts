import { describe, expect, test } from 'bun:test';

import complexArray from './index';

describe('ts-reset/filter', () => {
  test(`
  Given: complexArray
  When: filter(Boolean)
  Then: Array<number>`, () => {
    const given = complexArray;
    const received = given.filter(Boolean);
    const expected = [1, 2, 3];

    expect(received).toEqual(expected);
  });
});
