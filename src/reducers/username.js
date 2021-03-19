const addUsernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.username;
    default:
      return state;
  }
};

export default addUsernameReducer;
