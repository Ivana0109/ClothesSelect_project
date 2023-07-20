import React from "react";
import styles from "./Filter.module.css";

function Filter({ data, setValue, value }) {
  return (
    <div className={styles.container}>
      Filter
      {data.map((item:string) => {
        return (
          <div key={item}>
            {" "}
            <input
              type="radio"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={item}
              checked={value === item}
            />
            {item ? item : "bez filtera"}
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
