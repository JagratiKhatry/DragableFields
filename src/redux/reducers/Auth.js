import {
    LOGGEDIN_USER,
  } from 'shared/constants/ActionTypes';
  
  const initialSettings = {
    userData:null,
    accessToken:null
  };
  
  const authReducer = (state = initialSettings, action) => {
  
    switch (action.type) {
      case LOGGEDIN_USER:
        localStorage.setItem('data',JSON.stringify(action.payload))
        return {
          ...state,
          userData: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  