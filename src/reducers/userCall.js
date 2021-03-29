import axios from 'axios';

const setUserCallReducer = async (state = '', action) => {
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
      apiCall = await axios.post(
        'https://findmyitem-api.herokuapp.com/login',
        { name: action.username },
      );
      console.log('inside reducer, API call resp');
      console.log(apiCall);
      return apiCall;
    default:
      return state;
  }
};

export default setUserCallReducer;
