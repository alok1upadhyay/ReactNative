"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GetAlert(_ref) {
  var news = _ref.news;
  return _reactNative.Alert.alert('Error', 'news.message', [{
    text: 'Ask me later',
    onPress: function onPress() {
      return console.log('Ask me later pressed');
    }
  }, {
    text: 'Cancel',
    onPress: function onPress() {
      return console.log('Cancel Pressed');
    },
    style: 'cancel'
  }, {
    text: 'OK',
    onPress: function onPress() {
      return console.log('OK Pressed');
    }
  }], {
    cancelable: false
  });
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    news: state.news
  };
};

var _default = GetAlert = (0, _reactRedux.connect)(mapStateToProps, null)(GetAlert);
/*
{"status":"error","code":"parameterInvalid","message":"You are trying to request results too far in the past. Your plan permits you to request articles as far back as 2020-08-01, but you have requested 2020-08-01. You may need to upgrade to a paid plan."}
*/


exports["default"] = _default;