import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ModelBread from "../ModelBread";
import ModelInside from "../ModelInside";
import styles from "./CanvasContainer.module.scss";

export default function CanvasContainer({ breadType, insiteType }) {
  return (
    <div className={styles.container}>
      <Canvas>
        <Suspense fallback={null}>
          <ModelBread breadNumber={breadType} />
          <ModelInside insideNumber={insiteType} />
          <OrbitControls />
        </Suspense>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
