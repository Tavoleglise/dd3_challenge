import useModelLoader from "../../hooks/useModelLoader";

export default function ModelInside({ insideNumber }) {
  const gltf = useModelLoader({ number: insideNumber }, "inside");
  return (
    <>
      <primitive object={gltf.scene} scale={2} />
    </>
  );
}
