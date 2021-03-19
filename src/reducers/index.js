import { combineReducers } from 'redux';
import setUser from './user';
import addUsernameReducer from './username';

export default combineReducers({
  username: addUsernameReducer,
  user: setUser,
});
