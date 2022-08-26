import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ModelBread from "../ModelBread";
import ModelInside from "../ModelInside";
import ModelFlag from "../ModelFlag";
import styles from "./CanvasContainer.module.scss";
import { ThemeContext } from "../../App";

export default function CanvasContainer({ breadType, insiteType, flagColor }) {
  const themeContext = useContext(ThemeContext);
  return (
    <div id={themeContext} className={`${styles.container} container`}>
      <Canvas>
        <Suspense fallback={null}>
          <ModelBread breadNumber={breadType} />
          <ModelInside insideNumber={insiteType} />
          <ModelFlag color={flagColor} />
          <OrbitControls />
        </Suspense>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
