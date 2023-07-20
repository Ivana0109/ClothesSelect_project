import React from "react";
import styles from "./Select.module.css";
import { SelectTypes } from "./types";

function SelectSize({ setValue, options, placeholder, value }:SelectTypes) {
  return (
    <div>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {" "}
        <option value="">{placeholder}</option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectSize;
