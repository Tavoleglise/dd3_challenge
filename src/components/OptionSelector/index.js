import styles from "./OptionSelector.module.scss";

export default function OptionSelector() {
  return (
    <div className={styles.optionSelector}>
      <button>Bread</button>
      <button>Inside</button>
      <button>Color</button>
    </div>
  );
}
