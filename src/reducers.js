import { combineReducers } from 'redux';
import AuthReducer from './features/Auth/reducers/AuthReducer';
import RegisterReducer from './features/Auth/reducers/RegisterReducer';
import ChoirFormReducer from './features/Choir/reducers/ChoirFormReducer';
import ChoirJoinFormReducer from './features/Choir/reducers/ChoirJoinFormReducer';
import ChoirReducer from './features/Choir/reducers/ChoirReducer.js';
import ChoirApplicantReducer from './features/Choir/reducers/ChoirApplicantReducer';

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  choirForm: ChoirFormReducer,
  choirJoinForm: ChoirJoinFormReducer,
  choirInfo: ChoirReducer,
  choirApplicants: ChoirApplicantReducer
});
