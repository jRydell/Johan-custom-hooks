import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import "./DarkModeToggle.css";
import { useToggle } from "../../hooks/UseToggle";

const DarkModeToggle = () => {
  const { toggle, toggleState } = useToggle();
  const body = document.querySelector("body");
  toggle ? body?.classList.add("darkMode") : body?.classList.remove("darkMode");
  return (
    <>
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

export default DarkModeToggle;
