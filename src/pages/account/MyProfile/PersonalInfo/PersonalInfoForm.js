import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import { Fonts } from 'shared/constants/AppEnums';
import { ReactHookInput } from 'pages/reactHookForms/ReactHookInput';
import { ReactHookDropdown } from 'pages/reactHookForms/ReactHookDropdown';
import { makeStyles } from '@mui/styles';
import { Rules } from 'shared/constants/Validations';

const useStyles = makeStyles((theme) => ({
  disabledInput: {
    '& .css-lixg6a-MuiInputBase-root-MuiFilledInput-root.Mui-disabled': {
      backgroundColor: '#F5F5F5',
    },
  },
}));
const PersonalInfoForm = (props) => {
  const { control,isEdit } = props
 
  const classes = useStyles();
  const options = []
  return (
    <>
      <Typography
        component='h3'
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 4 },
        }}
      >
        <IntlMessages id='common.personalInfo' />
      </Typography>
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={3}    >
          <ReactHookInput
            control={control}
            name='firstName'
            label={<IntlMessages id='common.firstName' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='fatherName'
            label={<IntlMessages id='common.fatherName' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='grandfatherName'
            label={<IntlMessages id='common.grandFatherName' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='familyName'
            label={<IntlMessages id='common.familyName' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='identityNumber'
            label={<IntlMessages id='common.nationalId' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='nationality'
            label={<IntlMessages id='common.nationality' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='hijriBirthDate'
            label={<IntlMessages id='common.dobInHijri' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='gregorianBirthDate'
            label={<IntlMessages id='common.dobInGregorian' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='gender'
            label={<IntlMessages id='common.gender' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='age'
            label={<IntlMessages id='common.age' />}
            disabled
            variant='filled'
            className={classes.disabledInput}

          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='maritalStatus'
            label={<IntlMessages id='common.maritalStatus' />}
            disabled
            variant='filled'
            className={classes.disabledInput}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='firstNameEN'
            label={<IntlMessages id='common.firstNameInEnglish' />}
            rules={Rules().firstName}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='fatherNameEN'
            label={<IntlMessages id='common.fatherNameInEnglish' />}
            rules={Rules().firstName}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='grandfatherNameEN'
            label={<IntlMessages id='common.grandFatherNameInEnglish' />}
            rules={Rules().firstName}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='familyNameEN'
            label={<IntlMessages id='common.familyNameInEnglish' />}
            rules={Rules().firstName}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='emailId'
            label={<IntlMessages id='common.email' />}
            rules={Rules().email}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookInput
            control={control}
            name='mobileNumber'
            label={<IntlMessages id='common.phoneNumber' />}
            rules={Rules().phoneNumber}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookDropdown
            control={control}
            name='region'
            label={<IntlMessages id='common.region' />}
            options={options}   
            disabled={isEdit}    
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ReactHookDropdown
            control={control}
            name='city'
            label={<IntlMessages id='common.city' />}
            options={options}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReactHookInput
            control={control}
            multiline
            name="address"
            rows={3}
            fullWidth
            label={<IntlMessages id="common.address" />}
            rules={Rules().firstName}
            disabled={isEdit}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
          </Box>
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default PersonalInfoForm;
