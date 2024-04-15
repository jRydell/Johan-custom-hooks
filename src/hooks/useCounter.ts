import { useState } from "react";

export const useCounter = (
  initialValue: number,
  maxValue: number,
  minValue: number,
  stepValue: number
) => {
  const [count, setCount] = useState(initialValue);
  const isEven = count % 2 === 0;
  const increment = (): void => {
    if (count < maxValue) setCount(count + 1);
  };

  const decrement = (): void => {
    if (count > minValue) setCount(count - 1);
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  const setToMin = (): void => {
    setCount(minValue);
  };

  const setToMax = (): void => {
    setCount(maxValue);
  };

  const incrementStep = (): void => {
    if (count + stepValue <= maxValue) setCount(count + stepValue);
  };

  const decrementStep = (): void => {
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
