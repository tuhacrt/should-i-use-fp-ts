type fn = (...args: Array<any>) => any;

const pipeAny = (x: any, ...fns: Array<fn>) => fns.reduce((y, fn) => fn(y), x);

const flowAny = (...fns: Array<fn>) => (x: any) => fns.reduce((y, fn) => fn(y), x);

export { pipeAny, flowAny };
