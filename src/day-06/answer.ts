const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();

const narrowFlow2 = (f: (x: number) => number, g: (x: number) => string) => (x: number) => g(f(x));
const incAndToString = narrowFlow2(inc, toString);

type Flow2 = <A, B, C>(fn1: (x: A) => B, fn2: (x: B) => C) => (x: A) => C;
const flow2: Flow2 = (fn1, fn2) => x => fn2(fn1(x));

type Pipe2 = <A, B, C>(x: A, fn1: (x: A) => B, fn2: (x: B) => C) => C;
const pipe2: Pipe2 = (x, fn1, fn2) => fn2(fn1(x));

export { narrowFlow2, flow2, pipe2, incAndToString };
