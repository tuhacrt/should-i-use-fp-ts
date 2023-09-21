const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();
/**
 * You need to build a strict type flow function that can compose the function above.
 * which can make incAndToString work.
 */
const narrowFlow2 = undefined; // TODO
const incAndToString = narrowFlow2(inc, toString);

/**
 * You need to build a strict type flow function that accepts 2 functions.
 */
type Flow2 = undefined; // TODO
const flow2 = undefined; // TODO

/**
 * You need to build a generic type pipe2 function that accepts 2 functions and 1 variable.
 */
type Pipe2 = undefined; // TODO
const pipe2 = undefined; // TODO

export { narrowFlow2, flow2, pipe2, incAndToString };
