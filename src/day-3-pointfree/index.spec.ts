import { describe, expect, test } from 'bun:test';

import {
  notPointfreeCompose, notPointfreeInc, notPointfreeToString,
  pointfreeCompose, pointfreeInc, pointfreeToString,
} from './index';

describe('Pointfree result must be equal to notPointfree', () => {
  test('Inc(x)', () => {
    const received = pointfreeInc;
    const expected = notPointfreeInc;
    const result = [1, 2, 3, 4, 5].map(x => x + 1);

    expect(received).toEqual(expected);
    expect(received).toEqual(result);
  });

  test('[Inc(x), toString(x)]', () => {
    const received = pointfreeToString;
    const expected = notPointfreeToString;
    const result = [1, 2, 3, 4, 5].map(x => x + 1).map(x => x.toString());

    expect(received).toEqual(expected);
    expect(received).toEqual(result);
  });

  test('Composed', () => {
    const received = notPointfreeCompose;
    const expected = pointfreeCompose;
    const result = [1, 2, 3, 4, 5].map(x => (x + 1).toString());

    expect(received).toEqual(expected);
    expect(received).toEqual(result);
  });
});
