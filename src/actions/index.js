const addUsername = username => ({
  type: 'SET_NAME',
  username,
});

const newUser = user => ({
  type: 'NEW_USER',
  user,
});

const logUser = user => ({
  type: 'LOG_USER',
  user,
});

export { addUsername, newUser, logUser };
