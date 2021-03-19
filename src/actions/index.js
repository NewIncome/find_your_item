const newUser = user => ({
  type: 'NEW_USER',
  user,
});

const logUser = user => ({
  type: 'LOG_USER',
  user,
});

export { newUser, logUser };
