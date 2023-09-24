import { describe, expect, test } from 'bun:test';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

import { getOrElse, getOrElseW, head, inverse } from './index';

/** Helper functions */
const double = (x: number) => x * 2;

describe('getOrElse is correctly implement', () => {
  test(`
  Given: x = [1, 2, 3]
  When: pipe(xs, head, O.map(double), O.flatMap(inverse), getOrElse(() => 0))
  Then: 0.5`, () => {
    const xs = [1, 2, 3];
    const original = pipe(xs, head, O.map(double), O.flatMap(inverse), O.getOrElse(() => 0));
    const received = pipe(xs, head, O.map(double), O.flatMap(inverse), getOrElse(() => 0));
    const expected = 0.5;

    expect(received).toEqual(expected);
    expect(received).toEqual(original);
  });
});

describe('getOrElseW is correctly implement', () => {
  test(`
  Given: x = [0, 2, 3]
  When: pipe(xs, head, O.map(double), O.flatMap(inverse), getOrElse(() => 0))
  Then: 'no value'`, () => {
    const xs = [0, 2, 3];
    const original = pipe(xs, head, O.map(double), O.flatMap(inverse), O.getOrElseW(() => 'no value'));
    const received = pipe(xs, head, O.map(double), O.flatMap(inverse), getOrElseW(() => 'no value'));
    const expected = 'no value';

    expect(received).toEqual(expected);
    expect(received).toEqual(original);
  });
});
