import { combineReducers } from 'redux';
import AuthReducer from './features/Auth/reducers/AuthReducer';
import RegisterReducer from './features/Auth/reducers/RegisterReducer';

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
});
