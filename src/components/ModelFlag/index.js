import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ModelFlag({ color }, props) {
  const { nodes, materials } = useGLTF("./static/models/flag/flag.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stick.geometry}
        material={materials.stickMat}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorFlag.geometry}
        material={materials.colorFlagMaterial}
        material-color={color}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dd360Flag.geometry}
        material={materials.dd360Logo}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/flag.glb");
