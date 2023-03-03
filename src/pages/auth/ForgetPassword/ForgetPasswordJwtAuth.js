import React, {useEffect, useState} from 'react';
// import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import Box from '@mui/material/Box';
import {Alert, CircularProgress, Typography, useTheme} from '@mui/material';
import {Fonts} from 'shared/constants/AppEnums';
import AppAnimate from '@xebia/core/AppAnimate';
import {ReactComponent as Logo} from '../../../assets/user/forgot-password.svg';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import IdentityDetails from './IdentityDetails';
import IdentityVerification from './IdentityVerification';
import ResetPassword from './ResetPassword';
import ForgotPasswordSuccess from './ForgetPasswordSuccess';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {reset} from 'redux/actions';

const stepsLabels = [
  'common.nationality_and_identity',
  'common.otp_verification',
  'common.resetPassword',
];

const ForgetPassword = ({setIsOpen}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);

  const [activeStep, setActiveStep] = useState(0);
  const [formValue, setFormValue] = useState({});
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    dispatch(reset());
  }, []);

  useEffect(() => {
    setErrMessage(null);
    if (common?.error) {
      setErrMessage(common?.error);
    }
  }, [common.error]);

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <IdentityDetails {...formValue} handleNext={handleNext} />;
      case 1:
        return (
          <IdentityVerification
            {...formValue}
            setFormValue={setFormValue}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <ResetPassword
            {...formValue}
            setFormValue={setFormValue}
            handleNext={handleNext}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = (newValues) => {
    setFormValue({...formValue, ...newValues});
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box
        sx={{
          pb: 6,
          py: {xl: 8},
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Card
          sx={{
            maxWidth: 924,
            width: '100%',
            textAlign: 'center',
            paddingLeft: {xs: 8, md: 2},
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        > */}
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                '& svg': {
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  paddingRight: {xs: 0, md: 2.5},
                },
              }}
            >
              <Logo fill={theme.palette.primary.main} />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                p: {xs: 8, lg: 12},
                px: {xl: 16},
                py: {xl: 12},
              }}
            >
              <Box
                sx={{
                  mb: {xs: 3, xl: 4},
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
                <IntlMessages id='common.forgetPassword' />
              </Box>
              <Box sx={{mb: 5, fontSize: 14}}>
                <Typography component='p'>
                  <IntlMessages id='common.forgetPasswordTextOne' />
                </Typography>
                <Typography component='p'>
                  {/* <IntlMessages id='common.forgetPasswordTextTwo' /> */}
                </Typography>
              </Box>
              <Box>
                <Stepper
                  activeStep={activeStep}
                  sx={{py: 3}}
                  alternativeLabel
                  color='success'
                >
                  {stepsLabels.map((label) => (
                    <Step key={label} color='success'>
                      <StepLabel>
                        <IntlMessages id={label} />
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              <Box my={4}>
                {common.loading && <CircularProgress />}
                {errMessage && (
                  <Alert severity='error' onClose={() => setErrMessage(null)}>
                    {errMessage}
                  </Alert>
                )}
                {!errMessage && formValue?.firstStep?.message && (
                  <Alert
                    severity='success'
                    onClose={() =>
                      setFormValue({
                        ...formValue,
                        firstStep: {...formValue.firstStep, message: ''},
                      })
                    }
                  >
                    {formValue?.firstStep.message}
                  </Alert>
                )}
              </Box>
              {activeStep === stepsLabels.length ? (
                <ForgotPasswordSuccess />
              ) : (
                handleSteps(activeStep)
              )}
              {activeStep === 0 && (
                <>
                  <Box
                    sx={{
                      textAlign: 'center',
                      color: 'grey.700',
                      fontSize: 14,
                      fontWeight: Fonts.BOLD,
                      mt: {xs: 3, xl: 4},
                    }}
                  >
                    <Box component='span' sx={{mr: 1}}>
                      <IntlMessages id='common.alreadyHaveAccount' />
                    </Box>
                    <Box
                      component='span'
                      sx={{
                        color: 'primary.main',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setIsOpen('sign-in');
                      }}
                    >
                      <IntlMessages id='common.signIn' />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      textAlign: 'center',
                      color: 'grey.700',
                      fontSize: 14,
                      fontWeight: Fonts.BOLD,
                    }}
                  >
                    <Box
                      component='span'
                      sx={{
                        mr: 2,
                      }}
                    >
                      <IntlMessages id='common.dontHaveAccount' />
                    </Box>
                    <Box
                      component='span'
                      sx={{
                        color: 'primary.main',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setIsOpen('sign-up');
                      }}
                    >
                      <IntlMessages id='common.signup' />
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Box>
    </AppAnimate>
  );
};

export default ForgetPassword;
