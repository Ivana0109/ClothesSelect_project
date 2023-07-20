import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Display from "./Container/Display";

function App() {
  return (
    <div className={styles.container}>
      <h2>Moja garderoba</h2>
      <Display />
    </div>
  );
}

export default App;
