import { combineReducers } from 'redux';
import setUserCallReducer from './userCall';
import addUsernameReducer from './username';
import setUserReducer from './user';

export default combineReducers({
  username: addUsernameReducer,
  userCall: setUserCallReducer,
  user: setUserReducer,
});
