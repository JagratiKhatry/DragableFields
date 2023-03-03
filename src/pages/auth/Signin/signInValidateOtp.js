import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Alert, Button, Link, TextField, Typography} from '@mui/material';
import Countdown, {zeroPad} from 'react-countdown';
import IntlMessages from '@xebia/utility/IntlMessages';
import {checkEmpty} from '@xebia/utility/Utils';
import {useDispatch, useSelector} from 'react-redux';
import {reset, onSingIn} from 'redux/actions';
import {useNavigate} from 'react-router-dom';
import {useAuthMethod} from '@xebia/utility/AuthHooks';
import {OTP_TYPE} from 'shared/constants/AppConst';
import {timerRenderer} from 'shared/constants/Utils';

export const SignInValidateOtp = (props) => {
  const {loginData} = props;
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);
  const {signInUser} = useAuthMethod();
  const navigate = useNavigate();

  const [succMessage, setSuccMessage] = useState(loginData?.message);
  const [isResend, setIsResend] = useState(false);
  const [verificationOtp, setVerificationOtp] = useState('');
  const [isFieldDirty, setIsFieldDirty] = useState(false);
  const [resendTime, setResendTime] = useState(Date.now() + 300000);
  useEffect(() => {
    dispatch(reset());
  }, []);
  useEffect(() => {
    if (common.data?.success) {
      if (isResend) {
        setIsResend(false);
        setResendTime(Date.now() + 300000);
        setVerificationOtp('');
        setSuccMessage(common?.data?.result?.message)
      } else if (!isResend) {
        navigate('/dashboard');
      }
    }
    return () => {
      dispatch(reset());
    };
  }, [common.data]);

  const handleVerificationOtp = async (e) => {
    e.preventDefault();
    setIsFieldDirty(true);
    let value = e.target.value;
    setVerificationOtp(value);
  };

  const handleResendCode = async () => {
    setIsResend(true);
    setIsFieldDirty(false);
    await dispatch(onSingIn(loginData?.firstStep));
  };

  const ValidateVerificationOTP = async (e) => {
    e.preventDefault();
    setSuccMessage(null)
    let requestPayload = {
      identityNumber: loginData.firstStep.identityNumber,
      otp: verificationOtp,
      otpType: OTP_TYPE.SIGN_IN,
    };
    await signInUser(requestPayload);
  };

  return (
    <>
      <Box my={4}>
        {!common.error && !isResend && succMessage && (
          <Alert severity='success' onClose={()=>setSuccMessage(null)}>
            {succMessage}
          </Alert>
        )}
      </Box>
      <Box sx={{mb: {xs: 3, xl: 4}, mt: 2}}>
        <TextField
          label={<IntlMessages id='auth.enter_the_verification_code' />} //'Enter the verification code'
          name='verificationCode'
          variant='outlined'
          fullWidth
          value={verificationOtp}
          onChange={handleVerificationOtp}
          error={isFieldDirty && checkEmpty(verificationOtp)}
          helperText={
            isFieldDirty &&
            checkEmpty(verificationOtp) && (
              <IntlMessages id='common.isRequired' />
            )
          }
        />
      </Box>

      <Box style={{textAlign: 'center'}} my={2}>
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
                  onComplete={() => setIsResend(true)}
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

SignInValidateOtp.propTypes = {
  handleNext: PropTypes.func,
};

export default SignInValidateOtp;
