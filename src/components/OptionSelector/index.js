import styles from "./OptionSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function OptionSelector({ activeMenu, setActiveMenu }) {
  const themeContext = useContext(ThemeContext);
  const handleBreadMenuActive = () => {
    setActiveMenu(0);
  };

  const handleInsideMenuActive = () => {
    setActiveMenu(1);
  };

  const handleColorMenuActive = () => {
    setActiveMenu(2);
  };
  return (
    <div
      id={themeContext}
      className={`${styles.optionSelector} option_selector`}
    >
      <button
        id={themeContext}
        className={`${activeMenu === 0 ? "button_active" : null} option_button`}
        onClick={handleBreadMenuActive}
      >
        <img
          className={styles.icon}
          src="./static/images/bread_icon.svg"
          alt=""
        />
        Pan
      </button>
      <button
        className={`${activeMenu === 1 ? "button_active" : null} option_button`}
        onClick={handleInsideMenuActive}
      >
        <img
          className={styles.icon}
          src="./static/images/fill_icon.svg"
          alt=""
        />
        Relleno
      </button>
      <button
        className={`${activeMenu === 2 ? "button_active" : null} option_button`}
        onClick={handleColorMenuActive}
      >
        <img
          className={styles.icon}
          src="./static/images/color_icon.svg"
          alt=""
        />
        Color
      </button>
    </div>
  );
}
