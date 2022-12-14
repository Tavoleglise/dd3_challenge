import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useModelLoader({ number }, modelType) {
  const [model, setModel] = useState(
    modelType === "bread" ? "baguette" : "beef"
  );

  const breadList = ["baguette", "buns", "sliced"];
  const insideList = ["beef", "ham", "salmon"];

  const gltfBaguette = useLoader(
    GLTFLoader,
    `./static/models/bread/baguette.glb`
  );
  const gltfBuns = useLoader(GLTFLoader, `./static/models/bread/buns.glb`);
  const gltfSliced = useLoader(GLTFLoader, `./static/models/bread/sliced.glb`);

  const gltfBeef = useLoader(GLTFLoader, `./static/models/inside/beef.glb`);
  const gltfHam = useLoader(GLTFLoader, `./static/models/inside/ham.glb`);
  const gltfSalmon = useLoader(GLTFLoader, `./static/models/inside/salmon.glb`);

  const breadGltfList = [gltfBaguette, gltfBuns, gltfSliced];
  const insideGltfList = [gltfBeef, gltfHam, gltfSalmon];

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
