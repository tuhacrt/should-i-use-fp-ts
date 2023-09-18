/**
 * LeetCode 509. Fibonacci Number
 */
// Imperative
const fibImp = (n: number): number => {
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
const fibDec = (n: number): number => n <= 1 ? n : fibDec(n - 1) + fibDec(n - 2);

/**
 * LeetCode 118. Pascal's Triangle
 */
// Imperative
const pascalImp = (n: number): Array<Array<number>> => {
  const triangle: Array<Array<number>> = [];

  for (let row = 0; row < n; row++) {
    if (!row) {
      triangle.push([1]);
      continue;
    }
    const currRow = Array<number>();
    const lastRow = triangle.at(-1) as Array<number>;

    for (let i = 0; i <= row; i++) {
      currRow.push((lastRow[i - 1] || 0) + (lastRow[i] || 0));
    }

    triangle.push(currRow);
  }

  return triangle;
};

// Declarative
const pascalDec = (n: number): Array<Array<number>> => {
  if (n === 1) return [[1]];

  const triangle = pascalDec(n - 1);
  const last = triangle.at(-1) as Array<number>;
  const curr = Array.from({ length: n }, (_, i) => (last[i - 1] || 0) + (last[i] || 0));

  return triangle.concat([curr]);
};

export { fibDec, fibImp, pascalDec, pascalImp };
