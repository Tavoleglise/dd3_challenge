import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function useLoadModelLists() {
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

  return { breadGltfList, insideGltfList };
}
