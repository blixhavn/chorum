import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
  CHOIR_CODE_CHANGED,
  CHOIR_JOIN_SUCCESS,
  CHOIR_JOIN_START,
  CHOIR_JOIN_FAILED,
} from './types';


export const accessCodeChanged = (accessCode) => {
  return {
    type: CHOIR_CODE_CHANGED,
    payload: accessCode
  };
};


export const joinChoir = (user, accessCode) => {
  const choirID = _.get(user, 'profile.choirID');

  if (!choirID) {
    return (dispatch) => {
      dispatch({type: CHOIR_JOIN_START});
      
      firebase.database().ref(`/choir/`)
        .orderByChild('accessCode').equalTo(accessCode)
        .once('value', snapshot => {
          const choirID = Object.keys(snapshot.val())[0];
          firebase.database().ref(`/user/${user.uid}/`)
          .update({ choirID, choirApproved: false })
          .then(() => {
            dispatch({ type: CHOIR_JOIN_SUCCESS });
            Actions.choirApplicationPending();
          })
        });
    };
  }
  return onJoinError('User already in choir');
};

const onJoinError = (error) => {
  return {
    type: CHOIR_JOIN_FAILED,
    payload: error
  };
}
