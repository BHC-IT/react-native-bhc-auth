"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _encoder = _interopRequireDefault(require("./encoder"));

var _decoder = _interopRequireDefault(require("./decoder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var JWT = {
  encode: function encode(body, key) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var encoder = new _encoder["default"](body, key, options);
    return encoder.encodeAndSign();
  },
  decode: function decode(token, key) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var decoder = new _decoder["default"](key);
    return decoder.decodeAndVerify(token, options);
  }
};
var _default = JWT;
exports["default"] = _default;