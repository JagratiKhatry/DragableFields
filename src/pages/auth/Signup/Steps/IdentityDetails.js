import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Button, Grid, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import IntlMessages from '@xebia/utility/IntlMessages';
import {ReactHookRadio} from 'pages/reactHookForms/ReactHookRadio';
import {ReactHookInput} from 'pages/reactHookForms/ReactHookInput';
import {useDispatch, useSelector} from 'react-redux';
import {reset, onVerifyApplicantSignUp} from 'redux/actions';
import {ReactHookDropdown} from 'pages/reactHookForms/ReactHookDropdown';
import {dates, months, nationalities, years} from 'shared/constants/Utils';
import {Rules} from 'shared/constants/Validations';

export const IdentityDetails = (props) => {
  const {handleNext} = props;
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);

  const methods = useForm({
    defaultValues: {
      nationality: '10',
      nationalId: '',
      date: '',
      month: '',
      year: '',
    },
    mode: 'onChange',
  });
  const {
    handleSubmit,
    control,
    watch,
    formState: {isValid},
  } = methods;

  useEffect(() => {
    common?.data?.success &&
      handleNext({
        firstStep: {
          data: {
            identityNumber: watch('nationalId'),
            date: watch('date'),
            month: watch('month'),
            year: watch('year'),
            nationalityId: parseInt(watch('nationality')),
          },
          message: common?.data?.result?.message,
        },
      });
    return () => {
      dispatch(reset());
    };
  }, [common.data]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    let requestPayload = {
      identityNumber: data.nationalId,
      nationalityId: parseInt(data.nationality),
      date: data.date,
      month: data.month,
      year: data.year,
    };
    await dispatch(onVerifyApplicantSignUp(requestPayload));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{mb: {xs: 3, xl: 4}}}>
          <ReactHookRadio
            control={control}
            name='nationality'
            label={<IntlMessages id='common.nationality' />}
            options={nationalities}
            rules={Rules().identityRules.nationality}
          />
        </Box>
        <Box sx={{mb: {xs: 3, xl: 4}}}>
          <ReactHookInput
            control={control}
            name={'nationalId'}
            label={
              <IntlMessages
                id={
                  watch('nationality') === '1'
                    ? 'common.iqama_id'
                    : 'common.national_id'
                }
              />
            }
            rules={Rules().identityRules.nationalId}
            type={'number'}
          />
        </Box>
        <Grid
          container
          sx={{display: 'flex', flexDirection: 'row', mb: {xs: 3, xl: 4}}}
        >
          <Grid item xs={12} sx={{textAlign: 'left',mb:2}}>
            <Typography>
              <IntlMessages id='common.dob' />
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} sx={{pr: 2}}>
            <ReactHookDropdown
              control={control}
              name='date'
              label={<IntlMessages id='common.date' />}
              options={dates}
              rules={Rules().identityRules.date}
            />
          </Grid>
          <Grid item xs={4} md={4} sx={{pr: 2}}>
            <ReactHookDropdown
              control={control}
              name='month'
              label={<IntlMessages id='common.month' />}
              options={months}
              rules={Rules().identityRules.month}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <ReactHookDropdown
              control={control}
              name='year'
              label={<IntlMessages id='common.year' />}
              options={years}
              rules={Rules().identityRules.year}
            />
          </Grid>
        </Grid>
        <Button variant='contained' fullWidth type='submit' disabled={!isValid}>
          <IntlMessages id='common.next' />
        </Button>
      </form>
    </>
  );
};

IdentityDetails.propTypes = {
  handleNext: PropTypes.func,
};

export default IdentityDetails;
