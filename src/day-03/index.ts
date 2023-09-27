const ImpureFunctionDemo = () => {
  // this variable is mutable
  let num = 0;

  // no input, one output, side effect
  const inc = () => ++num;
  // one input, no output, side effect
  const inc2 = (num2: number) => {
    num2 = ++num;
    // other side effect...
    // console.log(num2);
  };

  inc(); // 1
  // num; // 1
  inc2(num); // 2
  // num; // 2
};

const PureFunctionDemo = () => {
  // this variable is immutable
  const num = 0;

  // one input, one output, no side effect
  const inc = (num: number) => num + 1;

  inc(num); // 1
  // num; // 0
  inc(num); // 1
  // num; // 0
};

ImpureFunctionDemo();

PureFunctionDemo();
