import {
    CHOIR_INFO_FETCH_START,
    CHOIR_INFO_FETCH_SUCCESS,
    CHOIR_INFO_FETCH_FAIL
  } from '../actions/types';
  
  const INITIAL_STATE = {
    members: '',
    code: '',
    name: '',
    website: '',
    email: '',
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHOIR_INFO_FETCH_START:
        return { ...state, loading: true, error: '' };
      case CHOIR_INFO_FETCH_SUCCESS:
        return action.payload;
      case CHOIR_INFO_FETCH_FAIL:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  