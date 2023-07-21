import React from "react";
import TableRow from "../Components/TableRow";
import styles from "./DataTable.module.css";
import { DataItem} from "../Components/types";
type Props={
  data:DataItem[],
  refresh:()=>void,
  setEditId:(value:number |null)=>void
 
}

function DataTable({ data, refresh, setEditId }:Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popis</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tip</th>
            <th>Veličina</th>
            <th>Boja</th>
            <th>Fotografija</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:DataItem) => (
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
