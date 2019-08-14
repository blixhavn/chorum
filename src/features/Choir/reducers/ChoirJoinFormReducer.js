import {
  CHOIR_CODE_CHANGED,
  CHOIR_JOIN_SUCCESS,
  CHOIR_JOIN_START,
  CHOIR_JOIN_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  accessCode: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOIR_CODE_CHANGED:
      return { ...state, accessCode: action.payload };
    case CHOIR_JOIN_START:
      return { ...state, loading: true, error: '' };
    case CHOIR_JOIN_SUCCESS:
      return { INITIAL_STATE };
    case CHOIR_JOIN_FAILED:
      return { error: action.ayload, accessCode: '', loading: false };
    default:
      return state;
  }
};
