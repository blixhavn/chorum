import {
  SONG_UPDATE,
  SONG_CREATE,
  SONG_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SONG_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SONG_CREATE:
      return INITIAL_STATE;
    case SONG_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
