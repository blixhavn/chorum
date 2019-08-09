import {
  SONGS_FETCH_SUCCESS
} from '../actions/types';

const INITAL_STATE = {};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
      case SONGS_FETCH_SUCCESS:
          return action.payload;
      default:
          return state;
  }
};
