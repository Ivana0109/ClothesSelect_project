import React from "react";
import DataTable from "./DataTable";
import Filter from "../Components/Filter";

function DataView({ data, refresh, setEditId, setFilter, filter }) {
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
