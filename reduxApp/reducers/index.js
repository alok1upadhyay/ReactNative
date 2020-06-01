import {combineReducers} from 'redux';
import countReducer from './countReducer';
import multiplyReducer from './multiplyReducer';

export default reducer = combineReducers ({
  countReducer: countReducer,
  multiplyReducer: multiplyReducer
})