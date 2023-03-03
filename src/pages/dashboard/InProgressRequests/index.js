import * as React from 'react';
import DataTable from 'pages/muiComponents/DataTable';
import {
  tableDisplay,
  tableStyle,
} from '@xebia/utility/AppContextProvider/defaultConfig';
import { alpha, Chip } from '@mui/material';
import IntlMessages from '@xebia/utility/IntlMessages';
import { useIntl } from 'react-intl';
const InProgessRequests = () => {

  const intl = useIntl()

  const columns = [
    {field: 'requestNumber', headerName: <IntlMessages id='requests.reqNo' />, flex: 1,sortable: false},
    {field: 'serviceType', headerName: <IntlMessages id='requests.serviceType' />, flex: 2,sortable: false},
    {field: 'requestDate', headerName: <IntlMessages id='requests.date' />, flex: 1,sortable: false},
    {
      field: "requestStatus",
      headerName: <IntlMessages id='requests.status' />,
      flex: 1,sortable: false,
      description: 'This column tells you the current status of Ongoing Request',
      renderCell: ({ value, row }) => {
        const { requestStatus } = row;
          return (
            <Chip
              label={requestStatus}
              variant="filled"
              size="small"
              color="primary"
              sx={{ paddingLeft: "10px", paddingRight: "10px", color: "#fff" }}
            />
          );
      }
    },
  ];

  const rows = [
    {requestNumber: 'REQ-02-13-09871', serviceType: intl.formatMessage({id:'requests.ORC'}), requestDate: '07/02/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-02222', serviceType: intl.formatMessage({id:'requests.reqToAmdProfCateg'}), requestDate: '06/02/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-03333', serviceType: intl.formatMessage({id:'requests.applForProfReReg'}), requestDate: '03/02/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-04444', serviceType: intl.formatMessage({id:'requests.reqToAmdProfCateg'}), requestDate: '07/02/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-05555', serviceType: intl.formatMessage({id:'requests.ORC'}), requestDate: '16/02/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-06666', serviceType: intl.formatMessage({id:'requests.ORC'}), requestDate: '06/06/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-07777', serviceType: intl.formatMessage({id:'requests.applForProfReReg'}), requestDate: '06/01/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-08888', serviceType: intl.formatMessage({id:'requests.ORC'}), requestDate: '30/03/2023', requestStatus: <IntlMessages id='common.inProgress' />},
    {requestNumber: 'REQ-02-13-09999', serviceType: intl.formatMessage({id:'requests.reqToAmdProfCateg'}), requestDate: '16/04/2023', requestStatus: <IntlMessages id='common.inProgress' />},
  ];
  return (
    <>
      <div style={{height: 500, width: tableDisplay.width}}>
        <DataTable
          rows={rows}
          columns={columns}
          pageSizeOutSide={10}
          rowsPerPageOptions={[5, 10]}
          density='compact'
          getRowId={(row) => row.requestNumber}
          disableColumnMenu
          headerHeight={90}
          getRowHeight={50}
          tableStyle={{height: 500, width: tableStyle.width}}
        />
      </div>
    </>
  );
};
export default InProgessRequests;
