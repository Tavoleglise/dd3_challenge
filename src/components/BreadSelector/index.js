import styles from "./BreadSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function BreadSelector({ breadType, setBreadType }) {
  const themeContext = useContext(ThemeContext);

  const handleBaguette = () => {
    setBreadType(0);
    localStorage.setItem("breadType", "0");
  };

  const handleBuns = () => {
    setBreadType(1);
    localStorage.setItem("breadType", "1");
  };

  const handleSliced = () => {
    setBreadType(2);
    localStorage.setItem("breadType", "2");
  };
  return (
    <div
      id={themeContext}
      className={`${styles.bread_selector} bread_selector`}
    >
      <button
        className={breadType === 0 ? "active_button" : null}
        onClick={handleBaguette}
      >
        <img src="./static/images/baguette.png" alt="" />
      </button>
      <button
        className={breadType === 1 ? "active_button" : null}
        onClick={handleBuns}
      >
        <img src="./static/images/buns.png" alt="" />
      </button>
      <button
        className={breadType === 2 ? "active_button" : null}
        onClick={handleSliced}
      >
        <img src="./static/images/sliced.png" alt="" />
      </button>
    </div>
  );
}
