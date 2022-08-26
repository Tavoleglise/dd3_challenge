import useModelLoader from "../../hooks/useModelLoader";

export default function ModelBread({ breadNumber }) {
  const gltf = useModelLoader({ number: breadNumber }, "bread");
  return (
    <>
      <primitive object={gltf.scene} scale={2} />
    </>
  );
}
