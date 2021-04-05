import { combineReducers } from 'redux';
import setUserCallReducer from './userCall';
import addUsernameReducer from './username';
import setUserReducer from './user';
import setItemsReducer from './items';
import getItemsCallReducer from './itemsCall';
import fetchAPIcallReducer from './fetch';

export default combineReducers({
  username: addUsernameReducer,
  userCall: setUserCallReducer,
  user: setUserReducer,
  itemsCall: getItemsCallReducer,
  items: setItemsReducer,
  fetchCall: fetchAPIcallReducer,
});
