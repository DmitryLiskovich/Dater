import React from "react";
import MaterialTable from "material-table";

export default function SortTable(props) {
  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "User Name", field: "userName" },
    { title: "Tasks", field: "tasks" },
    { title: "Level", field: "level" }
  ];
  let data = props.data;
  return (
    <MaterialTable
      title=""
      columns={columns}
      data={data}
      editable={{
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            console.log(data[data.indexOf(oldData)]);
            props.deleteUser(data[data.indexOf(oldData)].id);
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            props.update(newData);
            resolve();
          })
      }}
    />
  );
}
