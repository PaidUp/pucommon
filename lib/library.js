(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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

  _createClass(Logger, [{
    key: 'config',
    set: function set(config) {
      metadata = config.logger.metadata;
      if (process.env.NODE_ENV !== 'test') {
        var logging = new _logging2.default({
          projectId: config.logger.projectId
        });
        log = logging.log(config.logger.logName);
      }
    }
  }], [{
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
exports.Calculations = exports.auth = exports.HandlerResponse = exports.Ncryp = exports.Logger = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logger = _logger2.default;
exports.Ncryp = _ncryp2.default;
exports.HandlerResponse = _handlerResponse2.default;
exports.auth = _auth2.default;
exports.Calculations = _calculations2.default;

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

var config = void 0;

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'config',
    set: function set(conf) {
      config = conf;
    }
  }], [{
    key: 'encryptField',
    value: function encryptField(value) {
      var encrypted = new _blind2.default({ encryptKey: config.encryptKey }).encrypt(value);
      return encrypted;
    }
  }, {
    key: 'decryptField',
    value: function decryptField(encryptedValue) {
      var decrypted = new _blind2.default({ encryptKey: config.encryptKey }).decrypt(encryptedValue);
      return decrypted;
    }
  }]);

  return _class;
}();

exports.default = _class;
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
      return this.response.status(200).json(msg);
    }
  }, {
    key: 'error',
    value: function error(response, msg, code) {
      _logger2.default.error({ code: code, resason: msg });
      return this.response.status(code || 500).json(msg);
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
exports.setCredential = setCredential;
exports.revoke = revoke;
exports.validate = validate;

var _redis = __webpack_require__(8);

var _redis2 = _interopRequireDefault(_redis);

var _jsonwebtoken = __webpack_require__(10);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */

// import config from '@/config/environment'
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

function setCredential(credential) {
  secret = credential;
}

function revoke(req, res, next) {
  if (!secret) {
    throw new Error('first must set cretendials, use fn setCredential');
  }
  var token = serverTokenAuthenticated(req);
  if (!token) {
    return res.sendStatus(401);
  }
  var decoded = _jsonwebtoken2.default.decode(token);
  if (decoded) {
    _redis2.default.del(decoded.user.email);
  }
  next();
}

function validate(req, res, next) {
  if (!secret) {
    throw new Error('first must set cretendials, use fn setCredential');
  }
  var token = serverTokenAuthenticated(req);
  if (!token) {
    return res.sendStatus(401);
  }
  _jsonwebtoken2.default.verify(token, secret, function (error, decoded) {
    if (error) {
      return res.status(500).json({ error: error, message: 'invalid token' });
    }
    _redis2.default.get(decoded.user.email).then(function (value) {
      if (token !== value) return res.sendStatus(401);
      req.user = decoded.user;
      next();
    }).catch(function (reason) {
      res.sendStatus(500).json(reason);
    });
  });
}

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

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redis = function () {
  function Redis(config) {
    _classCallCheck(this, Redis);

    this.client = _redis2.default.createClient(config.redis.port, config.redis.host);
    this.client.on('connect', function () {
      _logger2.default.info('connected to redis');
    });
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

/***/ })
/******/ ])));
//# sourceMappingURL=library.js.map