import { useState } from "react";

export const useCounter = (
  initialValue: number,
  maxValue: number,
  minValue: number,
  stepValue: number
) => {
  const [count, setCount] = useState(initialValue);
  const isEven = count % 2 === 0;
  const increment = () => {
    if (count < maxValue) setCount(count + 1);
  };

  const decrement = () => {
    if (count > minValue) setCount(count - 1);
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

  const incrementStep = () => {
    if (count + stepValue <= maxValue) setCount(count + stepValue);
  };

  const decrementStep = () => {
    if (count - stepValue >= minValue) setCount(count - stepValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setToMin,
    setToMax,
    isEven,
    incrementStep,
    decrementStep,
  };
};
