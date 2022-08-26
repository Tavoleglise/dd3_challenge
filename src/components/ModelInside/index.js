import useModelLoader from "../../hooks/useModelLoader";
import useLoadModelLists from "../../hooks/useLoadModelLists";

export default function ModelInside({ insideNumber, setActiveMenu }) {
  const gltf = useModelLoader({ number: insideNumber }, "inside");
  const { insideGltfList } = useLoadModelLists();

  const handleClick = () => {
    setActiveMenu(1);
  };
  return (
    <>
      <primitive
        onClick={handleClick}
        object={insideGltfList[insideNumber].scene}
        scale={2}
      />
    </>
  );
}
