import React from "react";
import styles from "./SelectColor.module.css";
function SelectColor({ setValue, value }) {
  return (
    <div>
      <input
        className={styles.input}
        type="color"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default SelectColor;
