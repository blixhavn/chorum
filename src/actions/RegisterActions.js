import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_SUBMITTED,
  REG_SUCCESS,
  REG_FAIL
} from './types';

export const regEmailChanged = (text) => {
  return {
    type: REG_EMAIL_CHANGED,
    payload: text
  };
};

export const regPasswordChanged = (text) => {
  return {
    type: REG_PASSWORD_CHANGED,
    payload: text
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REG_SUBMITTED });

    firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
      .then(user => registerUserSuccess(dispatch, user))
      .catch((error) => registerUserFail(dispatch, error));
  };
};

const registerUserFail = (dispatch, error) => {
  dispatch({ type: REG_FAIL, payload: error});
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REG_SUCCESS,
    payload: user
  });

  Actions.registerSuccessful();
};
