const setUserReducer = (state = '', action) => {
  let userObject;
  switch (action.type) {
    case 'NEW_USER':
      fetch(
        'https://findmyitem-api.herokuapp.com/users',
        {
          method: 'POST',
          body: JSON.stringify({ name: action.username }),
        },
      )
        .then(parsedResp => {
          userObject = parsedResp;
          console.log('UserObject');
          console.log(userObject);
        });
      return userObject || state;
    case 'LOG_USER':
      fetch(
        'https://findmyitem-api.herokuapp.com/login',
        {
          method: 'POST',
          header: { 'Content-type': 'application/json' },
          body: JSON.stringify({ name: action.username }),
        },
      )
        // .then(resp => resp.json())
        .then(parsedResp => {
          userObject = parsedResp;
          console.log('UserObject');
          console.log(userObject);
          console.log(JSON.stringify({ name: action.username }));
        });
      return userObject || state;
    default:
      return state;
  }
};

export default setUserReducer;
