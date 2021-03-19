import { combineReducers } from 'redux';
import setUser from './user';

export default combineReducers({
  user: setUser,
});
