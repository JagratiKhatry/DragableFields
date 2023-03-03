import React, {useEffect, useState} from 'react';
// import Card from '@mui/material/Card';
import {Alert, CircularProgress, useTheme} from '@mui/material';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import Box from '@mui/material/Box';
import {Fonts} from 'shared/constants/AppEnums';
import AppAnimate from '@xebia/core/AppAnimate';
import {ReactComponent as Logo} from '../../../assets/user/signup.svg';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import IdentityDetails from './Steps/IdentityDetails';
import IdentityVerification from './Steps/IdentityVerification';
import PersonalInformation from './Steps/PersonalInformation';
import PhoneVerification from './Steps/PhoneVerification';
import SignupStepSuccess from './Steps/SignupSuccess';
import {useDispatch, useSelector} from 'react-redux';
import {reset} from 'redux/actions';

const stepsLabels = [
  'common.nationality_and_identity',
  'common.absher_verification',
  'common.personal_information',
  'common.phone_verification',
];

const Signup = ({setIsOpen}) => {
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
          <PersonalInformation
            {...formValue}
            setFormValue={setFormValue}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <PhoneVerification
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
        <Grid
          container
          spacing={5}
          sx={{
            alignItems: {lg: 'center'},
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center',
              '& svg': {
                display: 'inline-block',
                paddingRight: {xs: 0, md: 25, lg: 2.5},
              },
            }}
          >
            <Logo fill={theme.palette.primary.main} />
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
                  mb: {xs: 6, xl: 8},
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
                <IntlMessages id='common.create_account' />
              </Box>

              <Box
                sx={{
                  mb: {xs: 6, xl: 8},
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
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
                <SignupStepSuccess />
              ) : (
                handleSteps(activeStep)
              )}
              {activeStep === 0 && (
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
              )}
            </Box>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Box>
    </AppAnimate>
  );
};

export default Signup;
