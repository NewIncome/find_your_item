import { combineReducers } from 'redux';
import setUserCallReducer from './userCall';
import addUsernameReducer from './username';

export default combineReducers({
  username: addUsernameReducer,
  userCall: setUserCallReducer,
  // user: setUserReducer,
});
