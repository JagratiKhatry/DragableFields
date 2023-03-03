import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
  Alert,
  Checkbox,
  CircularProgress,
  Stack,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import Box from '@mui/material/Box';
import {Fonts} from 'shared/constants/AppEnums';
import AppAnimate from '@xebia/core/AppAnimate';
import {ReactComponent as Logo} from '../../../assets/user/login.svg';
import Captcha from '@xebia/core/Captcha/captcha';
import {useForm} from 'react-hook-form';
import {ReactHookInput} from 'pages/reactHookForms/ReactHookInput';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import AppMessageView from '@xebia/core/AppMessageView';
import {useDispatch, useSelector} from 'react-redux';
import {onSingIn, reset} from 'redux/actions';
import SignInValidateOtp from './signInValidateOtp';
import {checkEmpty} from '@xebia/utility/Utils';
import {Rules} from 'shared/constants/Validations';
import {encryptPassword} from 'shared/constants/Utils';
import {USER_TYPE_LOOKUP_ID} from 'shared/constants/AppConst';
import {useIntl} from 'react-intl';

const Signin = ({setIsOpen}) => {
  const intl = useIntl();

  const theme = useTheme();
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);
  const [showPassword, setshowPassword] = useState(false);
  const [captchaFromUser, setCaptchaFromUser] = useState();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    dispatch(reset());
  }, []);

  const {
    handleSubmit,
    control,
    formState: {isValid},
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      identityNumber: '',
      password: '',
      checkbox: false,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(reset());
  }, []);

  useEffect(() => {
    setErrMessage(null);
    if (common?.data?.success) {
      setIsOtpSend(true);
      setLoginData({...loginData, message: common?.data?.result?.message});
      dispatch(reset());
    } else if (common?.error) {
      setErrMessage(common?.error);
      setRefresh(!refresh);
    }
  }, [common.data, common.error]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setSubmitClicked(true);
    let requestPayload = {
      identityNumber: data.identityNumber,
      password: encryptPassword(data.password),
      userTypeLookupId: USER_TYPE_LOOKUP_ID.SIGN_IN,
    };
    setLoginData({firstStep: requestPayload});
    if (process.env.REACT_APP_CAPTCHA_ENABLE !== 'true') {
      if (checkEmpty(captchaFromUser)) {
        setErrMessage((prevVal) => <IntlMessages id='common.captchaMissing' />);
        setRefresh(!refresh);
        return;
      } else if (!isCaptchaValid) {
        setErrMessage((prevVal) => <IntlMessages id='common.captchaInvalid' />);
        setRefresh(!refresh);
        setIsCaptchaValid(false);
        setCaptchaFromUser(true);
        return;
      } else {
        await dispatch(onSingIn(requestPayload));
      }
    } else {
      await dispatch(onSingIn(requestPayload));
    }
  };

  const onCaptchaRefresh = () => {
    setCaptchaFromUser('');
    setIsCaptchaValid(false);
    setSubmitClicked(false);
  };

  const onCaptchaChange = (v, s, success) => {
    setCaptchaFromUser(v);
    setIsCaptchaValid(success);
    setSubmitClicked(false);
  };

  const handleSSOLogin = () => {
    console.log('sign-in with SSO', getValues());
    // call SSO api
  };
  return (
    <>
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
                  <IntlMessages id='common.login' />
                </Box>
                <Box>
                  <Box my={4}>
                    {common.loading && <CircularProgress />}
                    {errMessage && (
                      <Alert
                        severity='error'
                        onClose={() => setErrMessage(null)}
                      >
                        {errMessage}
                      </Alert>
                    )}
                    {/* {succMessage && (
                      <Alert severity='success' onClose={()=>setSuccMessage(null)}>
                        {succMessage}
                      </Alert>
                    )} */}
                  </Box>
                  {isOtpSend ? (
                    <SignInValidateOtp loginData={loginData} />
                  ) : (
                    <>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{mb: {xs: 5, xl: 8}}}>
                          <ReactHookInput
                            name='identityNumber'
                            control={control}
                            label={<IntlMessages id='common.national_id' />}
                            rules={Rules(watch).identityRules.nationalId}
                            type={'number'}
                          />
                        </Box>

                        <Box sx={{mb: {xs: 5, xl: 8}}}>
                          <ReactHookInput
                            name='password'
                            control={control}
                            label={<IntlMessages id='common.password' />}
                            rules={Rules().password}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              showPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <Visibility />
                              )
                            }
                            hanldeIconClick={() =>
                              setshowPassword((prevVal) => !prevVal)
                            }
                          />
                        </Box>
                        <Box
                          display='flex'
                          sx={{marginRight: '13px'}}
                          justifyContent='center'
                          alignItems='center'
                        >
                          <Captcha
                            onChange={(v, s, success) =>
                              onCaptchaChange(v, s, success)
                            }
                            onRefresh={() => onCaptchaRefresh()}
                            placeholder={intl.formatMessage({
                              id: 'common.enterCaptcha',
                            })}
                            refresh={refresh}
                            isSubmitClicked={isSubmitClicked}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              ml: -3,
                            }}
                          >
                            <Checkbox />
                          </Box>
                          <Box
                            component='span'
                            sx={{
                              fontSize: 14,
                            }}
                          >
                            <IntlMessages id='common.rememberMe' />
                          </Box>
                          <Box
                            component='span'
                            sx={{
                              cursor: 'pointer',
                              ml: {xs: 0, sm: 'auto'},
                              mt: {xs: 2, sm: 0},
                              color: 'primary.main',
                              fontWeight: Fonts.BOLD,
                              fontSize: 14,
                            }}
                            onClick={() => {
                              setIsOpen('forgot-password');
                            }}
                          >
                            <IntlMessages id='common.forgetPassword' />
                          </Box>
                        </Box>
                        <Stack spacing={4}>
                          <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            type='submit'
                            disabled={!isValid}
                          >
                            <IntlMessages id='common.login' />
                          </Button>

                          <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            onClick={handleSSOLogin}
                            disabled={!isValid}
                          >
                            <IntlMessages id='common.ssoLogin' />
                          </Button>
                        </Stack>
                      </form>

                      <Box
                        sx={{
                          color: 'grey.700',
                          fontSize: 14,
                          fontWeight: Fonts.BOLD,
                        }}
                        my={3}
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
              </Box>
            </Grid>
          </Grid>
          {/* </Card> */}
        </Box>
      </AppAnimate>
    </>
  );
};

export default Signin;
