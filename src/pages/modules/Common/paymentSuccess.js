import {Box, Grid, Typography} from '@mui/material';
import {Stack} from '@mui/system';
import AppDialog from '@xebia/core/AppDialog';
import IntlMessages from '@xebia/utility/IntlMessages';
import {MuiButton} from 'pages/reactMuiControls/MuiButton';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {dummyApi} from 'redux/actions';
import {Fonts} from 'shared/constants/AppEnums';

export const PaymentSuccess = ({isOpen, setIsOpen, data, paymentDetails}) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleOnClose = async () => {
    await dispatch(dummyApi(false, setIsOpen));
    await dispatch(dummyApi('/services', Navigate));
  };

  const downloadReceipt = async () => {
    console.log('receipt downloded', paymentDetails);
    //call api
  };

  const sentMail = async () => {
    console.log('mail sent', paymentDetails);
    // call api
  };

  return (
    <AppDialog
      open={!!isOpen}
      PaperProps={{
        style: {
          minWidth: '60%',
          maxHeight: '80%',
        },
      }}
      onClose={handleOnClose}
    >
      <Grid
        container
        px={4}
        py={8}
        sx={{alignItems: 'center', textAlign: 'center'}}
      >
        <Grid item xs={12} md={5} p={4}>
          <img src='/assets/images/pana.svg' alt='payment success' />
        </Grid>
        <Grid item xs={12} md={7} p={4}>
          <Stack spacing={4}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: Fonts.BOLD,
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {data.message}
            </Typography>
            <Typography sx={{mx: 4, fontSize: 16}}>{data.desc}</Typography>
            <Box px={16}>
              <MuiButton
                sx={{mb: 2, width: '100%'}}
                label={<IntlMessages id='services.downloadReceipt' />}
                variant='outlined'
                onClick={() => downloadReceipt()}
              />

              <MuiButton
                sx={{width: '100%'}}
                label={<IntlMessages id='services.sentToEMail' />}
                variant='contained'
                onClick={() => sentMail()}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </AppDialog>
  );
};
