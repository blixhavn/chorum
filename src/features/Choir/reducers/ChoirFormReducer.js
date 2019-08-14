import {
  CHOIR_UPDATE,
  CHOIR_CREATE_SUCCESS,
  CHOIR_CREATE_START,
  CHOIR_CREATE_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  name: 'Extro',
  website: 'extro.no',
  email: 'epost@extro.no',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOIR_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHOIR_CREATE_START:
      return { ...state, loading: true, error: '' };
    case CHOIR_CREATE_SUCCESS:
      return { INITIAL_STATE };
    case CHOIR_CREATE_FAILED:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
};
