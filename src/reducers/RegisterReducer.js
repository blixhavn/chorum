import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_SUCCESS,
  REG_FAIL,
  REG_SUBMITTED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REG_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case REG_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case REG_SUBMITTED:
      return { ...state, loading: true, error: '' };
    case REG_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REG_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
};
