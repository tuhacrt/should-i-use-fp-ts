/**
 * Pointfree is a feature of javascript that functions can consume params automatically.
 * You can see its effect while using array functions like map, filter, reduce...
 */
const inc = (x: number) => x + 1;
const toString = (x: number) => x.toString();
const incAndToString = (x: number) => toString(inc(x));

const arr = [1, 2, 3, 4, 5];

// 1.Given an array and we want all the elements +1
const notPointfreeInc = arr.map(x => inc(x));
const pointfreeInc = arr.map(inc);

// 2. Given an array and we want all the elements +1 and then toString
const notPointfreeToString = arr.map(x => inc(x)).map(x => toString(x));
const pointfreeToString = arr.map(inc).map(toString);

// 3. Compose inc and toString and then map it to the array
const notPointfreeCompose = arr.map(x => toString(inc(x)));
const pointfreeCompose = arr.map(incAndToString);

export {
  notPointfreeInc, notPointfreeToString, notPointfreeCompose,
  pointfreeInc, pointfreeToString, pointfreeCompose,
};
