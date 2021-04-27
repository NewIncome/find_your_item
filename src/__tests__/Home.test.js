import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

const state = {
  username: 'test',
  user: {
    created_at: '2020-02-20T00:20:20.824Z',
    id: 20,
    name: 'Dummy User',
    updated_at: '2020-02-20T00:20:20.824Z',
  },
  fetchCall: { loading: false, error: null, apiData: null },
};

const mockStore = configureStore([]);

describe('My connected Home component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({ ...state });

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it('is displayed correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("has a 'h2' title", () => {
    expect(component.root.findByType('h2').children).toStrictEqual(['Find Your Item']);
  });

  it("has an 'input' field", () => {
    expect(component.root.findByType('input').children).toStrictEqual([]);
  });
});
