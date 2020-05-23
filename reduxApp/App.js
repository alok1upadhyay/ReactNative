/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Counter from './Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'increaseCounter') {
    return {counter: state.counter + 1};
  } else if (action.type === 'decreaseCounter') {
    return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
