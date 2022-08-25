import { useState, useEffect } from "react";
import OptionSelector from "../../components/OptionSelector";
import BreadSelector from "../../components/BreadSelector";
import CanvasContainer from "../../components/CanvasContainer";

export default function Home() {
  const [breadType, setBreadType] = useState(0);
  const [insiteType, setInsiteType] = useState(0);
  const [flagColor, setFlagColor] = useState(0);

  const handleBaguetteClick = () => {
    setBreadType(0);
  };
  const handleBunsClick = () => {
    setBreadType(1);
  };
  const handleSlicedClick = () => {
    setBreadType(2);
  };

  const handleBeefClick = () => {
    setInsiteType(0);
  };
  const handleHamClick = () => {
    setInsiteType(1);
  };
  const handleSalmonClick = () => {
    setInsiteType(2);
  };

  useEffect(() => {});
  return (
    <div className="App-content">
      <h1>Personaliza tu sandwitch</h1>
      <CanvasContainer breadType={breadType} insiteType={insiteType} />
      <OptionSelector />
      <BreadSelector
        handleBaguetteClick={handleBaguetteClick}
        handleBunsClick={handleBunsClick}
        handleSlicedClick={handleSlicedClick}
      />
      <div>Inside</div>
      <button onClick={handleBeefClick}>Beef</button>
      <button onClick={handleHamClick}>Ham</button>
      <button onClick={handleSalmonClick}>Salmon</button>
    </div>
  );
}
