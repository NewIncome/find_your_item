const initState = {
  loading: false,
  error: null,
  apiData: null,
  wholeResp: null,
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
        wholeResp: null,
      };
    case 'FETCH_API_SUCCESS_RESP':
      return {
        ...state,
        loading: false,
        wholeResp: action.payload,
      };
    default:
      return state;
  }
};

export default fetchAPIcallReducer;
