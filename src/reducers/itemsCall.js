import axios from 'axios';

const getItemsCallReducer = async (state = {}, action) => {
  let apiCall;

  switch (action.type) {
    case 'GET_ITEMS':
      apiCall = await axios.get(
        'https://findmyitem-api.herokuapp.com/items',
      );
      return apiCall;
    default:
      return state;
  }
};

export default getItemsCallReducer;
