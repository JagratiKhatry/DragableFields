import React from 'react';
import {Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import AppGridContainer from '@xebia/core/AppGridContainer';

import { ReactHookInput } from 'pages/reactHookForms/ReactHookInput';
import { useForm } from 'react-hook-form';
const ContactUsForm = () => {

  const {
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {},
    mode: 'onChange',
  });

  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AppGridContainer spacing={4}>
      <Grid item xs={12} md={12}>
          <ReactHookInput
            control={control}
            name='fullName'
            label={<IntlMessages id='common.fullName' />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ReactHookInput
            control={control}
            name='email'
            fullWidth
            label={<IntlMessages id='common.email' />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ReactHookInput
            control={control}
            name='phoneNumber'
            fullWidth
            label={<IntlMessages id='common.phoneNumber' />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ReactHookInput
            control={control}
            name='subject'
            fullWidth
            label={<IntlMessages id='common.subject' />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ReactHookInput
            control={control}
            fullWidth
            multiline
            name='message'
            rows='3'
            variant='outlined'
            label={<IntlMessages id='common.messageHere' />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            sx={{
              position: 'relative',
              minWidth: 100,
              float:'right'
            }}
            color='primary'
            variant='contained'
            type='submit'
          >
            <IntlMessages id='common.submit' />
          </Button>
        </Grid>
      </AppGridContainer>
    </form>
  );
};

export default ContactUsForm;
