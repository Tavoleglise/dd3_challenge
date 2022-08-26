import { useState, useEffect, useContext } from "react";
import OptionSelector from "../../components/OptionSelector";
import BreadSelector from "../../components/BreadSelector";
import InsideSelector from "../../components/InsideSelector";
import ColorSelector from "../../components/ColorSelector";
import CanvasContainer from "../../components/CanvasContainer";
import styles from "./Home.module.scss";
import { ThemeContext } from "../../App";

export default function Home() {
  const [breadType, setBreadType] = useState(0);
  const [insiteType, setInsiteType] = useState(0);
  const [flagColor, setFlagColor] = useState("#E36666");
  const [activeMenu, setActiveMenu] = useState(0);

  const themeContext = useContext(ThemeContext);

  const handleBaguetteClick = () => {
    setBreadType(0);
  };
  const handleBunsClick = () => {
    setBreadType(1);
  };
  const handleSlicedClick = () => {
    setBreadType(2);
  };

  const handleBeefClick = () => {
    setInsiteType(0);
  };
  const handleHamClick = () => {
    setInsiteType(1);
  };
  const handleSalmonClick = () => {
    setInsiteType(2);
  };

  const handleBreadMenuActive = () => {
    setActiveMenu(0);
  };

  const handleInsideMenuActive = () => {
    setActiveMenu(1);
  };

  const handleColorMenuActive = () => {
    setActiveMenu(2);
  };

  const handleChangeFlagColor = (color) => {
    setFlagColor(color);
  };

  useEffect(() => {}, []);
  return (
    <div className={styles.App_box}>
      <div id={themeContext} className={`${styles.title} title`}>
        Personaliza tu sandwitch
      </div>
      <CanvasContainer
        breadType={breadType}
        insiteType={insiteType}
        flagColor={flagColor}
      />
      <OptionSelector
        handleBreadMenuActive={handleBreadMenuActive}
        handleInsideMenuActive={handleInsideMenuActive}
        handleColorMenuActive={handleColorMenuActive}
        activeMenu={activeMenu}
      />
      {(() => {
        if (activeMenu === 0) {
          return (
            <BreadSelector
              handleBaguetteClick={handleBaguetteClick}
              handleBunsClick={handleBunsClick}
              handleSlicedClick={handleSlicedClick}
              breadType={breadType}
            />
          );
        } else if (activeMenu === 1) {
          return (
            <InsideSelector
              handleBeefClick={handleBeefClick}
              handleHamClick={handleHamClick}
              handleSalmonClick={handleSalmonClick}
              insiteType={insiteType}
            />
          );
        } else if (activeMenu === 2) {
          return (
            <ColorSelector
              handleChangeFlagColor={handleChangeFlagColor}
              flagColor={flagColor}
            />
          );
        }
      })()}
    </div>
  );
}