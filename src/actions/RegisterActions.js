import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  REG_NAME_CHANGED,
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_SUBMITTED,
  REG_SUCCESS,
  REG_FAIL
} from './types';

export const regNameChanged = (text) => {
  return {
    type: REG_NAME_CHANGED,
    payload: text
  };
};

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

export const registerUser = ({ name, email, password }) => {
  return (dispatch) => {
    dispatch({ type: REG_SUBMITTED });

    return firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
      .then(response => registerUserSaveProfile(dispatch, name, response))
      .catch((error) => registerUserFail(dispatch, error));
  };
};

const registerUserFail = (dispatch, error) => {
  dispatch({ type: REG_FAIL, payload: error});
};


const registerUserSaveProfile = (dispatch, name, response) => {
  firebase.database().ref(`/users/${response.user.uid}`)
    .set({ name: name.trim() })
    .then((response) => registerUserSuccess(dispatch, response));
};


const registerUserSuccess = (dispatch, response) => {
  dispatch({
    type: REG_SUCCESS,
    payload: response
  });

  Actions.registerSuccessful();
};
