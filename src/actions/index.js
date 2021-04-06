import axios from 'axios';

const addUsername = username => ({
  type: 'SET_NAME',
  username,
});

const newUserCall = (userCall, username) => ({
  type: 'NEW_USER_CALL',
  userCall,
  username,
});

const logUserCall = (username, userCall) => ({
  type: 'LOG_USER_CALL',
  userCall,
  username,
});

const setUserInfo = user => ({
  type: 'SET_USER',
  user,
});

const fetchAPIbegin = callHeader => ({
  type: 'FETCH_API_BEGIN',
  callHeader,
});

const fetchAPIsuccess = payload => ({
  type: 'FETCH_API_SUCCESS',
  payload,
});

const fetchAPIfailure = error => ({
  type: 'FETCH_API_FAILURE',
  payload: error,
});

function handleErrors(response) {
  console.log('RESPONSE INside ERROR');
  console.log(response);
  if (!response.ok && response.error) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchAPIcall(url, restAct, options) {
  return dispatch => {
    dispatch(fetchAPIbegin(url, options));

    setTimeout(() => axios[restAct](url, options)
      .then(handleErrors)
      .then(resp => resp.data)
      .then(jsonResp => dispatch(fetchAPIsuccess(jsonResp)))
      .catch(err => dispatch(fetchAPIfailure(`${err}`))), 1000);
  };
}

const fetchAPIreset = () => ({ type: 'FETCH_API_RESET' });

const getItemsCall = itemsCall => ({
  type: 'GET_ITEMS',
  itemsCall,
});

const setItems = items => ({
  type: 'SET_ITEMS',
  items,
});

const getItemCall = (itemCall, itemId) => ({
  type: 'GET_ITEM',
  itemId,
  itemCall,
});

const setItem = item => ({
  type: 'SET_ITEM',
  item,
});

const newItemCall = (newItemCall, itemId) => ({
  type: 'NEW_ITEM_CALL',
  newItemCall,
  itemId,
});

const updateItemCall = (updateItemCall, itemId) => ({
  type: 'NEW_ITEM_CALL',
  updateItemCall,
  itemId,
});

const removeItemCall = (removeItemCall, itemId) => ({
  type: 'REMOVE_ITEM_CALL',
  removeItemCall,
  itemId,
});

export {
  addUsername,
  newUserCall,
  logUserCall,
  setUserInfo,
  fetchAPIcall,
  fetchAPIbegin,
  fetchAPIsuccess,
  fetchAPIfailure,
  fetchAPIreset,
  getItemsCall,
  setItems,
  getItemCall,
  setItem,
  newItemCall,
  updateItemCall,
  removeItemCall,
};
