// helper functions
const id = (x: any) => x;
const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();

const arr = [1, 2, 3, 4, 5];

// 1.Given an array and we want all the elements +1
export const notPointfreeInc = arr.map(x => inc(x));
export const pointfreeInc = arr.map(id); // TODO

// 2. All the elements +1 and then toString
export const notPointfreeToString = arr.map(x => inc(x)).map(x => toString(x));
export const pointfreeToString = arr.map(id); // TODO

// 3. Compose inc and toString and then map it to the array
export const notPointfreeCompose = arr.map(x => toString(inc(x)));

const incAndToString = (x: number) => x; // TODO
export const pointfreeCompose = arr.map(id); // TODO
