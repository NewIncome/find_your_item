const setUser = (state = '', action) => {
  let userObject;
  switch (action.type) {
    case 'NEW_USER':
      fetch(
        'https://findmyitem-api.herokuapp.com/users',
        {
          method: 'GET',
          body: JSON.stringify({ name: action.name }),
        },
      )
        .then(resp => resp.json())
        .then(parsedResp => { userObject = parsedResp; });
      return userObject;
    case 'LOG_USER':
      fetch(
        'https://findmyitem-api.herokuapp.com/login',
        {
          method: 'POST',
          body: JSON.stringify({ name: action.name }),
        },
      )
        .then(resp => resp.json())
        .then(parsedResp => { userObject = parsedResp; });
      return userObject;
    default:
      return state;
  }
};

export default setUser;
