import { describe, expect, it } from 'bun:test';
import * as E from 'fp-ts/Either';

export const normalStringify = (...args: Parameters<typeof JSON.stringify>) => {
  try {
    return JSON.stringify(...args);
  } catch (error) {
    return error;
  }
};

const stringify = (...args: Parameters<typeof JSON.stringify>) => {
  try {
    const stringified = JSON.stringify(...args);
    if (typeof stringified !== 'string') throw new Error('Unsupported structure');

    return E.right(stringified);
  } catch (error) {
    return E.left(error);
  }
};

describe('Either is correctly implement', () => {
  it(`
  Given: user
  When: stringify(user)
  Then: { _tag: 'Right', left: '{"username":"test","email":"","password":""}' };`, () => {
    const user = { username: 'test', email: '', password: '' };
    const received = stringify(user);
    const expected = E.right('{"username":"test","email":"","password":""}');

    expect(received).toEqual(expected);
  });

  it(`
  Given: user
  When: stringify(user)
  Then: E.isLeft()`, () => {
    const user = () => ({});
    const received = stringify(user);
    const expected = true;

    expect(E.isLeft(received)).toBe(expected);
  });
});
