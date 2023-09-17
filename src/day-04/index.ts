/**
 * LeetCode 509. Fibonacci Number
 */
// Imperative
export const fibImp = (n: number): number => {
  if (n <= 1) return n;

  let [curr, prev1, prev2] = [0, 0, 1];

  for (let index = 2; index <= n; index++) {
    curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return curr;
};

// Declarative
export const fibDec = (n: number): number => n <= 1 ? n : fibDec(n - 1) + fibDec(n - 2);

/**
 * LeetCode 118. Pascal's Triangle
 */
// Imperative
export const pascalImp = (n: number): Array<Array<number>> => {
  const triangle: Array<Array<number>> = [];
  // first row
  triangle.push([1]);

  for (let row = 1; row < n; row++) {
    const currRow = [];
    const prevRow = triangle.at(-1) as Array<number>;

    currRow.push(1);

    for (let col = 1; col < row; col++) {
      currRow.push(prevRow[col - 1] + prevRow[col]);
    }

    currRow.push(1);
    triangle.push(currRow);
  }

  return triangle;
};

// Declarative
export const pascalDec = (n: number): Array<Array<number>> => {
  if (n === 1) return [[1]];

  const triangle = pascalDec(n - 1);
  const last = triangle.at(-1) as Array<number>;
  const curr = Array.from({ length: n }, (_, i) => (last[i - 1] || 0) + (last[i] || 0));

  return triangle.concat([curr]);
};
