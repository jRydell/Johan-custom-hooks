import "./ToggleButton.css";
import { ReactNode } from "react";

type Button = {
  children: ReactNode;
  onClick: () => void;
};

const ToggleButton = ({ onClick, children }: Button) => {
  return (
    <>
      <button className="ToggleButton" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ToggleButton;
