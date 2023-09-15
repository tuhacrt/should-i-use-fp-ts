/* eslint-disable unused-imports/no-unused-vars */

// helper functions
const id = (x: any) => x;
const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();
const incAndToString = (x: number) => toString(inc(x));

const arr = [1, 2, 3, 4, 5];

// 1.Given an array and we want all the elements +1
const notPointfreeInc = arr.map(x => x); // TODO
const pointfreeInc = arr.map(id); // TODO

// 2. All the elements +1 and then toString
const notPointfreeToString = arr.map(x => x); // TODO
const pointfreeToString = arr.map(id); // TODO

// 3. Compose inc and toString and then map it to the array
const notPointfreeCompose = arr.map(x => x); // TODO
const pointfreeCompose = arr.map(id); // TODO

export {
  notPointfreeInc, notPointfreeToString, notPointfreeCompose,
  pointfreeInc, pointfreeToString, pointfreeCompose,
};
