import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/RegisterActions'
import * as types from '../../src/actions/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('RegisterActions', () => {
  const name = 'John Doe';
  const email = 'new@email.com';
  const password = 'hunter2';

  it('should change email', () => {
    const expectedAction = {
      type: types.REG_EMAIL_CHANGED,
      payload: email.trim()
    }
    expect(actions.regEmailChanged(email)).toEqual(expectedAction)
  });

  it('should change password', () => {
    const expectedAction = {
      type: types.REG_PASSWORD_CHANGED,
      payload: password
    }
    expect(actions.regPasswordChanged(password)).toEqual(expectedAction);
  });

  it('should create successful actions after registering', () => {
    const store = mockStore();
    const resolvedActions = [
        { type: types.REG_SUBMITTED },
        { type: types.REG_SUCCESS, payload: undefined }
    ];

    return store.dispatch(actions.registerUser({ name, email, password })).then(() => {
      expect(store.getActions()).toEqual(resolvedActions);
    });
  });
});

