"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlEncodeBase64 = void 0;

var urlEncodeBase64 = function urlEncodeBase64(signature) {
  signature = signature.replace(/(=+)$/g, '');
  signature = signature.replace(/\//g, '_');
  signature = signature.replace(/\+/g, '-');
  return signature;
};

exports.urlEncodeBase64 = urlEncodeBase64;