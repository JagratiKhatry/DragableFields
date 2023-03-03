import { myTaskTableStyle } from '@xebia/utility/AppContextProvider/defaultConfig';
import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => {
    return {
        dataGrid: {
        height: myTaskTableStyle.height,
        width: myTaskTableStyle.width,
        color:"white",
        '& .MuiDataGrid-columnHeadersInner': {
            backgroundColor:  alpha(theme.palette.primary.dark, 0.85),
            maxHeight: "80px",
        },
        '& .MuiDataGrid-row':{
            minHeight:'59px'
        }
    }
}
});
export default useStyles;


