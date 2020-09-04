"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getNewsImplementation),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(actionWatcher),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function getNewsImplementation() {
  var json;
  return regeneratorRuntime.wrap(function getNewsImplementation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-01&sortBy=publishedAt&apiKey=6eb34cead132409cab78f80ea8ede077').then(function (response) {
            return response.json();
          });

        case 2:
          json = _context.sent;
          _context.next = 5;
          return (0, _effects.put)({
            type: "receivedNews",
            json: json
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function actionWatcher() {
  return regeneratorRuntime.wrap(function actionWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)('getNews', getNewsImplementation);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.all)([actionWatcher()]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/*
{"status":"error","code":"parameterInvalid","message":"You are trying to request results too far in the past. Your plan permits you to request articles as far back as 2020-08-01, but you have requested 2020-08-01. You may need to upgrade to a paid plan."}
*/