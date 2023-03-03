import axios from 'axios';
import cookies from 'js-cookie';

const jwtAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/suite/webapi`, 
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    'appian-api-key':process.env.REACT_APP_APPIAN_API_KEY,
    "X-Frame-Options": "Deny",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Security-Policy": "script-src 'self'"
  },
});

jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);

export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common['Authorization-X-Appian'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common['Authorization-X-Appian'];
    localStorage.removeItem('token');
  }
};

const Get = async ({
  endPoint,
  timestamp = new Date().getTime(),
  queryParams = {},
}) => {
  const headers = {
    timestamp: timestamp,
    locale: cookies.get("locale") || process.env.REACT_APP_DEFAULT_LANGUAGE,
  };

  return await jwtAxios.get(
    endPoint,
    { headers, params: { ...queryParams } }
  );

};

const Post = async ({
  endPoint,
  requestBody = {},
  queryParams = {},
  timestamp = new Date().getTime(),
}) => {  
  const headers = {
    timestamp: timestamp,
    locale: cookies.get("locale") || process.env.REACT_APP_DEFAULT_LANGUAGE,
  };

  return await jwtAxios.post(
    endPoint,requestBody,
    { headers, params: { ...queryParams } }
  );
};


export { jwtAxios,Post, Get };

export default jwtAxios;
