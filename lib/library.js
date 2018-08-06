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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _logging = __webpack_require__(4);

var _logging2 = _interopRequireDefault(_logging);

var _pmx = __webpack_require__(5);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathjs = __webpack_require__(14);

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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = exports.Math = exports.combinedMiddleware = exports.S3 = exports.Sequence = exports.Calculations = exports.auth = exports.HandlerResponse = exports.Ncryp = exports.Logger = undefined;

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _ncryp = __webpack_require__(6);

var _ncryp2 = _interopRequireDefault(_ncryp);

var _handlerResponse = __webpack_require__(8);

var _handlerResponse2 = _interopRequireDefault(_handlerResponse);

var _auth = __webpack_require__(9);

var _auth2 = _interopRequireDefault(_auth);

var _calculations = __webpack_require__(13);

var _calculations2 = _interopRequireDefault(_calculations);

var _sequence = __webpack_require__(15);

var _sequence2 = _interopRequireDefault(_sequence);

var _s = __webpack_require__(17);

var _s2 = _interopRequireDefault(_s);

var _combinedMiddleware = __webpack_require__(21);

var _combinedMiddleware2 = _interopRequireDefault(_combinedMiddleware);

var _math = __webpack_require__(1);

var _math2 = _interopRequireDefault(_math);

var _email = __webpack_require__(23);

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logger = _logger2.default;
exports.Ncryp = _ncryp2.default;
exports.HandlerResponse = _handlerResponse2.default;
exports.auth = _auth2.default;
exports.Calculations = _calculations2.default;
exports.Sequence = _sequence2.default;
exports.S3 = _s2.default;
exports.combinedMiddleware = _combinedMiddleware2.default;
exports.Math = _math2.default;
exports.Email = _email2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/logging");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("pmx");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _blind = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("blind");

/***/ }),
/* 8 */
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
      if (process.env.NODE_ENV === 'local') {
        console.log('ERROR: ' + JSON.stringify(msg));
      }
      _logger2.default.error({ code: code, resason: msg });
      return response.status(code || 500).json(msg);
    }
  }]);

  return HandlerResponse;
}();

exports.default = HandlerResponse;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import config from '@/config/environment'


var _redis = __webpack_require__(10);

var _redis2 = _interopRequireDefault(_redis);

var _jsonwebtoken = __webpack_require__(12);

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

var secret = void 0;
var redis = void 0;
var apiKey = void 0;

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, [{
    key: 'validate',
    value: function validate(req, res, next) {
      if (!secret) {
        throw new Error('first must set cretendials, use fn config');
      }
      if (!apiKey) {
        throw new Error('first must set cretendials, use fn config');
      }
      if (req.headers['x-api-key']) {
        if (req.headers['x-api-key'] === apiKey) {
          return next();
        }
        return res.sendStatus(401);
      }
      var token = serverTokenAuthenticated(req);
      if (!token) {
        return res.sendStatus(401);
      }
      _jsonwebtoken2.default.verify(token, secret, function (error, decoded) {
        if (error) {
          return res.status(401).json({ error: error, message: 'invalid token' });
        }
        redis.get(decoded.user.email).then(function (value) {
          if (token !== value) return res.sendStatus(401);
          req.user = decoded.user;
          next();
        }).catch(function (reason) {
          res.sendStatus(500).json(reason);
        });
      });
    }
  }, {
    key: 'revoke',
    value: function revoke(req, res, next) {
      if (!secret) {
        throw new Error('first must set cretendials, use fn setCredential');
      }
      var token = serverTokenAuthenticated(req);
      if (!token) {
        return res.sendStatus(401);
      }
      var decoded = _jsonwebtoken2.default.decode(token);
      if (decoded) {
        redis.del(decoded.user.email);
      }
      next();
    }
  }, {
    key: 'token',
    value: function token(user, rembemberMe) {
      var expireTime = 60 * 60;
      if (rembemberMe) {
        expireTime = expireTime * 60;
      }
      var token = _jsonwebtoken2.default.sign({ user: user }, secret, {
        expiresIn: expireTime
      });
      redis.set(user.email.toLowerCase(), token, expireTime);
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
          key = _ref.key;

      secret = credential;
      redis = new _redis2.default(port, host);
      apiKey = key;
    }
  }]);

  return Auth;
}();

var auth = new Auth();

exports.default = auth;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redis = __webpack_require__(11);

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redis = function () {
  function Redis(port, host) {
    _classCallCheck(this, Redis);

    this.client = _redis2.default.createClient({
      port: port,
      host: host,
      retry_strategy: function retry_strategy(options) {
        if (options.error && options.error.code === 'ECONNREFUSED') {
          // End reconnecting on a specific error and flush all commands with
          // a individual error
          return new Error('The server refused the connection');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          // End reconnecting after a specific timeout and flush all commands
          // with a individual error
          return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
          // End reconnecting with built in error
          return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
      }
    });
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
            return reject(err);
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
            return reject(err);
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
            return reject(err);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(1);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = __webpack_require__(2);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _asyncLock = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("async-lock");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = __webpack_require__(2);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _multer = __webpack_require__(18);

var _multer2 = _interopRequireDefault(_multer);

var _multerS = __webpack_require__(19);

var _multerS2 = _interopRequireDefault(_multerS);

var _crypto = __webpack_require__(20);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function randomValueBase64() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

  return _crypto2.default.randomBytes(Math.ceil(len * 3 / 4)).toString('base64') // convert to base64 format
  .slice(0, len) // return required number of characters
  .replace(/\+/g, '0') // replace '+' with '0'
  .replace(/\//g, '0'); // replace '/' with '0'
}

var S3 = function () {
  function S3() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accessKeyId = _ref.accessKeyId,
        secretAccessKey = _ref.secretAccessKey,
        _ref$region = _ref.region,
        region = _ref$region === undefined ? 'us-east-1' : _ref$region,
        bucket = _ref.bucket,
        directory = _ref.directory,
        setOriginalName = _ref.setOriginalName,
        isPublic = _ref.isPublic;

    _classCallCheck(this, S3);

    this.multer = (0, _multer2.default)({
      storage: (0, _multerS2.default)({
        s3: new _awsSdk2.default.S3({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, region: region }),
        bucket: bucket,
        acl: isPublic ? 'public-read' : 'private',
        metadata: function metadata(req, file, cb) {
          cb(null, { fieldName: file.fieldname });
        },
        key: function key(req, file, cb) {
          var dir = directory ? directory + '/' : '';
          var name = setOriginalName ? file.originalname : randomValueBase64() + '_' + randomValueBase64() + '_' + randomValueBase64() + '_' + randomValueBase64();
          cb(null, dir + name);
        }
      })
    });
  }

  _createClass(S3, [{
    key: 'upload',
    get: function get() {
      return this.multer;
    }
  }]);

  return S3;
}();

exports.default = S3;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("multer-s3");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combinedMiddleware;

var _connect = __webpack_require__(22);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combinedMiddleware(arrayMethods) {
  return function () {
    var chain = (0, _connect2.default)();
    arrayMethods.forEach(function (middleware) {
      chain.use(middleware);
    });
    return chain;
  }();
}
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("connect");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mail = __webpack_require__(24);

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Email = function () {
  function Email(apiKey, fromName, fromEmail) {
    _classCallCheck(this, Email);

    this.fromName = fromName;
    this.fromEmail = fromEmail;
    _mail2.default.setApiKey(apiKey);
    _mail2.default.setSubstitutionWrappers('{{', '}}');
  }

  _createClass(Email, [{
    key: 'sendTemplate',
    value: function sendTemplate(toName, toEmail, templateId, substitutions) {
      var msg = {
        personalizations: [{
          to: [{
            email: toEmail,
            name: toName
          }],
          // 'subject': subject,
          substitutions: substitutions
        }],
        from: {
          email: this.fromEmail,
          name: this.name
        },
        template_id: templateId

      };
      _mail2.default.send(msg);
    }
  }]);

  return Email;
}();

exports.default = Email;
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ })
/******/ ]);
});
//# sourceMappingURL=library.js.map