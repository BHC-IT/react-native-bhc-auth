"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.supportedAlgorithms = void 0;

var _hmacSha = _interopRequireDefault(require("crypto-js/hmac-sha256"));

var _hmacSha2 = _interopRequireDefault(require("crypto-js/hmac-sha384"));

var _hmacSha3 = _interopRequireDefault(require("crypto-js/hmac-sha512"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapping = {
  HS256: _hmacSha["default"],
  HS384: _hmacSha2["default"],
  HS512: _hmacSha3["default"]
};
var supportedAlgorithms = Object.keys(mapping);
exports.supportedAlgorithms = supportedAlgorithms;
var _default = mapping;
exports["default"] = _default;