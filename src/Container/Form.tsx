import React, { useEffect, useState } from "react";
import SelectColor from "../Components/SelectColor";
import SelectPhoto from "../Components/SelectPhoto";
import Select from "../Components/Select";
import axios from "axios";
import styles from "./Form.module.css";
import { DataItem } from "../Components/types";

type Props = {

  refresh: () => void;
  editId:number|null ;
  setEditId: (value: number |null) => void;

};


const INITIAL_DATA = {
  type: "",
  size: "",
  color: "#000000",
  photo: "",
};

function Form({ refresh, editId, setEditId }:Props) {
  const [data, setData] = useState<DataItem>(INITIAL_DATA);
  const resetData = () => {
    setData(INITIAL_DATA);
    setEditId(null);
  };
  const sendData = (event: React.FormEvent<HTMLFormElement>) => {
    const { type, size, photo } = data;
    event.preventDefault();
    if (!type || !size || !photo) {
      alert("Popuni sve podatke za unos!");
    } else {
      (editId
        ? axios.put(`http://localhost:3001/data/${editId}`, data)
        : axios.post("http://localhost:3001/data", data)
      ).then((rez) => {
        resetData();
        refresh();
      });
    }
  };

  useEffect(() => {
    if (editId !== null) {
      axios
        .get(`http://localhost:3001/data/${editId}`)
        .then((rez) => setData(rez.data))
        .catch((err) => console.log(err.message));
    }
  }, [editId]);
  return (
    <form onSubmit={(e)=>sendData(e)} className={styles.container}>
      <div> {editId ? `ID: ${editId}` : "Novi unos"}</div>
      <SelectColor
        setValue={(value) => setData({ ...data, color: value })}
        value={data.color}
      />
      <SelectPhoto
        setValue={(value) => setData({ ...data, photo: value })}
        value={data.photo}
      />
      <Select
        options={["majica", "hlače", "haljina"]}
        setValue={(value) => setData({ ...data, type: value })}
        placeholder={"Vrsta"}
        value={data.type}
      />
      <Select
        options={["S", "M", "L"]}
        setValue={(value) => setData({ ...data, size: value })}
        placeholder={"Veličina"}
        value={data.size}
      />
      <button className={styles.button} type="submit">
        Spremi
      </button>
      {editId && (
        <button className={styles.button} onClick={resetData}>
          Odustani
        </button>
      )}
    </form>
  );
}

export default Form;
