import {
  FETCH_ERROR,
  RESET,
  FETCH_SUCCESS,
  TOGGLE_APP_DRAWER,
  FETCH_START,
} from 'shared/constants/ActionTypes';

const INIT_STATE = {
  error: null,
  loading: false,
  isAppDrawerOpen: false,
  data: null
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: null, data: null, loading: true};
    }
    case RESET: {
      return {...state, error: null, data: null, loading: false};
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: null,
        data: action.payload,
        loading: false,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    }
    case TOGGLE_APP_DRAWER: {
      return {
        ...state,
        isAppDrawerOpen: !state.isAppDrawerOpen,
      };
    }
    default:
      return state;
  }
};
export default commonReducer;
