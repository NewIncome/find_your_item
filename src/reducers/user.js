const dummyUser = {
  created_at: '2020-02-20T00:20:20.824Z',
  id: 20,
  name: 'Dummy User',
  updated_at: '2020-02-20T00:20:20.824Z',
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
