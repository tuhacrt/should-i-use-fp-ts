import { describe, expect, test } from 'bun:test';

import { onePlusTwo } from '../src';

describe('onePlusTwo', () => {
  test(`
  Given: onePlusTwo
  Then: 3`, () => {
    const received = onePlusTwo;
    const expected = 3;

    expect(received).toEqual(expected);
  });
});
