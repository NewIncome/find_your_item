const initState = {
  loading: false,
  error: null,
  apiData: null,
};

const fetchAPIcallReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_API_BEGIN':
      return {
        ...state,
        loading: true,
        apiData: null,
      };
    case 'FETCH_API_SUCCESS':
      return {
        ...state,
        loading: false,
        apiData: action.payload,
      };
    case 'FETCH_API_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FETCH_API_RESET':
      return {
        ...state,
        loading: false,
        apiData: null,
        error: null,
      };
    default:
      return state;
  }
};

export default fetchAPIcallReducer;
