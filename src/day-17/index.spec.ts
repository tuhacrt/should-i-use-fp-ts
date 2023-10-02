// import { describe, expect, test } from 'bun:test';

// import { validateOption, validateOriginal } from './index';

// describe('validate is correctly implement', () => {
//   test(`
//   Given: user = { username: 'test', email: '', password: '' }
//   When: validateOption(user)
//   Then: null`, () => {
//     const user = { username: 'test', email: '', password: '' };
//     const original = validateOriginal(user);
//     const received = validateOption(user);
//     const expected = null;

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   test(`
//   Given: user = { username: 'test', email: 'awewewq@a', password: '123456A12' }
//   When: validateOption(user)
//   Then: { username: 'test', email: 'awewewq@a', password: '123456A12' }`, () => {
//     const user = { username: 'test', email: 'awewewq@a', password: '123456A12' };
//     const original = validateOriginal(user);
//     const received = validateOption(user);
//     const expected = { username: 'test', email: 'awewewq@a', password: '123456A12' };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
