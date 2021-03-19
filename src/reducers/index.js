import { combineReducers } from 'redux';
import setUser from './user';
import getUsername from './username';

export default combineReducers({
  username: getUsername,
  user: setUser,
});
