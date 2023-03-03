import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import AppCard from '@xebia/core/AppCard';
import { ReactHookRadio } from 'pages/reactHookForms/ReactHookRadio';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Fonts } from 'shared/constants/AppEnums';
import {
  questionnaire,
  questionnaireRadioOptions,
} from 'shared/constants/Utils';
import { Rules } from 'shared/constants/Validations';
import CircleIcon from '@mui/icons-material/Circle';
import { MuiButton } from 'pages/reactMuiControls/MuiButton';
import { ReactHookDropdown } from 'pages/reactHookForms/ReactHookDropdown';
import { ReactHookFileUpload } from 'pages/reactHookForms/ReactHookFileUpload';
import { useNavigate } from 'react-router-dom';
import { dummyApi } from 'redux/actions';
import { useDispatch } from 'react-redux';
import AppGridContainer from '@xebia/core/AppGridContainer';
import IntlMessages from '@xebia/utility/IntlMessages';

export const ServiceForm = ({ handleNext }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [otherFieldDisabled, setOtherFieldDisabled] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
  } = useForm({ defaultValues: {}, mode: 'onChange' });

  const onQuestionnaireChange = (e) => {
    setOtherFieldDisabled(false)
    questionnaire.forEach((question, idx) => {
      if (getValues()[`question${(idx)}`] !== '1') {
        setOtherFieldDisabled(true)
      }
    })
  }

  const handleSaveDetails = () => {
    console.log('saved', getValues());
  };

  const onSubmit = async (data) => {
    await dispatch(dummyApi(data, handleNext));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Box>
            <AppCard sxStyle={{ height: 1 }} title={<IntlMessages id='services.questionnaire' />}>
              <List>
                {questionnaire.map((question, idx) => (
                  <ListItem key={question.id}>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{
                          width: '20px',
                          color: (theme) => theme.palette.primary.dark,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={question.desc} />
                    <ReactHookRadio
                      control={control}
                      name={'question' + idx}
                      options={questionnaireRadioOptions}
                      rules={Rules().required}
                      rows={true}
                      onChangeHandler={onQuestionnaireChange}
                    />
                  </ListItem>
                ))}
              </List>
            </AppCard>
          </Box>
          <Box>
            <AppCard sxStyle={{ height: 1 }} title={<IntlMessages id='services.additionalDetails' />}>
              <AppGridContainer spacing={4}>
                <Grid item xs={12} md={4}>
                  <ReactHookDropdown
                    control={control}
                    name='university'
                    label={<IntlMessages id='services.selectUniversity' />}
                    options={questionnaireRadioOptions}
                    rules={Rules().required}
                    disabled={otherFieldDisabled}
                  // variant={agreeQuestionsnaire() && 'filled'}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <ReactHookDropdown
                    control={control}
                    name='qualification'
                    label={<IntlMessages id='services.selectQualification' />}
                    options={questionnaireRadioOptions}
                    rules={Rules().required}
                    disabled={otherFieldDisabled}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <ReactHookDropdown
                    control={control}
                    name='major'
                    label={<IntlMessages id='services.selectMajor' />}
                    options={questionnaireRadioOptions}
                    rules={Rules().required}
                    disabled={otherFieldDisabled}
                  />
                </Grid>

                <Grid item xs={12} md={8} my={4}>
                  <Typography sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>
                    <IntlMessages id='services.pleaseSelectTheCatgoriesOfSocialWorkThatYouWantToWorkIn' />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <ReactHookDropdown
                    control={control}
                    name='category'
                    label={<IntlMessages id='services.selectCategory' />}
                    options={questionnaireRadioOptions}
                    rules={Rules().required}
                    disabled={otherFieldDisabled}
                  />
                </Grid>
              </AppGridContainer>
            </AppCard>
          </Box>
          <Box>
            <AppCard sxStyle={{ height: 1 }} title={<IntlMessages id='services.uploadDocuments' />}>
              <AppGridContainer spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <ReactHookFileUpload
                    name='universityCert'
                    label={
                      <IntlMessages id='services.universityCertificates' />
                    }
                    control={control}
                    multiple={true}
                    setValue={setValue}
                    accept='application/pdf'
                    rules={Rules().required}
                    error={errors?.documents}
                    disabled={otherFieldDisabled}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReactHookFileUpload
                    name='transcripts'
                    label={<IntlMessages id='services.transcripts' />}
                    control={control}
                    multiple={true}
                    setValue={setValue}
                    accept='application/pdf'
                    rules={Rules().required}
                    error={errors?.documents}
                    disabled={otherFieldDisabled}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReactHookFileUpload
                    name='expLetter'
                    label={<IntlMessages id='services.experienceLetter' />}
                    control={control}
                    multiple={true}
                    setValue={setValue}
                    accept='application/pdf'
                    rules={Rules().required}
                    error={errors?.documents}
                    disabled={otherFieldDisabled}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReactHookFileUpload
                    name='equivalencyCert'
                    label={
                      <IntlMessages id='services.equivalencyCertificate' />
                    }
                    control={control}
                    multiple={true}
                    setValue={setValue}
                    accept='application/pdf'
                    rules={Rules().required}
                    error={errors?.documents}
                    disabled={otherFieldDisabled}
                  />
                </Grid>
              </AppGridContainer>
            </AppCard>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MuiButton
              label={<IntlMessages id='common.cancel' />}
              variant='outlined'
              onClick={() => Navigate('/services')}
            />
            <MuiButton
              sx={{ float: 'right', ml: 4 }}
              label={<IntlMessages id='common.next' />}
              variant='contained'
              type='submit'
              disabled={!isValid || otherFieldDisabled}
            />
            <MuiButton
              sx={{ float: 'right', ml: 4 }}
              label={<IntlMessages id='common.saveAsDraft' />}
              variant='outlined'
              disabled={!isValid || otherFieldDisabled}
              onClick={() => handleSaveDetails()}
            />
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
