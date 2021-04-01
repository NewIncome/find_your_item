const setItemsReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.items;
    default:
      return state;
  }
};

export default setItemsReducer;
