import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import "./ModeToggle.css";
import { useToggle } from "../../hooks/useToggle";

const ModeToggle = ({ title }: { title: string }) => {
  const { toggle, toggleState } = useToggle();
  const body = document.querySelector("body");
  toggle ? body?.classList.add("darkMode") : body?.classList.remove("darkMode");
  return (
    <>
      <h3>{title}</h3>
      <button onClick={toggleState}>
        {toggle ? (
          <FaToggleOn className="dark-mode-icon" />
        ) : (
          <FaToggleOff className="dark-mode-icon" />
        )}
      </button>
    </>
  );
};

export default ModeToggle;
