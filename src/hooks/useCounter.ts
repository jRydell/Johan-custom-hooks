import { useState } from "react";

export const useCounter = (
  initialValue: number,
  maxValue: number,
  minValue: number
) => {
  const [count, setCount] = useState(initialValue);
  const isEven = count % 2 === 0;

  const increment = (num: number) => {
    if (count + num <= maxValue) setCount(count + num);
  };

  const decrement = (num: number) => {
    if (count - num >= minValue) setCount(count - num);
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
