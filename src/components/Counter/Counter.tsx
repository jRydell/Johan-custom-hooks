// Counter.js

import "./Counter.css";
import { useCounter } from "../../hooks/useCounter";

type counterProps = {
  initialValue: number;
  maxValue: number;
  minValue: number;
  stepValue: number;
};

const Counter = ({
  initialValue,
  maxValue,
  minValue,
  stepValue,
}: counterProps) => {
  const {
    count,
    increment,
    decrement,
    reset,
    setToMax,
    setToMin,
    isEven,
    incrementStep,
    decrementStep,
  } = useCounter(initialValue, maxValue, minValue, stepValue);

  return (
    <div className="Counter">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setToMax}>Max</button>
      <button onClick={setToMin}>Min</button>
      <button onClick={incrementStep}>Increment step</button>
      <button onClick={decrementStep}>Decrement step</button>
      <button onClick={reset}>Reset</button>

      <p>Count: {count}</p>
      <p>The number {isEven ? "is even" : "odd"}</p>
    </div>
  );
};

export default Counter;
