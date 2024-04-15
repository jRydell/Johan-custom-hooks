import { useState } from "react";

export const useCounter = () => {
  const [x, setX] = useState(0);

  const incrementX = () => {
    setX(x + 1);
  };

  return [x, incrementX];
};
