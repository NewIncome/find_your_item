import { combineReducers } from 'redux';
import addUsernameReducer from './username';
import setUserReducer from './user';
import setItemsReducer from './items';
import setFavListReducer from './favList';
import fetchAPIcallReducer from './fetch';

export default combineReducers({
  username: addUsernameReducer,
  user: setUserReducer,
  items: setItemsReducer,
  favList: setFavListReducer,
  fetchCall: fetchAPIcallReducer,
});
