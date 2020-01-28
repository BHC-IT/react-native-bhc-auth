"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _encBase = _interopRequireDefault(require("crypto-js/enc-base64"));

var _encUtf = _interopRequireDefault(require("crypto-js/enc-utf8"));

var _verifier = _interopRequireDefault(require("./verifier"));

var Errors = _interopRequireWildcard(require("./errors"));

var _algorithms = _interopRequireWildcard(require("./algorithms"));

var _helpers = require("./helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _key;

var parse = function parse(encodedString) {
  return JSON.parse(_encBase["default"].parse(encodedString).toString(_encUtf["default"]));
};

var sign = function sign(body, algorithm) {
  return (0, _helpers.urlEncodeBase64)(algorithm(body, _key).toString(_encBase["default"]));
};

var Decoder =
/*#__PURE__*/
function () {
  function Decoder(key) {
    _classCallCheck(this, Decoder);

    _key = key;
  }

  _createClass(Decoder, [{
    key: "getAlgorithm",
    value: function getAlgorithm() {
      var algorithm = this._header && this._header.alg;

      if (!algorithm) {
        throw new Errors.AlgorithmMissing();
      }

      if (algorithm === 'none') {
        return 'none';
      }

      if (!~_algorithms.supportedAlgorithms.indexOf(algorithm)) {
        throw new Errors.AlgorithmNotSupported();
      }

      return _algorithms["default"][algorithm];
    }
  }, {
    key: "verifySignature",
    value: function verifySignature(encodedHeader, encodedBody) {
      if (this.algorithm === 'none') {
        return true;
      }

      var signatureBody = "".concat(encodedHeader, ".").concat(encodedBody);

      if (this.signature !== sign(signatureBody, this.algorithm)) {
        throw new Errors.SignatureInvalid();
      }

      return true;
    }
  }, {
    key: "verifyClaims",
    value: function verifyClaims() {
      _verifier["default"].verifyAll(this._body, this.options);
    }
  }, {
    key: "decodeAndVerify",
    value: function decodeAndVerify(token) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _token$toString$split = token.toString().split('.'),
          _token$toString$split2 = _slicedToArray(_token$toString$split, 3),
          encodedHeader = _token$toString$split2[0],
          encodedBody = _token$toString$split2[1],
          signature = _token$toString$split2[2];

      if (!encodedHeader || !encodedBody) {
        throw new Errors.InvalidStructure();
      }

      this.options = options;
      this.header = encodedHeader;
      this.body = encodedBody;
      this.signature = signature;
      this.algorithm = this.getAlgorithm();
      this.verifySignature(encodedHeader, encodedBody);
      this.verifyClaims();
      return this._body;
    }
  }, {
    key: "header",
    set: function set(header) {
      try {
        this._header = parse(header);
      } catch (error) {
        throw new Errors.InvalidHeader();
      }
    }
  }, {
    key: "body",
    set: function set(body) {
      try {
        this._body = parse(body);
      } catch (error) {
        throw new Errors.InvalidBody();
      }
    }
  }]);

  return Decoder;
}();

var _default = Decoder;
exports["default"] = _default;