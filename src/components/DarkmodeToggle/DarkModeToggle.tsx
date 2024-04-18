import { UseToggle } from "../../hooks/UseToggle";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const { toggle, toggleState } = UseToggle();
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
