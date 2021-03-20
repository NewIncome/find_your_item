const addUsername = username => ({
  type: 'SET_NAME',
  username,
});

const newUser = (user, username) => ({
  type: 'NEW_USER',
  user,
  username,
});

const logUser = (username, user) => ({
  type: 'LOG_USER',
  user,
  username,
});

export { addUsername, newUser, logUser };
