import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useModelLoader({ number }, modelType) {
  const [model, setModel] = useState(
    modelType === "bread" ? "baguette" : "beef"
  );

  useEffect(() => {
    if (modelType === "bread") {
      if (number === 0) {
        setModel("baguette");
      } else if (number === 1) {
        setModel("buns");
      } else if (number === 2) {
        setModel("sliced");
      } else {
        setModel("baguette");
      }
    } else if (modelType === "inside") {
      if (number === 0) {
        setModel("beef");
      } else if (number === 1) {
        setModel("ham");
      } else if (number === 2) {
        setModel("salmon");
      } else {
        setModel("beef");
      }
    }
  }, [number]);
  const gltf = useLoader(
    GLTFLoader,
    `./static/models/${modelType}/${model}.glb`
  );
  return gltf;
}
