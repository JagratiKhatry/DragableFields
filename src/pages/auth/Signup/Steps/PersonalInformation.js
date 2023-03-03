import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {
  Alert,
  Button,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from '@mui/material';
import {useForm} from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IntlMessages from '@xebia/utility/IntlMessages';
import {ReactHookInput} from 'pages/reactHookForms/ReactHookInput';
import {useDispatch, useSelector} from 'react-redux';
import {reset, onApplicantRegistration} from 'redux/actions';
import {Rules} from 'shared/constants/Validations';
import {encryptPassword} from 'shared/constants/Utils';
const minLengthRegExpWeak = /^.{4,7}$/;
const minLengthRegExpMedium = /^.{8,10}$/;
const minLengthRegExpStrong = /^.{11,13}$/;
const minLengthRegExpVeryStrong = /^.{14,}$/;
const atleastOneNumber = /(?=.*?[0-9])/;
const atleastOneLowerLetter = /(?=.*?[a-z])/;
const atleastOneUpperLetter = /(?=.*?[A-Z])/;
const atleastOneSpecialCharacter = /(?=.*?[#?!@$%^&*-])/;

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
  height: 6,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  // [`& .${linearProgressClasses.bar}`]: {
  //   borderRadius: 5,
  //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  // },
}));

export const PersonalInformation = (props) => {
  const {handleNext, setFormValue,firstStep} = props;
  const dispatch = useDispatch();
  const common = useSelector(({common}) => common);

  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false,
    passwordStrength: 0,
    strengthText: '',
    strengthColor: '',
  });

  const methods = useForm({
    defaultValues: {email: '', password: '', confirmPassword: ''},
    mode: 'onChange',
  });
  const {
    handleSubmit,
    control,
    watch,
    formState: {errors, isValid},
  } = methods;

  useEffect(() => {
    common.data?.success &&
      handleNext({
        firstStep: {
          ...firstStep,
          message: common.data?.result?.message,
        },
      });
    return () => {
      dispatch(reset());
    };
  }, [common.data]);

  const handlePaswordToggle = (prop) => (event) => {
    setValues({...values, [prop]: !values[prop]});
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    if (
      !atleastOneLowerLetter.test(password) ||
      !atleastOneUpperLetter.test(password) ||
      !atleastOneNumber.test(password) ||
      !atleastOneSpecialCharacter.test(password)
    ) {
      setValue(10, 'common.bad', 'error');
    } else {
      if (minLengthRegExpWeak.test(password)) {
        setValue(30, 'common.weak', 'error');
      } else if (minLengthRegExpMedium.test(password)) {
        setValue(60, 'common.medium', 'warning');
      } else if (minLengthRegExpStrong.test(password)) {
        setValue(80, 'common.strong', 'success');
      } else if (minLengthRegExpVeryStrong.test(password)) {
        setValue(100, 'common.veryStrong', 'success');
      }
    }
  };

  const setValue = (passwordStrength, strengthText, strengthColor) => {
    setValues({
      ...values,
      passwordStrength,
      strengthText: <IntlMessages id={strengthText} />,
      strengthColor,
    });
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setFormValue({firstStep: {...firstStep, message: ''}});
    if (Object.keys(errors).length === 0) {
      let requestPayload = {
        identityNumber: firstStep?.data.identityNumber,
        email: data.email,
        password: encryptPassword(data.password),
      };

      await dispatch(onApplicantRegistration(requestPayload));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{mb: {xs: 3, xl: 4}}}>
          <ReactHookInput
            control={control}
            name='email'
            label={<IntlMessages id='common.email' />}
            rules={Rules(watch).email}
          />
        </Box>

        <Box sx={{mb: {xs: 3, xl: 4}}}>
          <ReactHookInput
            control={control}
            name='password'
            label={<IntlMessages id='common.password' />}
            type={values?.showPassword ? 'text' : 'password'}
            rules={Rules(watch).password}
            endAdornment={
              values?.showPassword ? <VisibilityOffIcon /> : <Visibility />
            }
            hanldeIconClick={handlePaswordToggle('showPassword')}
            helperText={<IntlMessages id='common.passwordHelperText' />}
            onChangeHandler={onPasswordChange}
          />
          <Box sx={{textAlign: 'left'}} py={2}>
            {!errors.password && watch('password') && (
              <Box display='flex' alignItems='center'>
                <Box width='80%' mr={1}>
                  <BorderLinearProgress
                    title='abc'
                    variant='determinate'
                    color={values.strengthColor}
                    value={values.passwordStrength}
                  />
                </Box>
                <Typography variant='body2' color='textSecondary'>
                  {values.strengthText}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box sx={{mb: {xs: 3, xl: 4}}}>
          <ReactHookInput
            control={control}
            name='confirmPassword'
            label={<IntlMessages id='common.confirm_password' />}
            type={values?.showConfirmPassword ? 'text' : 'password'}
            rules={Rules(watch).confirmPassword}
            endAdornment={
              values?.showConfirmPassword ? (
                <VisibilityOffIcon />
              ) : (
                <Visibility />
              )
            }
            hanldeIconClick={handlePaswordToggle('showConfirmPassword')}
          />
        </Box>
        <Button variant='contained' fullWidth type='submit' disabled={!isValid}>
          <IntlMessages id='common.next' />
        </Button>
      </form>
    </>
  );
};

PersonalInformation.propTypes = {
  handleNext: PropTypes.func,
};

export default PersonalInformation;
