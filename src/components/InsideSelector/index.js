import styles from "./InsideSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function InsideSelector({
  handleBeefClick,
  handleHamClick,
  handleSalmonClick,
  insiteType,
}) {
  const themeContext = useContext(ThemeContext);
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
