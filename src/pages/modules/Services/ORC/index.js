import { Box, CircularProgress, Dialog, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ServiceForm } from './ServiceForm';
import { ServiceSummary } from './Summary';
// import AppInfoView from '@xebia/core/AppInfoView';
import { Fonts } from 'shared/constants/AppEnums';
import IntlMessages from '@xebia/utility/IntlMessages';

const stepsLabels = [
  'services.ORCService',
  'services.summary',
  'services.kindlyCompleteThePaymentToReceiveTheLicense',
];

const ORC = () => {
  const common = useSelector(({ common }) => common);

  const [activeStep, setActiveStep] = useState(0);
  const [formValue, setFormValue] = useState({});

  const activateStep = (step = 0) => {
    switch (step) {
      case 0:
        return <ServiceForm handleNext={handleNext} />;
      case 1:
        return <ServiceSummary {...formValue} />;
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = (newValues) => {
    setFormValue({ ...formValue, ...newValues });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box>
      <Typography
        sx={{
          mb: 5,
          fontSize: 24,
          fontWeight: Fonts.BOLD,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {<IntlMessages id={stepsLabels[activeStep]} />}
      </Typography>
      {activateStep(activeStep)}

      <Dialog
        open={!!common.loading}
        PaperProps={{
          style: {
            width: '10%',
            height: '10%',
            boxShadow: 'none',
            background: 'transparent',
            justifyContent: 'center',
          },
        }}
        aria-describedby='loading-dialog'
        aria-labelledby='loading'
      >
        <Box sx={{ textAlign: 'center' }}>
          {/* <AppInfoView /> */}
          <CircularProgress />
        </Box>
      </Dialog>
    </Box>
  );
};

export default ORC;
