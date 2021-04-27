import fetchAPIcallReducer from '../reducers/fetch';

describe('fetchAPIcall Reducer is working ok', () => {
  it('returns loading: true', () => {
    const fetchCall = fetchAPIcallReducer(null, { type: 'FETCH_API_BEGIN' });
    expect(fetchCall.loading).toBe(true);
  });

  it('returns apiData: payload', () => {
    const fetchCall = fetchAPIcallReducer(null, { type: 'FETCH_API_SUCCESS', payload: 'pay test' });
    expect(fetchCall.apiData).toBe('pay test');
  });

  it('returns an error', () => {
    const fetchCall = fetchAPIcallReducer(null, { type: 'FETCH_API_FAILURE', payload: 'error mssg' });
    expect(fetchCall.error).toBe('error mssg');
  });

  it('returns a cleared state', () => {
    const fetchCall = fetchAPIcallReducer(null, { type: 'FETCH_API_RESET' });
    expect(fetchCall.loading).toBe(false);
    expect(fetchCall.apiData).toBe(null);
    expect(fetchCall.error).toBe(null);
  });
});
