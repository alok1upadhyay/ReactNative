import { put, takeLatest, all } from 'redux-saga/effects';

import {API_URL} from '../../env.json'
function* getNewsImplementation() {
  const json = yield fetch(API_URL)
        .then(response => response.json(), );    
  yield put({ type: "receivedNews", json: json, });
}
function* actionWatcher() {
     yield takeLatest('getNews', getNewsImplementation)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}

/*
{"status":"error","code":"parameterInvalid","message":"You are trying to request results too far in the past. Your plan permits you to request articles as far back as 2020-08-01, but you have requested 2020-08-01. You may need to upgrade to a paid plan."}
*/