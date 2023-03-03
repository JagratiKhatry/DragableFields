import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {
  Alert,
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import {Stack} from '@mui/system';
import IntlMessages from '@xebia/utility/IntlMessages';
import {checkEmpty, numberInput} from '@xebia/utility/Utils';
import Countdown, {zeroPad} from 'react-countdown';
import {reset, onOTPVerifyAuth, onSendVericationOTPSignUp} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {OTP_TYPE} from 'shared/constants/AppConst';
import {timerRenderer} from 'shared/constants/Utils';

export const PhoneVerification = (props) => {
  const {handleNext, setFormValue,firstStep} = props;
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [validTime, setValidTime] = useState(true);
  const [isVerificationCodeClicked, setVerificationCodeClick] = useState(false);
  const [sendOPTMesaaage, setSendOPTMesaaage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isError, setError] = useState(false);
  const [resendTime, setResendTime] = useState(Date.now() + 300000);

  const handleResendCode = async () => {
    await handleOnSend();
    setIsCodeSent(false);
    setValidTime(true);
    setError(false);
    setVerificationCode('');
  };

  const handleOnSend = async () => {
    setVerificationCodeClick(false);
    let request = {
      identityNumber: firstStep?.data.identityNumber,
      mobileNumber: phoneNumber,
      otpType: OTP_TYPE.SIGN_UP,
    };

    await dispatch(onSendVericationOTPSignUp(request));
  };

  useEffect(() => {
    if (common.data?.success) {
      if (!isCodeSent) {
        setSendOPTMesaaage(common.data?.result?.message);
        setResendTime(Date.now() + 300000);
        setIsCodeSent(true);
        setFormValue({firstStep: {...firstStep, message: common?.data?.result?.message}});
      } else if (isCodeSent) {
        handleNext({
          firstStep: {...firstStep, message: common?.data?.result?.message},
        });
      }
    }
    return () => {
      dispatch(reset());
    };
  }, [common.data]);

  const handleOnSubmit = async () => {
    setFormValue({firstStep: {...firstStep, message: ''}});
    setVerificationCodeClick(true);
    setError(false);
    if (checkEmpty(verificationCode)) {
      setError(true);
      return;
    }
    let request = {
      identityNumber: firstStep?.data.identityNumber,
      otp: verificationCode,
      otpType: OTP_TYPE.SIGN_UP,
      isMobileVerification: true,
    };

    await dispatch(onOTPVerifyAuth(request));
  };

  return (
    <>
      <Box my={4}>
        {!isCodeSent && (
          <Alert severity='info'>
            {<IntlMessages id='auth.enter_mobile_number_for_verification' />}
          </Alert>
        )}
      </Box>
      <Box sx={{mb: {xs: 3, xl: 4}}}>
        <TextField
          label={<IntlMessages id='common.phone_number' />}
          name='contact'
          variant='outlined'
          fullWidth
          disabled={isCodeSent}
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(numberInput(e.target.value));
          }}
          InputProps={{
            maxLength: 9,
            startAdornment: (
              <InputAdornment position='start'>+996 |</InputAdornment>
            ),
          }}
          error={!!phoneNumber && phoneNumber.length !== 9}
        />
      </Box>

      {isCodeSent && sendOPTMesaaage && (
        <div>
          {!isError && !common.error && (
            <Alert severity='info'>{sendOPTMesaaage}</Alert>
          )}
          <Box sx={{mb: {xs: 3, xl: 4}}}>
            <TextField
              label={<IntlMessages id='auth.enter_otp_received_on_mobile_number' />}
              name='verificationCode'
              variant='outlined'
              fullWidth
              value={verificationCode}
              onChange={(e) => {
                setVerificationCode(numberInput(e.target.value));
              }}
              inputProps={{maxLength: 6}}
              error={!!isVerificationCodeClicked && checkEmpty(verificationCode)}
            />
          </Box>

          <Box>
            <Grid container>
              {!validTime || !checkEmpty(common.error) ? (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant='body2' component={'p'}>
                    {
                      <IntlMessages id='auth.not_receive_the_verification_code' />
                    }
                    <Link onClick={handleResendCode} sx={{cursor: 'pointer'}}>
                      {<IntlMessages id='auth.resend_verification_code' />}
                    </Link>
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant='body2' component={'p'}>
                    {<IntlMessages id='auth.resend_in' />}:
                    <span color='primary'>
                      <strong>
                        <Countdown
                          onComplete={() => setValidTime(false)}
                          date={resendTime}
                          zeroPadTime={2}
                          renderer={timerRenderer}
                        />
                      </strong>
                    </span>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </div>
      )}

      <Box sx={{mb: {xs: 3, xl: 4}}}>
        <Stack direction='row' spacing={2}>
          {!isCodeSent && (
            <Button
              variant='contained'
              fullWidth
              disabled={!phoneNumber || phoneNumber.length !== 9}
              onClick={handleOnSend}
            >
              <IntlMessages id='common.send' />
            </Button>
          )}
          {isCodeSent && (
            <Button
              variant='contained'
              fullWidth
              disabled={!verificationCode}
              onClick={handleOnSubmit}
            >
              <IntlMessages id='common.submit' />
            </Button>
          )}
        </Stack>
      </Box>
    </>
  );
};

PhoneVerification.propTypes = {
  handleNext: PropTypes.func,
};

export default PhoneVerification;
