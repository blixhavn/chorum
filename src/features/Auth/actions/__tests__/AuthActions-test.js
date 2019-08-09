import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import firebase from 'firebase';
import * as actions from '../LoginActions'
import * as types from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('AuthActions', () => {
  const email = 'new@email.com ';
  const password = 'hunter2';

  it('should change email', () => {
    const expectedAction = {
      type: types.LOGIN_EMAIL_CHANGED,
      payload: email.trim()
    }
    expect(actions.emailChanged(email)).toEqual(expectedAction)
  });

  it('should change password', () => {
    const expectedAction = {
      type: types.LOGIN_PASSWORD_CHANGED,
      payload: password
    }
    expect(actions.passwordChanged(password)).toEqual(expectedAction);
  });

  it('should create successful actions after logging in', () => {
    const store = mockStore();
    const resolvedActions = [
        { type: types.LOGIN_USER_SUBMITTED },
        { type: types.LOGIN_USER_SUCCESS, payload: {
          profile: null,
          uid: 123123
        }
      }
    ];

    return store.dispatch(actions.loginUser({ email, password })).then(() => {
      expect(store.getActions()).toEqual(resolvedActions);
    });
  });
});

