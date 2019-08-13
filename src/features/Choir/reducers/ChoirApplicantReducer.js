import {
    CHOIR_APPLICANT_FETCH_START,
    CHOIR_APPLICANT_FETCH_SUCCESS,
    CHOIR_APPLICANT_FETCH_FAIL
  } from '../actions/types';
  
  const INITIAL_STATE = {
    applicants: {},
    loading: false,
    error: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHOIR_APPLICANT_FETCH_START:
        return { ...state, loading: true, error: '' };
      case CHOIR_APPLICANT_FETCH_SUCCESS:
        return { ...state, applicants: action.payload, loading: false, error: ''};
      case CHOIR_APPLICANT_FETCH_FAIL:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  