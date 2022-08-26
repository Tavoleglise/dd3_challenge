import useModelLoader from "../../hooks/useModelLoader";
import useLoadModelLists from "../../hooks/useLoadModelLists";

export default function ModelBread({ breadNumber, setActiveMenu }) {
  const gltf = useModelLoader({ number: breadNumber }, "bread");
  const { breadGltfList } = useLoadModelLists();

  const handleClick = () => {
    setActiveMenu(0);
  };

  return (
    <>
      <primitive
        onClick={handleClick}
        object={breadGltfList[breadNumber].scene}
        scale={2}
      />
    </>
  );
}
