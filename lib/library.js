(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pu-common", [], factory);
	else if(typeof exports === 'object')
		exports["pu-common"] = factory();
	else
		root["pu-common"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logging = __webpack_require__(2);

var _logging2 = _interopRequireDefault(_logging);

var _pmx = __webpack_require__(3);

var _pmx2 = _interopRequireDefault(_pmx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ref = {},
    metadata = _ref.metadata,
    log = _ref.log;


function localLog(type, msg) {
  var plainMsg = JSON.stringify(msg);
  if (type === 'info') {
    console.info(plainMsg);
  } else if (type === 'debug') {
    console.debug(plainMsg);
  } else if (type === 'warning') {
    console.warn(plainMsg);
  } else {
    console.error(plainMsg);
  }
}

function write(type, msg, notify) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  var entry = log.entry(metadata, msg);
  if (notify) {
    _pmx2.default.notify(msg);
  }
  log[type](entry, function (err, apiResponse) {
    if (err) {
      console.error('Error: ', err);
      console.error(type + ': ', JSON.stringify(msg));
    }
  });
  if (process.env.NODE_ENV === 'local') {
    localLog(type, msg);
  }
}

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: 'setConfig',
    value: function setConfig(config) {
      metadata = config.metadata;
      if (process.env.NODE_ENV !== 'test') {
        var logging = new _logging2.default({
          projectId: config.projectId
        });
        log = logging.log(config.logName);
      }
    }
  }, {
    key: 'info',
    value: function info(msg) {
      write('info', msg);
    }
  }, {
    key: 'critical',
    value: function critical(msg) {
      write('critical', msg, true);
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      write('debug', msg);
    }
  }, {
    key: 'emergency',
    value: function emergency(msg) {
      write('emergency', msg, true);
    }
  }, {
    key: 'error',
    value: function error(msg) {
      write('error', msg, true);
    }
  }, {
    key: 'notice',
    value: function notice(msg) {
      write('notice', msg);
    }
  }, {
    key: 'warning',
    value: function warning(msg) {
      write('warning', msg);
    }
  }]);

  return Logger;
}();

exports.default = Logger;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sequence = exports.Stripe = exports.Calculations = exports.auth = exports.HandlerResponse = exports.Ncryp = exports.Logger = undefined;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _ncryp = __webpack_require__(4);

var _ncryp2 = _interopRequireDefault(_ncryp);

var _handlerResponse = __webpack_require__(6);

var _handlerResponse2 = _interopRequireDefault(_handlerResponse);

var _auth = __webpack_require__(7);

var _auth2 = _interopRequireDefault(_auth);

var _calculations = __webpack_require__(11);

var _calculations2 = _interopRequireDefault(_calculations);

var _stripe = __webpack_require__(14);

var _stripe2 = _interopRequireDefault(_stripe);

var _sequence = __webpack_require__(16);

var _sequence2 = _interopRequireDefault(_sequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logger = _logger2.default;
exports.Ncryp = _ncryp2.default;
exports.HandlerResponse = _handlerResponse2.default;
exports.auth = _auth2.default;
exports.Calculations = _calculations2.default;
exports.Stripe = _stripe2.default;
exports.Sequence = _sequence2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/logging");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("pmx");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _blind = __webpack_require__(5);

var _blind2 = _interopRequireDefault(_blind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var encryptKey = void 0;

var Ncryp = function () {
  function Ncryp() {
    _classCallCheck(this, Ncryp);
  }

  _createClass(Ncryp, null, [{
    key: 'setKey',
    value: function setKey(key) {
      encryptKey = key;
    }
  }, {
    key: 'encryptField',
    value: function encryptField(value) {
      var encrypted = new _blind2.default({ encryptKey: encryptKey }).encrypt(value);
      return encrypted;
    }
  }, {
    key: 'decryptField',
    value: function decryptField(encryptedValue) {
      var decrypted = new _blind2.default({ encryptKey: encryptKey }).decrypt(encryptedValue);
      return decrypted;
    }
  }]);

  return Ncryp;
}();

exports.default = Ncryp;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("blind");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerResponse = function () {
  function HandlerResponse() {
    _classCallCheck(this, HandlerResponse);
  }

  _createClass(HandlerResponse, null, [{
    key: 'send',
    value: function send(response, msg) {
      return response.status(200).json(msg);
    }
  }, {
    key: 'error',
    value: function error(response, msg, code) {
      _logger2.default.error({ code: code, resason: msg });
      return response.status(code || 500).json(msg);
    }
  }]);

  return HandlerResponse;
}();

exports.default = HandlerResponse;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import config from '@/config/environment'


var _redis = __webpack_require__(8);

var _redis2 = _interopRequireDefault(_redis);

var _jsonwebtoken = __webpack_require__(10);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */

function serverTokenAuthenticated(req) {
  var token = void 0;
  // allow access_token to be passed through query parameter as well
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.hasOwnProperty('token')) {
    token = req.query.token;
  } else if (req.body && req.body.token) {
    token = req.body.token;
  } else if (req.query && req.query.hasOwnProperty('access_token')) {
    token = req.query.token;
  }
  return token;
}

var auth = void 0;

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, [{
    key: 'revoke',
    value: function revoke(req, res, next) {
      if (!this.secret) {
        throw new Error('first must set cretendials, use fn setCredential');
      }
      var token = serverTokenAuthenticated(req);
      if (!token) {
        return res.sendStatus(401);
      }
      var decoded = _jsonwebtoken2.default.decode(token);
      if (decoded) {
        this.redis.del(decoded.user.email);
      }
      next();
    }
  }, {
    key: 'validate',
    value: function validate(req, res, next) {
      var _this = this;

      if (!this.secret) {
        throw new Error('first must set cretendials, use fn config');
      }
      if (!this.apiKey) {
        throw new Error('first must set cretendials, use fn config');
      }
      if (req.headers['x-api-key']) {
        if (req.headers['x-api-key'] === this.apiKey) {
          return next();
        }
        return res.sendStatus(401);
      }
      var token = serverTokenAuthenticated(req);
      if (!token) {
        return res.sendStatus(401);
      }
      _jsonwebtoken2.default.verify(token, this.secret, function (error, decoded) {
        if (error) {
          return res.status(500).json({ error: error, message: 'invalid token' });
        }
        _this.redis.get(decoded.user.email).then(function (value) {
          if (token !== value) return res.sendStatus(401);
          req.user = decoded.user;
          next();
        }).catch(function (reason) {
          res.sendStatus(500).json(reason);
        });
      });
    }
  }, {
    key: 'token',
    value: function token(user, rembemberMe) {
      var expireTime = 60 * 60;
      if (rembemberMe) {
        expireTime = expireTime * 60;
      }
      var token = _jsonwebtoken2.default.sign({ user: user }, this.secret, {
        expiresIn: expireTime
      });
      this.redis.set(user.email.toLowerCase(), token, expireTime);
      return token;
    }
  }, {
    key: 'remove',
    value: function remove(email) {
      return this.redis.del();
    }
  }, {
    key: 'config',
    set: function set(_ref) {
      var port = _ref.port,
          host = _ref.host,
          credential = _ref.credential,
          apiKey = _ref.apiKey;

      this.secret = credential;
      this.redis = new _redis2.default(port, host);
      this.apiKey = apiKey;
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!auth) {
        auth = new Auth();
      }
      return auth;
    }
  }]);

  return Auth;
}();

exports.default = auth = Auth.instance;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redis = __webpack_require__(9);

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redis = function () {
  function Redis(port, host) {
    _classCallCheck(this, Redis);

    this.client = _redis2.default.createClient(port, host);
    this.client.on('connect', function () {});
  }

  _createClass(Redis, [{
    key: 'set',
    value: function set(key, value) {
      var _this = this;

      var expiration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 86400;

      return new Promise(function (resolve, reject) {
        _this.client.set(key, value, function (err, reply) {
          if (err) {
            reject(err);
          }
          _this.client.expire(key, expiration);
          resolve(reply);
        });
      });
    }
  }, {
    key: 'get',
    value: function get(key) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.client.get(key, function (err, reply) {
          if (err) {
            reject(err);
          }
          resolve(reply);
        });
      });
    }
  }, {
    key: 'del',
    value: function del(key) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.client.del(key, function (err, reply) {
          if (err) {
            reject(err);
          }
          resolve(reply);
        });
      });
    }
  }]);

  return Redis;
}();

exports.default = Redis;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(12);

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculations = function () {
  function Calculations() {
    _classCallCheck(this, Calculations);
  }

  _createClass(Calculations, null, [{
    key: 'card',
    value: function card(product, due) {
      var cardFee = product.processingFees.cardFee / 100;
      var cardFeeFlat = product.processingFees.cardFeeFlat;
      var paidUpFee = product.collectionFees.fee / 100;
      var paidUpFeeFlat = product.collectionFees.feeFlat;
      var price = due.amount;
      var processing = product.payFees.processing;
      var collect = product.payFees.collect;

      var result = {
        paidupFee: 0,
        priceBase: 0
      };

      if (!processing && collect) {
        result.priceBase = _math2.default.round((price - paidUpFeeFlat) / (1 + paidUpFee));
      } else if (!processing && !collect) {
        result.priceBase = _math2.default.round(price);
      } else if (processing && collect) {
        result.priceBase = _math2.default.round((price - price * cardFee - paidUpFeeFlat - cardFeeFlat) / (1 + paidUpFee));
      } else if (processing && !collect) {
        result.priceBase = _math2.default.round(price - price * cardFee - cardFeeFlat);
      }

      result.paidupFee = _math2.default.round(result.priceBase * paidUpFee + paidUpFeeFlat);

      return result;
    }
  }, {
    key: 'bank',
    value: function bank(product, due) {
      var achFeeCap = product.processingFees.achFeeCap;
      var achFee = product.processingFees.achFee / 100;
      var achFeeFlat = product.processingFees.achFeeFlat;
      var paidUpFee = product.collectionFees.fee / 100;
      var paidUpFeeFlat = product.collectionFees.feeFlat;
      var price = due.amount;
      var collect = product.payFees.collect;
      var processing = product.payFees.processing;

      var result = {
        priceBase: 0,
        paidupFee: 0
      };

      if (!processing && collect) {
        result.priceBase = _math2.default.round((price - paidUpFeeFlat) / (1 + paidUpFee));
      } else if (!processing && !collect) {
        result.priceBase = _math2.default.round(price);
      } else if (processing && collect) {
        if (price <= achFeeCap / achFee) {
          result.priceBase = _math2.default.round((price - price * achFee - paidUpFeeFlat - achFeeFlat) / (1 + paidUpFee));
        } else {
          result.priceBase = _math2.default.round((price - achFeeCap - paidUpFeeFlat) / (1 + paidUpFee));
        }
      } else if (processing && !collect) {
        if (price <= achFeeCap / achFee) {
          result.priceBase = _math2.default.round(price - price * achFee - achFeeFlat);
        } else {
          result.priceBase = _math2.default.round(price - achFeeCap - achFeeFlat);
        }
      }

      result.paidupFee = _math2.default.round(result.priceBase * paidUpFee + paidUpFeeFlat);
    }
  }]);

  return Calculations;
}();

exports.default = Calculations;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathjs = __webpack_require__(13);

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Math = function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: 'round',
    value: function round(num) {
      return _mathjs2.default.round(num, 2);
    }
  }]);

  return Math;
}();

exports.default = Math;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stripe = __webpack_require__(15);

var _stripe2 = _interopRequireDefault(_stripe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stripe = function () {
  function Stripe(sk) {
    _classCallCheck(this, Stripe);

    this.stripe = (0, _stripe2.default)(sk);
  }

  _createClass(Stripe, [{
    key: 'createConnectAccount',
    value: function createConnectAccount(payload) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.stripe.accounts.create(payload, function (err, account) {
          if (err) return reject(err);
          resolve(account);
        });
      });
    }
  }]);

  return Stripe;
}();

exports.default = Stripe;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = __webpack_require__(17);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _asyncLock = __webpack_require__(18);

var _asyncLock2 = _interopRequireDefault(_asyncLock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lock = new _asyncLock2.default();
var lambda = void 0;
var options = void 0;

var Sequence = function () {
  function Sequence() {
    _classCallCheck(this, Sequence);
  }

  _createClass(Sequence, null, [{
    key: 'setConfig',
    value: function setConfig(params) {
      var region = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'us-east-1';
      var apiVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '2015-03-31';

      options = params;
      lambda = new _awsSdk2.default.Lambda({ region: region, apiVersion: apiVersion });
    }
  }, {
    key: 'next',
    value: function next(key) {
      var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var opt = {
        FunctionName: options.functionName,
        InvocationType: 'RequestResponse',
        LogType: 'None',
        Payload: JSON.stringify({
          key: key,
          db: options.db,
          host: options.host,
          port: options.port,
          qty: qty
        })
      };
      return new Promise(function (resolve, reject) {
        lock.acquire(key, function (done) {
          lambda.invoke(opt, function (error, data) {
            if (error) return done(error);
            done(null, JSON.parse(data.Payload));
          });
        }, function (err, ret) {
          if (err) {
            reject(err);
          } else {
            resolve(ret);
          }
        });
      });
    }
  }]);

  return Sequence;
}();

exports.default = Sequence;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("async-lock");

/***/ })
/******/ ]);
});
//# sourceMappingURL=library.js.map