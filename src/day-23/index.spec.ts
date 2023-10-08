import { describe, expect, it } from 'bun:test';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';

const sumNormal = (xs: Array<number>) => xs
  .map(x => x + 1)
  .filter(x => x % 2 === 0)
  .reduce((acc, x) => acc + x, 0);

const sumFp = (xs: Array<number>) => pipe(
  xs,
  A.map(x => x + 1),
  A.filter(x => x % 2 === 0),
  A.reduce(0, (acc, x) => acc + x),
);

const headNormal = (xs: Array<number>) => xs[0];
const headFp = (xs: Array<number>) => pipe(
  xs,
  A.head,
);

describe('validate is correctly implement', () => {
  it('array operation', () => {
    const xs = [1, 2, 3, 4, 5];
    const original = sumNormal(xs);
    const received = sumFp(xs);
    const expected = 12;

    expect(received).toEqual(expected);
    expect(received).toEqual(original);
  });

  it('head function: None', () => {
    const xs = Array<number>();
    const original = headNormal(xs);
    const received = headFp(xs);
    const expected = { _tag: 'None' };

    expect(received).toEqual(expected);
    expect(original).toEqual(undefined);
  });

  it('head function: 1', () => {
    const xs = [1, 2, 3];
    const original = headNormal(xs);
    const received = headFp(xs);
    const expected = { _tag: 'Some', value: 1 };

    expect(received).toEqual(expected);
    expect(original).toEqual(1);
  });
});
