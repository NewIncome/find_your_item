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

export {
  addUsername,
  newUserCall,
  logUserCall,
  setUserInfo,
};
