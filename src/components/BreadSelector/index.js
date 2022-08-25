import styles from "./BreadSelector.module.scss";
//import baguetteImage from './static/images/baguette.png';

export default function BreadSelector({
  handleBaguetteClick,
  handleBunsClick,
  handleSlicedClick,
}) {
  return (
    <div className={styles.bread_selector}>
      <button onClick={handleBaguetteClick}>
        <img src="./static/images/baguette.png" alt="" />
      </button>
      <button onClick={handleBunsClick}>
        <img src="./static/images/buns.png" alt="" />
      </button>
      <button onClick={handleSlicedClick}>
        <img src="./static/images/sliced.png" alt="" />
      </button>
    </div>
  );
}
