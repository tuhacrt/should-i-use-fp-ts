import { describe, expect, it } from 'vitest';

import { onePlusTwo } from '../src';

describe('onePlusTwo()', () => {
  it(`Given: null
      When: onePlusTwo
      Then: return 3`, () => {
    const received = onePlusTwo;
    const expected = 3;

    expect(received).toEqual(expected);
  });
});
