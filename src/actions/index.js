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

const fetchAPIbegin = dataUnk => ({
  type: 'FETCH_API_BEGIN',
  dataUnk,
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
  if (!response.ok) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchAPIcall(url, restAct, options) {
  console.log('INSIDE fetchAPIcall ACTION');
  console.log(url, restAct, options);
  return dispatch => {
    dispatch(fetchAPIbegin(url, options));

    setTimeout(() => {
      axios[restAct](url, options)
        .then(handleErrors)
        .then(resp => resp.json())
        .then(jsonResp => dispatch(fetchAPIsuccess(jsonResp)))
        .catch(err => dispatch(fetchAPIfailure(`${err}`)));
    }, 1000);
  };
}

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
  getItemsCall,
  setItems,
  getItemCall,
  setItem,
  newItemCall,
  updateItemCall,
  removeItemCall,
};
