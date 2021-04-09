import axios from 'axios';

const addUsername = username => ({
  type: 'SET_NAME',
  username,
});

const setUserInfo = user => ({
  type: 'SET_USER',
  user,
});

const setItems = items => ({
  type: 'SET_ITEMS',
  items,
});

const setFavList = favList => ({
  type: 'SET_FAVLIST',
  favList,
});

const fetchAPIbegin = callHeader => ({
  type: 'FETCH_API_BEGIN',
  callHeader,
});

const fetchAPIsuccess = payload => ({
  type: 'FETCH_API_SUCCESS',
  payload,
});

const fetchAPIfailure = error => ({
  type: 'FETCH_API_FAILURE',
  payload: error,
});

function handleErrors(response) {
  if (!response.ok && response.error) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchAPIcall(url, restAct, options) {
  return dispatch => {
    dispatch(fetchAPIbegin(url, options));

    setTimeout(() => axios[restAct](url, options)
      .then(handleErrors)
      .then(resp => resp.data)
      .then(jsonResp => dispatch(fetchAPIsuccess(jsonResp)))
      .catch(err => dispatch(fetchAPIfailure(`${err}`))), 1000);
  };
}

const fetchAPIreset = () => ({ type: 'FETCH_API_RESET' });

export {
  addUsername,
  setUserInfo,
  setItems,
  setFavList,
  fetchAPIcall,
  fetchAPIbegin,
  fetchAPIsuccess,
  fetchAPIfailure,
  fetchAPIreset,
};
