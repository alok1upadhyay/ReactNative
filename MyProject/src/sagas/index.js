import { put, takeLatest, all } from 'redux-saga/effects';
function* getNewsImplementation() {
  const json = yield fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-01&sortBy=publishedAt&apiKey=6eb34cead132409cab78f80ea8ede077')
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