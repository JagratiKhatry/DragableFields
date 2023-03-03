import {
  Box,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Stack,
} from '@mui/material';
import AppCard from '@xebia/core/AppCard';
import { MuiButton } from 'pages/reactMuiControls/MuiButton';
import React, { useState } from 'react';
import { questionnaireRadioOptions, questionnaire } from 'shared/constants/Utils';
import CircleIcon from '@mui/icons-material/Circle';
import { Payment } from 'pages/modules/Common/payment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dummyApi } from 'redux/actions';
import AppGridContainer from '@xebia/core/AppGridContainer';
import IntlMessages from '@xebia/utility/IntlMessages';
import { PaymentSuccess } from 'pages/modules/Common/paymentSuccess';
import { MuiLabelValue } from 'pages/reactMuiControls/MuiLabelValue';

export const ServiceSummary = ({ ...formValue }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [paymentDetails, setPaymentDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveDetails = () => {
    console.log('saved', paymentDetails);
  };

  const handleSubmit = async () => {
    await dispatch(dummyApi(true, setIsOpen));
  };

  return (
    <Box>
      <Stack spacing={4}>
        <Box>
          <AppCard
            sxStyle={{ height: 1 }}
            title={<IntlMessages id='services.questionnaire' />}
          >
            <List>
              {questionnaire.map((question) => (
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
                  <FormControlLabel
                    value='Yes'
                    disabled
                    control={<Radio checked={true} />}
                    label='Yes'
                  />
                </ListItem>
              ))}
            </List>
          </AppCard>
        </Box>
        <Box>
          <AppGridContainer spacing={4}>
            <Grid item xs={12} md={6}>
              <AppCard
                sxStyle={{ height: 1 }}
                title={<IntlMessages id='services.additionalDetails' />}
              >
                <AppGridContainer spacing={4}>
                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='dropdown'
                      label={'services.university'}
                      value={formValue.university}
                      options={questionnaireRadioOptions}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='dropdown'
                      label={'common.qualification'}
                      value={formValue.qualification}
                      options={questionnaireRadioOptions}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='dropdown'
                      label={'services.major'}
                      value={formValue.major}
                      options={questionnaireRadioOptions}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='dropdown'
                      label={'services.category'}
                      value={formValue.category}
                      options={questionnaireRadioOptions}
                    />
                  </Grid>
                </AppGridContainer>
              </AppCard>
            </Grid>

            <Grid item xs={12} md={6}>
              <AppCard
                sxStyle={{ height: 1 }}
                title={<IntlMessages id='services.uploadDocuments' />}
              >
                <AppGridContainer spacing={4}>
                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='document'
                      label={'services.universityCertificates'}
                      value={formValue.universityCert[0].name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='document'
                      label={'services.transcripts'}
                      value={formValue.transcripts[0].name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='document'
                      label={'services.experienceLetter'}
                      value={formValue.expLetter[0].name}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MuiLabelValue
                      type='document'
                      label={'services.equivalencyCertificate'}
                      value={formValue.equivalencyCert[0].name}
                    />
                  </Grid>
                </AppGridContainer>
              </AppCard>
            </Grid>
          </AppGridContainer>
        </Box>
        <Box>
          <Payment setPaymentDetails={setPaymentDetails} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <MuiButton
            label={<IntlMessages id='common.cancel' />}
            variant='outlined'
            onClick={() => Navigate('/services')}
          />
          <MuiButton
            sx={{ float: 'right', ml: 2 }}
            label={<IntlMessages id='common.submit' />}
            variant='contained'
            type='submit'
            disabled={!paymentDetails}
            onClick={() => handleSubmit()}
          />
          <MuiButton
            sx={{ float: 'right', ml: 2 }}
            label={<IntlMessages id='common.saveAsDraft' />}
            variant='outlined'
            disabled={!paymentDetails}
            onClick={() => handleSaveDetails()}
          />
        </Box>
      </Stack>
      <PaymentSuccess
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        paymentDetails={paymentDetails}
        data={{
          message: <IntlMessages id='services.requestSuccessfullySubmitted' />,
          desc: <IntlMessages id='services.reqHasBeenSuccessfullySubmitted' />  //  'Your reuqest REQ-02-12-13034 has been submitted successfully.',
        }}
      />
    </Box>
  );
};
