import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  LOGGEDIN_USER,
} from 'shared/constants/ActionTypes';
import jwtAxios, {Post, setAuthToken} from './index';
import jwtDecode from 'jwt-decode';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setJWTAuthData({
        user: undefined,
        isLoading: false,
        isAuthenticated: false,
      });
      return;
    } else {
      const tokenDecrypt = jwtDecode(token);
      setJWTAuthData({
        user: tokenDecrypt,
        isLoading: false,
        isAuthenticated: true,
      });
    }
  }, []);

  const signInUser = async (requestBody) => {
    dispatch({type: FETCH_START});
    Post({endPoint:'verify', requestBody}).then((userData) => {
        const accessToken = userData?.data?.result?.accessToken
        const tokenDecrypt = jwtDecode(accessToken);
        // console.log(tokenDecrypt);
        dispatch({type: LOGGEDIN_USER, payload: userData.data});
        dispatch({type: FETCH_SUCCESS, payload: userData.data});
        localStorage.setItem('token', accessToken);
        setAuthToken(accessToken);
        setJWTAuthData({
          user: tokenDecrypt,
          isAuthenticated: true,
          isLoading: false,
        });
      })
      .catch((error) => {
        setJWTAuthData({
          ...firebaseData,
          isAuthenticated: false,
          isLoading: false,
        });
        dispatch({
          type: FETCH_ERROR,
          payload:
            error?.response?.data?.error?.message ||
            error?.message ||
            'Something went wrong',
        });
      });
  };

  const signUpUser = async ({name, email, password}) => {
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post('users', {name, email, password});
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
      dispatch({
        type: FETCH_ERROR,
        payload: error?.response?.data?.error || 'Something went wrong',
      });
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
