/* eslint-disable prettier/prettier */
import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {makeStyles} from '@mui/styles';
import { alpha } from '@mui/material';

export default function DataTable({
    
  // eslint-disable-next-line react/prop-types
  rows,
  // eslint-disable-next-line react/prop-types
  columns,
  // eslint-disable-next-line react/prop-types
  pageSizeOutSide,
  // eslint-disable-next-line react/prop-types
  rowsPerPageOptions,
  // eslint-disable-next-line react/prop-types
  density,
  // eslint-disable-next-line react/prop-types
  getRowId,
  // eslint-disable-next-line react/prop-types
  tableStyle,
  headerHeight,
  getRowHeight,
  ...other

}) {
  const useStyles = makeStyles((theme) => ({
    grid: {
      borderRadius: '1%',
      fontSize: 14,
      cursor: 'default',
      overflow: 'hidden',
      '& .MuiDataGrid-row:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.15),
        transition: 'all 0.4s ease',
      },
      '& .MuiDataGrid-columnHeaders': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.85),
        color: '#fff',
        fontSize: 14,
      },
      '& .MuiDataGrid-virtualScrollerRenderZone': {
        '& .MuiDataGrid-row': {
          '&:nth-of-type(2n)': {
            backgroundColor: 'rgba(235, 235, 235, .7)',
          },
        },
      },
      '& .MuiDataGrid-virtualScroller, & .MuiTablePagination-root': {
        '&::-webkit-scrollbar': {
          width: '7px',
          height:'7px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#808080',
          opacity: 0,
          transition: 'opacity 0.2s linear',
          borderRadius: '7px',
        },
      },
    },
  }));

  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState(pageSizeOutSide);

  return (
    <div style={tableStyle}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        density={density}
        getRowId={getRowId}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        headerHeight={headerHeight}
        getRowHeight={()=>getRowHeight}
        className={classes.grid}
        {...other}
      />
    </div>
  );
}
