/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Counter from './Counter';
import MultiplyComponent from './MultiplyComponent';
import store from './store/index';

import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <MultiplyComponent />
      </Provider>
    );
  }
}
