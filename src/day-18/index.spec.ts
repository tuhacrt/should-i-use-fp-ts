// import { describe, expect, it } from 'bun:test';
// import * as E from 'fp-ts/Either';

// type Left<E> = Readonly<{
//   _tag: 'Left';
//   left: E;
// }>;
// type Right<A> = Readonly<{
//   _tag: 'Right';
//   right: A;
// }>;

// type Either<E, A> = Left<E> | Right<A>;

// type LeftConstructor = <E = never, A = never>(e: E) => Either<E, A>;

// const left: LeftConstructor = e => ({ _tag: 'Left', left: e });

// type RightConstructor = <E = never, A = never>(a: A) => Either<E, A>;

// const right: RightConstructor = a => ({ _tag: 'Right', right: a });

// describe('E.left, E.right is correctly implement', () => {
//   it(`
//   Given: x = 'Error'
//   When: left(x)
//   Then: { tag: 'Left', left: x }`, () => {
//     const x = 'Error';
//     const original = E.left(x);
//     const received = left(x);
//     const expected = { _tag: 'Left', left: x };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });

//   it(`
//   Given: x = 'Error'
//   When: right(x)
//   Then: { tag: 'Left', right: x }`, () => {
//     const x = { username: 'test', email: '', password: '' };
//     const original = E.right(x);
//     const received = right(x);
//     const expected = { _tag: 'Right', right: x };

//     expect(received).toEqual(expected);
//     expect(received).toEqual(original);
//   });
// });
