import * as React from 'react';
import DataTable from 'pages/muiComponents/DataTable';
import { tableDisplay, tableStyle } from '@xebia/utility/AppContextProvider/defaultConfig';
const CompletedRequests = () => {
  const columns = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'firstName', headerName: 'First name', flex: 1},
    {field: 'lastName', headerName: 'Last name', flex: 1},
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
    },
  ];

  const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
  ];
  return (
    <>
      <div
        style={{
          height: tableDisplay.height,
          width: tableDisplay.width,
        }}
      >
        <DataTable
          rows={rows}
          columns={columns}
          pageSizeOutSide={10}
          rowsPerPageOptions={[5, 10]}
          density='compact'
          getRowId={(row) => row.id}
          tableStyle={{height: tableStyle.height, width: tableStyle.width}}
          disableColumnMenu
        />
      </div>
    </>
  );
};
export default CompletedRequests;
