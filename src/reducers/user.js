const dummyUser = {
  created_at: '2021-03-20T00:17:49.924Z',
  id: 5,
  name: 'test1',
  updated_at: '2021-03-20T00:17:49.924Z',
};

const setUserReducer = (state = dummyUser, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
};

export default setUserReducer;
