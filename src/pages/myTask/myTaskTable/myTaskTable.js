import DataTable from "pages/muiComponents/DataTable"
import { myTaskTableStyle} from '@xebia/utility/AppContextProvider/defaultConfig';
import { DataGrid } from "@mui/x-data-grid";
import  useStyles  from './myTaskTable.style';
import { alpha, Box } from "@mui/material";

const MyTaskTable=()=>{
  const classes = useStyles();
    const columns = [
        {field: 'id', headerName: 'ID', flex: 1,  },
        {field: 'firstName', headerName: 'First name', flex: 1 },
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
          flex: 1,
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
        
        },
      ];
      const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 89},
        {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
        {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
        {id: 10, lastName: 'Targaryen', firstName: 'Daenerys', age: 89},
        {id: 11, lastName: 'Melisandre', firstName: null, age: 150},
        {id: 12, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
        {id: 13, lastName: 'Frances', firstName: 'Rossini', age: 36},
        {id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65},
        {id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65},
        {id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65},
      ];
    return <div style={{height: myTaskTableStyle.height, width: myTaskTableStyle.width}} className={classes.root}>
     <Box className={classes.dataGrid}>  
    <DataGrid
    
    rows={rows}
    columns={columns}
   
    density='compact'
    getRowId={(row) => row.id}
    disableColumnMenu
    pageSize={5}
    rowsPerPageOptions={[5]}
    // tableStyle={{height: myTaskTableStyle.height, width: myTaskTableStyle.width}}
    sx={{
    
      '& .MuiDataGrid-cell:hover': {
        color: (theme)=>alpha(theme.palette.primary.dark, 0.5),
      },
    }}
  /></Box>
  
  </div>
}
export default MyTaskTable