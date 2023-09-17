const ImpureFunctionDemo = () => {
  // this variable is mutable
  let num = 0;

  // no input, one output, side effect
  const inc = () => ++num;
  // one input, no output, side effect
  const inc2 = (num2: number) => {
    num2 = ++num;
    // other side effect...
    console.log(num2);
  };

  console.log(`increased 1: ${inc()}`);
  console.log(`original: ${num}`);
  console.log(`increased 2: ${inc2(num)}`);
  console.log(`original: ${num}\n`);
};

const PureFunctionDemo = () => {
  // this variable is immutable
  const num = 0;

  // one input, one output, no side effect
  const inc = (num: number) => num + 1;

  console.log(`increased 1: ${inc(num)}`);
  console.log(`original: ${num}`);
  console.log(`increased 2: ${inc(num)}`);
  console.log(`original: ${num}`);
};

ImpureFunctionDemo();

PureFunctionDemo();
