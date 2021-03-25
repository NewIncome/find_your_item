import { combineReducers } from 'redux';
import setUserReducer from './user';
import addUsernameReducer from './username';

export default combineReducers({
  username: addUsernameReducer,
  user: setUserReducer,
});
