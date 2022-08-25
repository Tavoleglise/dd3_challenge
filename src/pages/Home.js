import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import ModelBread from "../components/ModelBread";
import ModelInside from "../components/ModelInside";
import CanvasContainer from "../components/CanvasContainer";


export default function Home() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ModelBread breadNumber={0} />
          <ModelInside insideNumber={2} />
          <OrbitControls />
        </Suspense>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
