import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useFlagModelLoader({ color }) {
  const [flagColor, setFlagColor] = useState("#505050");
  const gltf = useLoader(GLTFLoader, `./static/models/flag/flag.glb`);
  useEffect(() => {
    console.log(gltf);
    gltf.materials.colorFlagMaterial.color.r = 9;
    gltf.materials.colorFlagMaterial.color.g = 9;
    gltf.materials.colorFlagMaterial.color.b = 9;
  }, []);

  return gltf;
}
