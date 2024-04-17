import { useState } from "react";

export const useCounter = (
  initialValue: number,
  maxValue: number,
  minValue: number
) => {
  const [count, setCount] = useState(initialValue);
  const isEven = count % 2 === 0;

  const increment = (value: number) => {
    if (count + value <= maxValue) setCount(count + value);
  };

  const decrement = (value: number) => {
    if (count - value >= minValue) setCount(count - value);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setToMin = () => {
    setCount(minValue);
  };

  const setToMax = () => {
    setCount(maxValue);
  };

  return {
    count,
    reset,
    setToMin,
    setToMax,
    isEven,
    increment,
    decrement,
  };
};
