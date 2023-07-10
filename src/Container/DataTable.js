import React from "react";
import TableRow from "../Components/TableRow";
import styles from "./DataTable.module.css";

function DataTable({ data = [], refresh, setEditId }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popis</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Size</th>
            <th>Color</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              item={item}
              refresh={refresh}
              setEditId={setEditId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
