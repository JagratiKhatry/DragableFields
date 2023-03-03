import {Box, Stack, Typography} from '@mui/material';
import IntlMessages from '@xebia/utility/IntlMessages';
import {Payment} from 'pages/modules/Common/payment';
import { PaymentSuccess } from 'pages/modules/Common/paymentSuccess';
import {MuiButton} from 'pages/reactMuiControls/MuiButton';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { dummyApi } from 'redux/actions';

export const LicensePayment = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [paymentDetails, setPaymentDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit', paymentDetails);
    // api call
    await dispatch(dummyApi(true, setIsOpen));
  };

  return (
    <Box>
      <Stack spacing={4}>
        <Box>
          <Payment setPaymentDetails={setPaymentDetails} />
        </Box>

        <Box sx={{width: '100%'}}>
          <MuiButton
            label={<IntlMessages id='common.cancel' />}
            variant='outlined'
            onClick={() => Navigate('/services')}
          />
          <MuiButton
            sx={{float: 'right', ml: 2}}
            label={<IntlMessages id='common.submit' />}
            variant='contained'
            type='submit'
            disabled={!paymentDetails}
            onClick={(e) => handleSubmit(e)}
          />
        </Box>
      </Stack>
      <PaymentSuccess isOpen={isOpen} setIsOpen={setIsOpen} 
        data={{message:'Congratulations!',desc:'You have successfully received the license.'}} 
      />
    </Box>
  );
};
