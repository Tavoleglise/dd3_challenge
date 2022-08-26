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

  const handleChangeFlagColor = (color) => {
    setFlagColor(color);
  };
  useEffect(() => {
    if (localStorage.getItem("breadType")) {
      setBreadType(parseInt(localStorage.getItem("breadType")));
    }
    if (localStorage.getItem("insiteType")) {
      setInsiteType(parseInt(localStorage.getItem("insiteType")));
    }
    if (localStorage.getItem("flagColor")) {
      setFlagColor(localStorage.getItem("flagColor"));
    }
  }, []);
  return (
    <div className={styles.App_box}>
      <div id={themeContext} className={`${styles.title} title`}>
        Personaliza tu sandwich
      </div>
      <CanvasContainer
        breadType={breadType}
        insiteType={insiteType}
        flagColor={flagColor}
        setActiveMenu={setActiveMenu}
      />
      <OptionSelector activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {(() => {
        if (activeMenu === 0) {
          return (
            <BreadSelector breadType={breadType} setBreadType={setBreadType} />
          );
        } else if (activeMenu === 1) {
          return (
            <InsideSelector
              insiteType={insiteType}
              setInsiteType={setInsiteType}
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
