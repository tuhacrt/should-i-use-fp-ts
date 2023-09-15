type fn = (...args: Array<any>) => any;

const pipeEasy = (x: any, ...fns: Array<fn>) => fns.reduce((y, fn) => fn(y), x);

const flowEasy = (...fns: Array<fn>) => (x: any) => fns.reduce((y, fn) => fn(y), x);

export { pipeEasy, flowEasy };
