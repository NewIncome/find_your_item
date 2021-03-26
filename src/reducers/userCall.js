import axios from 'axios';

const setUserCallReducer = (state = '', action) => {
  let apiCall;
  console.log('in setUserCallReducer');
  switch (action.type) {
    case 'NEW_USER_CALL':
      apiCall = new Promise(axios.post(
        'https://findmyitem-api.herokuapp.com/users',
        { name: action.username },
      ));
      return apiCall;
    case 'LOG_USER_CALL':
      return axios.post(
        'https://findmyitem-api.herokuapp.com/login',
        { name: action.username },
      );
    default:
      return state;
  }
};

export default setUserCallReducer;
