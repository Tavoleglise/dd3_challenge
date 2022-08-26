import styles from "./BreadSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function BreadSelector({
  handleBaguetteClick,
  handleBunsClick,
  handleSlicedClick,
  breadType,
}) {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      id={themeContext}
      className={`${styles.bread_selector} bread_selector`}
    >
      <button
        className={breadType === 0 ? "active_button" : null}
        onClick={handleBaguetteClick}
      >
        <img src="./static/images/baguette.png" alt="" />
      </button>
      <button
        className={breadType === 1 ? "active_button" : null}
        onClick={handleBunsClick}
      >
        <img src="./static/images/buns.png" alt="" />
      </button>
      <button
        className={breadType === 2 ? "active_button" : null}
        onClick={handleSlicedClick}
      >
        <img src="./static/images/sliced.png" alt="" />
      </button>
    </div>
  );
}
