import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUBMITTED,
  USER_INFO_REFRESHED
} from './types';

export const emailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text.trim()
  };
};

export const passwordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};

export const refreshProfile = (user) => {
  return (dispatch) => {
    firebase.database().ref(`/user/${user.uid}`)
      .once('value', snapshot => {
        dispatch({
          type: USER_INFO_REFRESHED,
          payload: snapshot.val()
        });
      });
  }  
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_SUBMITTED });

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => fetchUserInfo(response.user))
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error));
  };
};

async function fetchUserInfo(user) {
  let enrichedUser;
  await firebase.database().ref(`/user/${user.uid}`)
  .once('value', snapshot => {
    additionalUserInfo = snapshot.val();
    enrichedUser = {...user, profile: additionalUserInfo}
  });
  return enrichedUser;
}

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.reset('main');
};
