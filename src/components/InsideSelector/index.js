import styles from "./InsideSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function InsideSelector({ insiteType, setInsiteType }) {
  const themeContext = useContext(ThemeContext);
  const handleBeefClick = () => {
    setInsiteType(0);
    localStorage.setItem("insiteType", "0");
  };
  const handleHamClick = () => {
    setInsiteType(1);
    localStorage.setItem("insiteType", "1");
  };
  const handleSalmonClick = () => {
    setInsiteType(2);
    localStorage.setItem("insiteType", "2");
  };
  return (
    <div
      id={themeContext}
      className={`${styles.inside_selector} inside_selector`}
    >
      <button
        className={insiteType === 0 ? "active_button" : null}
        onClick={handleBeefClick}
      >
        <img src="./static/images/beef.png" alt="" />
      </button>
      <button
        className={insiteType === 1 ? "active_button" : null}
        onClick={handleHamClick}
      >
        <img src="./static/images/ham.png" alt="" />
      </button>
      <button
        className={insiteType === 2 ? "active_button" : null}
        onClick={handleSalmonClick}
      >
        <img src="./static/images/salmon.png" alt="" />
      </button>
    </div>
  );
}
