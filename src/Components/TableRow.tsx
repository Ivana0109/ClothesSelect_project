import axios from "axios";
import React from "react";
import styles from "./TableRow.module.css";
import { DataItem } from "./types";
type Props = {
  item: DataItem;
  refresh: () => void;
  setEditId: (value: number| null) => void;
  key?: number;
};
function TableRow({ item, refresh, setEditId, key }: Props) {
  const onDelete = () => {
    axios
      .delete(`http://localhost:3001/data/${item.id}`)
      .then((res) => refresh())
      .catch((err) => console.log(err.message));
  };

  return (
    <tr className={styles.container}>
      <td>{item.id}</td>
      <td>{item.type}</td>
      <td>{item.size}</td>
      <td>
        <div
          style={{
            background: item.color,
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
        ></div>
      </td>
      <td>
        <img className={styles.img} src={item.photo} alt="" />
      </td>
      <td>
        <div className={styles.buttons}>
          <button
            className={styles.buttonDelete}
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                onDelete();
            }}
          >
            Delete
          </button>
          <button
            className={styles.buttonEdit}
            onClick={() => setEditId(item.id || null)}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
