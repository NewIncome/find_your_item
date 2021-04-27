const setFavListReducer = (state = [null], action) => {
  switch (action.type) {
    case 'SET_FAVLIST':
      return action.favList;
    default:
      return state;
  }
};

export default setFavListReducer;
