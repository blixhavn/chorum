import firebase from 'firebase';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import {
  CHOIR_UPDATE,
  CHOIR_CREATE_START,
  CHOIR_CREATE_FAILED,
  CHOIR_CREATE_SUCCESS,
  CHOIR_INFO_FETCH_START,
  CHOIR_INFO_FETCH_SUCCESS,
  CHOIR_INFO_FETCH_FAIL,
  CHOIR_APPLICANT_FETCH_START,
  CHOIR_APPLICANT_FETCH_SUCCESS,
  CHOIR_APPLICANT_FETCH_FAIL,
  CHOIR_INFO_UPDATE_SUCCESS,
  CHOIR_INFO_UPDATE_FAILED
} from './types';
import { refreshProfile } from '../../Auth/actions'


export const choirUpdate = ({ prop, value }) => {
  return {
    type: CHOIR_UPDATE,
    payload: { prop, value }
  };
};

export const choirInfoFetch = (user) => {
  const choirID = _.get(user, 'profile.choirID');

  if (choirID) {
    return (dispatch) => {
      dispatch({ type: CHOIR_INFO_FETCH_START });

      firebase.database().ref(`/choir/${choirID}/`)
        .on('value', snapshot => {
          dispatch({ type: CHOIR_INFO_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
  }
  return onFetchError('Could not find Choir ID');
};

export const choirFetchApplicants = (user) => {
  const choirID = _.get(user, 'profile.choirID');

  if (choirID) {
    return (dispatch) => {
      dispatch({ type: CHOIR_APPLICANT_FETCH_START });

      firebase.database().ref('/user/')
      .orderByChild('choirID_choirApproved').equalTo(`${choirID} false`)
      .on('value', snapshot => {
        dispatch({ type: CHOIR_APPLICANT_FETCH_SUCCESS, payload: snapshot.val()});
      });
    }
  }
  return onFetchApplicantsError('Could not find Choir ID');
  
}

export const choirCreate = (user, { name, website, email }) => {
  return (dispatch) => {
    dispatch({type: CHOIR_CREATE_START});
  
    const accessCode = Math.random().toString(36).substr(2, 7);
    firebase.database().ref(`/choir/`)
      .push({ name, website, email, accessCode })
      .then(ref => {
        firebase.database().ref(`/user/${user.uid}/`)
          .update({ choirID: ref.getKey(), choirApproved: true })
          .then(() => { refreshProfile(user); })
          .then(() => {
            dispatch({ type: CHOIR_CREATE_SUCCESS });
            Actions.choirInfo();
          });
      })
      .catch(onCreateError);
  };
};

export const choirInfoUpdate = (user, { website, email }) => {
  const choirID = _.get(user, 'profile.choirID');

  return (dispatch) => {
    firebase.database().ref(`/choir/${choirID}`)
      .update({ website, email })
      .then(() => {
        dispatch({ type: CHOIR_INFO_UPDATE_SUCCESS });
        Actions.choirInfo({ type: 'reset' });
      })
      .catch((error) => {
        dispatch({
          type: CHOIR_INFO_UPDATE_FAILED,
          payload: error
        });
      });
  };
};

const onFetchError = (error) => {
  return {
    type: CHOIR_INFO_FETCH_FAIL,
    payload: error
  };
}
const onFetchApplicantsError = (error) => {
  return {
    type: CHOIR_APPLICANT_FETCH_FAIL,
    payload: error
  }
}
const onCreateError = (error) => {
  return {
    type: CHOIR_CREATE_FAILED,
    payload: error
  };
}