import React from "react";
import DataTable from "./DataTable";
import Filter from "../Components/Filter";
import { DataItem } from "../Components/types";

type Props = {
  data: DataItem[];
  refresh: () => void;
  setEditId: (value: number |null) => void;
  setFilter: (value: string) => void;
  filter: string;
};
function DataView({ data, refresh, setEditId, setFilter, filter }:Props) {
  return (
    <div>
      <Filter
        data={["", "majica", "hlače", "haljina"]}
        setValue={setFilter}
        value={filter}
      />
      <DataTable data={data} refresh={refresh} setEditId={setEditId} />
    </div>
  );
}

export default DataView;
