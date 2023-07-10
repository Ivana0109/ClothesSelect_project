import React, { useEffect, useState } from "react";
import Form from "./Form";
import DataView from "./DataView";
import axios from "axios";
import styles from "./Display.module.css";

function Display() {
  const [filter, setFilter] = useState("");
  const [savedData, setSavedData] = useState([]);
  const [editId, setEditId] = useState(null);
  const refresh = () => {
    axios
      .get(`http://localhost:3001/data${filter ? `?type=${filter}` : ""}`)
      .then((rez) => setSavedData(rez.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    refresh();
  }, [filter]);
  return (
    <div className={styles.container}>
      <Form refresh={refresh} editId={editId} setEditId={setEditId} />
      <DataView
        data={savedData}
        refresh={refresh}
        setEditId={setEditId}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Display;
