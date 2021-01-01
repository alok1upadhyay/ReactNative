/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducer';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';




import {
  StyleSheet
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootApp from './Pages/RootApp';
import Intro from './Pages/Intro';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Intro/>
      <RootApp/>
      </Provider>
      )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//react navigation 5
//hooks
//route
//navigation