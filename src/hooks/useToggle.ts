import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  setToggle((toggle) => !toggle);

  return { toggle, setToggle };
};
