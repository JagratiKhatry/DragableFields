import React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IntlMessages from '@xebia/utility/IntlMessages';

export const ForgotPasswordSuccess = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CheckCircleIcon color='success' style={{fontSize: '100px'}} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='body2' component='p'>
              <IntlMessages id='auth.you_can_now_use_our_services_by_logging_in' />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ForgotPasswordSuccess;
