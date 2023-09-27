import { describe, expect, test } from 'bun:test';

import { fpAlt, normalAlt } from './index';

describe('alt is correctly implement', () => {
  test(`
  Then: 'result: 0.5'`, () => {
    const x = { name: 'mice', rank: 1, award: 'Gamer' };
    const original = normalAlt(x);
    const received = fpAlt(x);
    const expected = 'Awarded with Gamer!';

    expect(received).toEqual(expected);
    expect(received).toEqual(original);
  });
});
