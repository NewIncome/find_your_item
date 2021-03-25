import axios from 'axios';

const setUserCallReducer = (state = '', action) => {
  let userObject;
  switch (action.type) {
    case 'NEW_USER_CALL':
      axios.post(
        'https://findmyitem-api.herokuapp.com/users',
        { name: action.username },
      )
        .then(parsedResp => {
          userObject = parsedResp;
          console.log('UserObject');
          console.log(userObject);
        });
      return userObject || state;
    case 'LOG_USER_CALL':
      axios.post(
        'https://findmyitem-api.herokuapp.com/login',
        { name: action.username },
      )
        .then(parsedResp => {
          userObject = parsedResp;
          console.log('UserObject');
          console.log(userObject);
        })
        .catch(err => {
          console.log('Error');
          console.log(err);
          console.log(typeof err);
          console.log(Object.keys(err));
          userObject = err.response;
          console.log(err.response);
        });
      return userObject || state;
    default:
      return state;
  }
};

export default setUserCallReducer;
