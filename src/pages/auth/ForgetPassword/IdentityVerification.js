import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Alert, Button, Link, TextField, Typography} from '@mui/material';
import Countdown, {zeroPad} from 'react-countdown';
import IntlMessages from '@xebia/utility/IntlMessages';
import {checkEmpty} from '@xebia/utility/Utils';
import {useDispatch, useSelector} from 'react-redux';
import {reset, onOTPVerifyAuth, onVerifyIdentityFP} from 'redux/actions';
import {OTP_TYPE} from 'shared/constants/AppConst';
import {timerRenderer} from 'shared/constants/Utils';

export const IdentityVerification = (props) => {
  const {handleNext, firstStep, setFormValue} = props;
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);

  const [isResend, setIsResend] = useState(false);
  const [verificationOtp, setVerificationOtp] = useState('');
  const [isError, setError] = useState(false);
  const [resendTime, setResendTime] = useState(Date.now() + 300000);

  const handleResendCode = async () => {
    setIsResend(true);
    await dispatch(onVerifyIdentityFP(firstStep.data));
  };

  useEffect(() => {
    // console.log(common, 'identityVerification');
    if (common.data?.success) {
      if (isResend) {
        setIsResend(false);
        setResendTime(Date.now() + 300000);
        setVerificationOtp('');
        setFormValue({firstStep: {...firstStep, message: common?.data?.result?.message}});
      } else if (!isResend) {
        handleNext({
          firstStep: {
            ...firstStep,
            message: common?.data?.result?.message,
            resetPasswordToken: common?.data?.result?.resetPasswordToken,
          },
        });
      }
    }
    return () => {
      dispatch(reset());
    };
  }, [common.data]);

  const handleVerificationOtp = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    setVerificationOtp(value);
  };

  const ValidateVerificationOTP = async (e) => {
    e.preventDefault();
    setFormValue({firstStep: {...firstStep, message: ''}});
    if (checkEmpty(verificationOtp)) {
      setError(true);
      return;
    }
    let requestPayload = {
      identityNumber: firstStep.data.identityNumber,
      otp: verificationOtp,
      otpType: OTP_TYPE.FORGOT_PASSWORD,
    };
    await dispatch(onOTPVerifyAuth(requestPayload));
  };

  return (
    <>
      <Box my={4}>
        {isError && (
          <Alert severity='error'>
            {<IntlMessages id='auth.required_fields_are_missing' />}
          </Alert>
        )}
      </Box>
      <Box sx={{mb: {xs: 3, xl: 4}}}>
        <TextField
          label={<IntlMessages id='auth.enter_the_verification_code' />} //'Enter the verification code'
          name='verificationCode'
          variant='outlined'
          fullWidth
          value={verificationOtp}
          onChange={handleVerificationOtp}
          error={isError && checkEmpty(verificationOtp)}
        />
      </Box>

      <Box style={{textAlign: 'center'}}>
        {isResend || !checkEmpty(common.error) ? (
          <Typography variant='body2' component={'p'}>
            {<IntlMessages id='auth.not_receive_the_verification_code' />}
            <Link sx={{cursor: 'pointer'}} onClick={handleResendCode}>
              {<IntlMessages id='auth.resend_verification_code' />}
            </Link>
          </Typography>
        ) : (
          <Typography variant='body2' component={'p'}>
            {<IntlMessages id='auth.resend_in' />}:
            <span color='primary'>
              <strong>
                <Countdown
                  onComplete={() => isResend(true)}
                  date={resendTime}
                  zeroPadTime={2}
                  renderer={timerRenderer}
                />
              </strong>
            </span>
          </Typography>
        )}
      </Box>
      <Button
        variant='contained'
        fullWidth
        disabled={!verificationOtp}
        onClick={ValidateVerificationOTP}
      >
        <IntlMessages id='common.next' />
      </Button>
    </>
  );
};

IdentityVerification.propTypes = {
  handleNext: PropTypes.func,
};

export default IdentityVerification;
