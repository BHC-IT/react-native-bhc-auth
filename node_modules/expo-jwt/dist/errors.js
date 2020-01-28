"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidAudience = exports.InvalidIssuer = exports.InvalidSubject = exports.IssuedAtInvalid = exports.ImmatureSignature = exports.TokenExpired = exports.AlgorithmNotSupported = exports.AlgorithmMissing = exports.InvalidBody = exports.InvalidHeader = exports.SignatureInvalid = exports.InvalidStructure = void 0;

var _algorithms = require("./algorithms");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InvalidStructure =
/*#__PURE__*/
function (_Error) {
  _inherits(InvalidStructure, _Error);

  function InvalidStructure() {
    var _this;

    _classCallCheck(this, InvalidStructure);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InvalidStructure).call(this, arguments));
    _this.message = 'Token must be in the format: header.body.signature';
    return _this;
  }

  return InvalidStructure;
}(_wrapNativeSuper(Error));

exports.InvalidStructure = InvalidStructure;

var SignatureInvalid =
/*#__PURE__*/
function (_Error2) {
  _inherits(SignatureInvalid, _Error2);

  function SignatureInvalid() {
    var _this2;

    _classCallCheck(this, SignatureInvalid);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SignatureInvalid).call(this, arguments));
    _this2.message = 'Invalid token signature';
    return _this2;
  }

  return SignatureInvalid;
}(_wrapNativeSuper(Error));

exports.SignatureInvalid = SignatureInvalid;

var InvalidHeader =
/*#__PURE__*/
function (_Error3) {
  _inherits(InvalidHeader, _Error3);

  function InvalidHeader() {
    var _this3;

    _classCallCheck(this, InvalidHeader);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidHeader).call(this, arguments));
    _this3.message = 'Invalid token header format';
    return _this3;
  }

  return InvalidHeader;
}(_wrapNativeSuper(Error));

exports.InvalidHeader = InvalidHeader;

var InvalidBody =
/*#__PURE__*/
function (_Error4) {
  _inherits(InvalidBody, _Error4);

  function InvalidBody() {
    var _this4;

    _classCallCheck(this, InvalidBody);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidBody).call(this, arguments));
    _this4.message = 'Invalid token body format';
    return _this4;
  }

  return InvalidBody;
}(_wrapNativeSuper(Error));

exports.InvalidBody = InvalidBody;

var AlgorithmMissing =
/*#__PURE__*/
function (_Error5) {
  _inherits(AlgorithmMissing, _Error5);

  function AlgorithmMissing() {
    var _this5;

    _classCallCheck(this, AlgorithmMissing);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AlgorithmMissing).call(this, arguments));
    _this5.message = 'Algorithm specified in header is missing';
    return _this5;
  }

  return AlgorithmMissing;
}(_wrapNativeSuper(Error));

exports.AlgorithmMissing = AlgorithmMissing;

var AlgorithmNotSupported =
/*#__PURE__*/
function (_Error6) {
  _inherits(AlgorithmNotSupported, _Error6);

  function AlgorithmNotSupported() {
    var _this6;

    _classCallCheck(this, AlgorithmNotSupported);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(AlgorithmNotSupported).call(this, arguments));

    var supported = _algorithms.supportedAlgorithms.join(', ');

    _this6.message = "Algorithm not supported. Supported algorithms are: ".concat(supported);
    return _this6;
  }

  return AlgorithmNotSupported;
}(_wrapNativeSuper(Error));

exports.AlgorithmNotSupported = AlgorithmNotSupported;

var TokenExpired =
/*#__PURE__*/
function (_Error7) {
  _inherits(TokenExpired, _Error7);

  function TokenExpired() {
    var _this7;

    _classCallCheck(this, TokenExpired);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TokenExpired).call(this, arguments));
    _this7.message = "Token has expired";
    return _this7;
  }

  return TokenExpired;
}(_wrapNativeSuper(Error));

exports.TokenExpired = TokenExpired;

var ImmatureSignature =
/*#__PURE__*/
function (_Error8) {
  _inherits(ImmatureSignature, _Error8);

  function ImmatureSignature() {
    var _this8;

    _classCallCheck(this, ImmatureSignature);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ImmatureSignature).call(this, arguments));
    _this8.message = "Token used before becoming valid";
    return _this8;
  }

  return ImmatureSignature;
}(_wrapNativeSuper(Error));

exports.ImmatureSignature = ImmatureSignature;

var IssuedAtInvalid =
/*#__PURE__*/
function (_Error9) {
  _inherits(IssuedAtInvalid, _Error9);

  function IssuedAtInvalid() {
    var _this9;

    _classCallCheck(this, IssuedAtInvalid);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(IssuedAtInvalid).call(this, arguments));
    _this9.message = "Issued At claim is invalid";
    return _this9;
  }

  return IssuedAtInvalid;
}(_wrapNativeSuper(Error));

exports.IssuedAtInvalid = IssuedAtInvalid;

var InvalidSubject =
/*#__PURE__*/
function (_Error10) {
  _inherits(InvalidSubject, _Error10);

  function InvalidSubject() {
    var _this10;

    _classCallCheck(this, InvalidSubject);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidSubject).call(this, arguments));
    _this10.message = "Subject is invalid";
    return _this10;
  }

  return InvalidSubject;
}(_wrapNativeSuper(Error));

exports.InvalidSubject = InvalidSubject;

var InvalidIssuer =
/*#__PURE__*/
function (_Error11) {
  _inherits(InvalidIssuer, _Error11);

  function InvalidIssuer() {
    var _this11;

    _classCallCheck(this, InvalidIssuer);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidIssuer).call(this, arguments));
    _this11.message = "Issuer is invalid";
    return _this11;
  }

  return InvalidIssuer;
}(_wrapNativeSuper(Error));

exports.InvalidIssuer = InvalidIssuer;

var InvalidAudience =
/*#__PURE__*/
function (_Error12) {
  _inherits(InvalidAudience, _Error12);

  function InvalidAudience() {
    var _this12;

    _classCallCheck(this, InvalidAudience);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidAudience).call(this, arguments));
    _this12.message = "Audience is invalid";
    return _this12;
  }

  return InvalidAudience;
}(_wrapNativeSuper(Error));

exports.InvalidAudience = InvalidAudience;