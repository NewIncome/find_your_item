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
  getItemsCall,
  setItems,
  getItemCall,
  setItem,
  newItemCall,
  updateItemCall,
  removeItemCall,
};
