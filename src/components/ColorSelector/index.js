import styles from "./ColorSelector.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function ColorSelector({ handleChangeFlagColor, flagColor }) {
  const colorPallete = ["#E36666", "#F1C76D", "#9BBB79", "#5F8E8D", "#427D9D"];
  const themeContext = useContext(ThemeContext);
  return (
    <div id={themeContext} className={`${styles.container} color_selector`}>
      {colorPallete.map((el) => (
        <ColorButton
          handleChangeFlagColor={handleChangeFlagColor}
          color={el}
          colorSelected={flagColor}
        />
      ))}
    </div>
  );
}

const ColorButton = ({ color, handleChangeFlagColor, colorSelected }) => {
  const handleOnClick = () => {
    handleChangeFlagColor(color);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`${styles.colorButton} ${
        colorSelected == color ? "active_button" : null
      }`}
      onClick={handleOnClick}
    ></div>
  );
};
