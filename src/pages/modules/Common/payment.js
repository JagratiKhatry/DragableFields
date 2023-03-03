import {Box, Grid, Typography} from '@mui/material';
import AppCard from '@xebia/core/AppCard';
import AppGridContainer from '@xebia/core/AppGridContainer';
import IntlMessages from '@xebia/utility/IntlMessages';
import {ReactHookDate} from 'pages/reactHookForms/ReactHookDate';
import {ReactHookInput} from 'pages/reactHookForms/ReactHookInput';
import {MuiButton} from 'pages/reactMuiControls/MuiButton';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useIntl } from 'react-intl';
import {useDispatch} from 'react-redux';
import {dummyApi} from 'redux/actions';
import {Fonts} from 'shared/constants/AppEnums';
import {Rules} from 'shared/constants/Validations';
import {PaymentSuccess} from './paymentSuccess';

export const Payment = ({setPaymentDetails}) => {
  const intl = useIntl()
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({defaultValues: {}, mode: 'onChange'});

  const onSubmit = async (data) => {
    await dispatch(dummyApi(data, setPaymentDetails));
  };

  return (
    <>
      <AppCard sxStyle={{height: 1}}>
        <AppGridContainer spacing={2} pt={4} pb={8}>
          <Grid item xs={12} md={6} px={4}>
            <img src='/assets/images/card.svg' alt='payment card' />
          </Grid>
          <Grid item xs={12} md={6} px={4}>
            <Typography sx={{mb: 2, fontSize: 16, fontWeight: Fonts.BOLD}}>
              {<IntlMessages id='services.payment' />}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <AppGridContainer spacing={4}>
                <Grid item xs={12}>
                  <ReactHookInput
                    control={control}
                    name='name'
                    label={<IntlMessages id='common.fullName' />}
                    rules={Rules().required}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReactHookInput
                    control={control}
                    name='cardNumber'
                    label={<IntlMessages id='services.cardNumber' />}
                    rules={Rules().cardNumber}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <ReactHookDate
                    control={control}
                    name='expDate'
                    label={<IntlMessages id='services.expiryDate' />}
                    rules={Rules().cardExpDate}
                    minDate={new Date()}
                    maxDate={new Date().setFullYear(
                      new Date().getFullYear() + 4,
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <ReactHookInput
                    control={control}
                    name='cvv'
                    label={<IntlMessages id='services.cvv' />}
                    rules={Rules().required}
                  />
                </Grid>
              </AppGridContainer>
              <Box sx={{py: 4}}>
                <MuiButton
                  sx={{width: '100%'}}
                  label={`${intl.formatMessage({id:'common.pay'})} $500`}
                  variant='contained'
                  type='submit'
                  disabled={!isValid}
                />
              </Box>
            </form>
          </Grid>
        </AppGridContainer>
      </AppCard>
    </>
  );
};
