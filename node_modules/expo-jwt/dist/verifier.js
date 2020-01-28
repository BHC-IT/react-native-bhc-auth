"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Errors = _interopRequireWildcard(require("./errors"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var claims = ['exp', 'nbf', 'iat', 'sub', 'iss', 'aud'];

var parse = function parse(value) {
  return parseInt(value) || null;
};

var Verifier =
/*#__PURE__*/
function () {
  _createClass(Verifier, null, [{
    key: "verifyAll",
    value: function verifyAll(body, options) {
      var _this = this;

      claims.forEach(function (claim) {
        new _this(body, claim, options);
      });
    }
  }]);

  function Verifier(body, claim) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Verifier);

    this.body = body;
    this.options = options;
    this.time = Date.parse(new Date()) / 1000;
    this.timeSkew = options.timeSkew || 0;
    this["verify_".concat(claim)]();
  }

  _createClass(Verifier, [{
    key: "verify_exp",
    value: function verify_exp() {
      var exp = parse(this.body.exp);

      if (!exp) {
        return;
      }

      if (exp < this.time - this.timeSkew) {
        throw new Errors.TokenExpired();
      }
    }
  }, {
    key: "verify_nbf",
    value: function verify_nbf() {
      var nbf = parse(this.body.nbf);

      if (!nbf) {
        return;
      }

      if (nbf > this.time + this.timeSkew) {
        throw new Errors.ImmatureSignature();
      }
    }
  }, {
    key: "verify_iat",
    value: function verify_iat() {
      var iat = parse(this.body.iat);

      if (!this.body.iat) {
        return;
      }

      if (iat > this.time + this.timeSkew) {
        throw new Errors.IssuedAtInvalid();
      }
    }
  }, {
    key: "verify_sub",
    value: function verify_sub() {
      if (!this.options.sub) {
        return;
      }

      if (this.body.sub !== this.options.sub) {
        throw new Errors.InvalidSubject();
      }
    }
  }, {
    key: "verify_iss",
    value: function verify_iss() {
      if (!this.options.iss) {
        return;
      }

      if (this.body.iss !== this.options.iss) {
        throw new Errors.InvalidIssuer();
      }
    }
  }, {
    key: "verify_aud",
    value: function verify_aud() {
      if (!this.options.aud) {
        return;
      }

      if (this.body.aud !== this.options.aud) {
        throw new Errors.InvalidAudience();
      }
    }
  }]);

  return Verifier;
}();

var _default = Verifier;
exports["default"] = _default;