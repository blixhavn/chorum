import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SONG_UPDATE,
  SONG_CREATE,
  SONGS_FETCH_SUCCESS,
  SONG_SAVE_SUCCESS
} from './types';

export const songUpdate = ({ prop, value }) => {
  return {
    type: SONG_UPDATE,
    payload: { prop, value }
  };
};

export const songCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: SONG_CREATE });
        Actions.songList({ type: 'reset' });
      });
  };
};

export const songsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs`)
      .on('value', snapshot => {
        dispatch({ type: SONGS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const songSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: SONG_SAVE_SUCCESS });
        Actions.songList({ type: 'reset' });
      });
  };
};

export const songDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/songs/${uid}`)
      .remove()
      .then(() => {
        Actions.songList({ type: 'reset' });
      });
  };

}