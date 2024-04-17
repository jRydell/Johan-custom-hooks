import "./Counter.css";
import { useCounter } from "../../hooks/useCounter";

type counterProps = {
  initialValue: number;
  maxValue: number;
  minValue: number;
  stepValue: number;
  countValue: number;
};

const Counter = ({
  initialValue,
  maxValue,
  minValue,
  stepValue,
  countValue,
}: counterProps) => {
  const { count, increment, decrement, reset, setToMax, setToMin, isEven } =
    useCounter(initialValue, maxValue, minValue);

  return (
    <div className="Counter">
      <button onClick={() => increment(countValue)}>Increment</button>
      <button onClick={() => decrement(countValue)}>decrement</button>

      <button onClick={setToMax}>Max</button>
      <button onClick={setToMin}>Min</button>
      <button onClick={() => increment(stepValue)}>Increment step</button>
      <button onClick={() => decrement(stepValue)}>Decrement step</button>

      <button onClick={reset}>Reset</button>

      <p>Count: {count}</p>
      <p>{isEven ? "even" : "odd"}</p>
      <p>Max: {maxValue}</p>
      <p>Min: {minValue}</p>
      <p>Initial: {initialValue}</p>
    </div>
  );
};

export default Counter;
