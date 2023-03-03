import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from 'shared/constants/ActionTypes';
import { Post } from '@xebia/services/auth/jwt-auth';

export const onVerifyApplicantSignUp = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'verifySignup', requestBody);
};

export const onOTPVerifyAuth = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'verify', requestBody);
};

export const onApplicantRegistration = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'registration', requestBody);
};

export const onSendVericationOTPSignUp = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'verification', requestBody);
};

export const onSingIn = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'login', requestBody);
};

export const onVerifyIdentityFP = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'verifyIdentity', requestBody);
};

export const onResetPasswordFP = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'resetPwd', requestBody);
};
export const onProfileUpdate = (requestBody) => {
  return (dispatch) => callPostApi(dispatch, 'updateProfile', requestBody)
}
const callPostApi = (dispatch, endPoint, requestBody) => {
  dispatch({ type: FETCH_START });
  Post({ endPoint, requestBody }).then((data) => {
    dispatch({ type: FETCH_SUCCESS, payload: data.data });
  })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        payload: error?.response?.data?.error?.message || error?.message,
      });
    });
};
