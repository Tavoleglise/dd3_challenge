import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useModelLoader({ number }, modelType) {
  const [breadType, setBreadType] = useState(
    modelType === "bread" ? "baguette" : "beef"
  );

  useEffect(() => {
    console.log(modelType);
    if (modelType === "bread") {
      if (number === 0) {
        setBreadType("baguette");
      } else if (number === 1) {
        setBreadType("buns");
      } else if (number === 2) {
        setBreadType("sliced");
      } else {
        setBreadType("baguette");
      }
    } else if (modelType === "inside") {
      if (number === 0) {
        setBreadType("beef");
      } else if (number === 1) {
        setBreadType("ham");
      } else if (number === 2) {
        setBreadType("salmon");
      } else {
        setBreadType("beef");
      }
    }
    console.log(number);
  }, [number]);
  const gltf = useLoader(
    GLTFLoader,
    `./static/models/${modelType}/${breadType}.glb`
  );
  return gltf;
}
