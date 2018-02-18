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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _logging = __webpack_require__(2);\n\nvar _logging2 = _interopRequireDefault(_logging);\n\nvar _pmx = __webpack_require__(3);\n\nvar _pmx2 = _interopRequireDefault(_pmx);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _ref = {},\n    metadata = _ref.metadata,\n    log = _ref.log;\n\n\nfunction localLog(type, msg) {\n  var plainMsg = JSON.stringify(msg);\n  if (type === 'info') {\n    console.info(plainMsg);\n  } else if (type === 'debug') {\n    console.debug(plainMsg);\n  } else if (type === 'warning') {\n    console.warn(plainMsg);\n  } else {\n    console.error(plainMsg);\n  }\n}\n\nfunction write(type, msg, notify) {\n  if (process.env.NODE_ENV === 'test') {\n    return;\n  }\n  var entry = log.entry(metadata, msg);\n  if (notify) {\n    _pmx2.default.notify(msg);\n  }\n  log[type](entry, function (err, apiResponse) {\n    if (err) {\n      console.error('Error: ', err);\n      console.error(type + ': ', JSON.stringify(msg));\n    }\n  });\n  if (process.env.NODE_ENV === 'local') {\n    localLog(type, msg);\n  }\n}\n\nvar Logger = function () {\n  function Logger() {\n    _classCallCheck(this, Logger);\n  }\n\n  _createClass(Logger, [{\n    key: 'config',\n    set: function set(config) {\n      metadata = config.logger.metadata;\n      if (process.env.NODE_ENV !== 'test') {\n        var logging = new _logging2.default({\n          projectId: config.logger.projectId\n        });\n        log = logging.log(config.logger.logName);\n      }\n    }\n  }], [{\n    key: 'info',\n    value: function info(msg) {\n      write('info', msg);\n    }\n  }, {\n    key: 'critical',\n    value: function critical(msg) {\n      write('critical', msg, true);\n    }\n  }, {\n    key: 'debug',\n    value: function debug(msg) {\n      write('debug', msg);\n    }\n  }, {\n    key: 'emergency',\n    value: function emergency(msg) {\n      write('emergency', msg, true);\n    }\n  }, {\n    key: 'error',\n    value: function error(msg) {\n      write('error', msg, true);\n    }\n  }, {\n    key: 'notice',\n    value: function notice(msg) {\n      write('notice', msg);\n    }\n  }, {\n    key: 'warning',\n    value: function warning(msg) {\n      write('warning', msg);\n    }\n  }]);\n\n  return Logger;\n}();\n\nexports.default = Logger;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/logger.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/logger.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Calculations = exports.auth = exports.HandlerResponse = exports.Ncryp = exports.Logger = undefined;\n\nvar _logger = __webpack_require__(0);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _ncryp = __webpack_require__(4);\n\nvar _ncryp2 = _interopRequireDefault(_ncryp);\n\nvar _handlerResponse = __webpack_require__(6);\n\nvar _handlerResponse2 = _interopRequireDefault(_handlerResponse);\n\nvar _auth = __webpack_require__(7);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _calculations = __webpack_require__(11);\n\nvar _calculations2 = _interopRequireDefault(_calculations);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Logger = _logger2.default;\nexports.Ncryp = _ncryp2.default;\nexports.HandlerResponse = _handlerResponse2.default;\nexports.auth = _auth2.default;\nexports.Calculations = _calculations2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"@google-cloud/logging\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"@google-cloud/logging\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22@google-cloud/logging%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"pmx\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"pmx\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22pmx%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _blind = __webpack_require__(5);\n\nvar _blind2 = _interopRequireDefault(_blind);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar config = void 0;\n\nvar _class = function () {\n  function _class() {\n    _classCallCheck(this, _class);\n  }\n\n  _createClass(_class, [{\n    key: 'config',\n    set: function set(conf) {\n      config = conf;\n    }\n  }], [{\n    key: 'encryptField',\n    value: function encryptField(value) {\n      var encrypted = new _blind2.default({ encryptKey: config.encryptKey }).encrypt(value);\n      return encrypted;\n    }\n  }, {\n    key: 'decryptField',\n    value: function decryptField(encryptedValue) {\n      var decrypted = new _blind2.default({ encryptKey: config.encryptKey }).decrypt(encryptedValue);\n      return decrypted;\n    }\n  }]);\n\n  return _class;\n}();\n\nexports.default = _class;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/ncryp.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/ncryp.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"blind\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"blind\"\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22blind%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _logger = __webpack_require__(0);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HandlerResponse = function () {\n  function HandlerResponse() {\n    _classCallCheck(this, HandlerResponse);\n  }\n\n  _createClass(HandlerResponse, null, [{\n    key: 'send',\n    value: function send(response, msg) {\n      return this.response.status(200).json(msg);\n    }\n  }, {\n    key: 'error',\n    value: function error(response, msg, code) {\n      _logger2.default.error({ code: code, resason: msg });\n      return this.response.status(code || 500).json(msg);\n    }\n  }]);\n\n  return HandlerResponse;\n}();\n\nexports.default = HandlerResponse;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/handlerResponse.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/handlerResponse.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setCredential = setCredential;\nexports.revoke = revoke;\nexports.validate = validate;\n\nvar _redis = __webpack_require__(8);\n\nvar _redis2 = _interopRequireDefault(_redis);\n\nvar _jsonwebtoken = __webpack_require__(10);\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Attaches the user object to the request if authenticated\n * Otherwise returns 403\n */\n\n// import config from '@/config/environment'\nfunction serverTokenAuthenticated(req) {\n  var token = void 0;\n  // allow access_token to be passed through query parameter as well\n  if (req.headers.authorization) {\n    token = req.headers.authorization.split(' ')[1];\n  } else if (req.query && req.query.hasOwnProperty('token')) {\n    token = req.query.token;\n  } else if (req.body && req.body.token) {\n    token = req.body.token;\n  } else if (req.query && req.query.hasOwnProperty('access_token')) {\n    token = req.query.token;\n  }\n  return token;\n}\n\nvar secret = void 0;\n\nfunction setCredential(credential) {\n  secret = credential;\n}\n\nfunction revoke(req, res, next) {\n  if (!secret) {\n    throw new Error('first must set cretendials, use fn setCredential');\n  }\n  var token = serverTokenAuthenticated(req);\n  if (!token) {\n    return res.sendStatus(401);\n  }\n  var decoded = _jsonwebtoken2.default.decode(token);\n  if (decoded) {\n    _redis2.default.del(decoded.user.email);\n  }\n  next();\n}\n\nfunction validate(req, res, next) {\n  if (!secret) {\n    throw new Error('first must set cretendials, use fn setCredential');\n  }\n  var token = serverTokenAuthenticated(req);\n  if (!token) {\n    return res.sendStatus(401);\n  }\n  _jsonwebtoken2.default.verify(token, secret, function (error, decoded) {\n    if (error) {\n      return res.status(500).json({ error: error, message: 'invalid token' });\n    }\n    _redis2.default.get(decoded.user.email).then(function (value) {\n      if (token !== value) return res.sendStatus(401);\n      req.user = decoded.user;\n      next();\n    }).catch(function (reason) {\n      res.sendStatus(500).json(reason);\n    });\n  });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/auth.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _redis = __webpack_require__(9);\n\nvar _redis2 = _interopRequireDefault(_redis);\n\nvar _logger = __webpack_require__(0);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Redis = function () {\n  function Redis(config) {\n    _classCallCheck(this, Redis);\n\n    this.client = _redis2.default.createClient(config.redis.port, config.redis.host);\n    this.client.on('connect', function () {\n      _logger2.default.info('connected to redis');\n    });\n  }\n\n  _createClass(Redis, [{\n    key: 'set',\n    value: function set(key, value) {\n      var _this = this;\n\n      var expiration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 86400;\n\n      return new Promise(function (resolve, reject) {\n        _this.client.set(key, value, function (err, reply) {\n          if (err) {\n            reject(err);\n          }\n          _this.client.expire(key, expiration);\n          resolve(reply);\n        });\n      });\n    }\n  }, {\n    key: 'get',\n    value: function get(key) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        _this2.client.get(key, function (err, reply) {\n          if (err) {\n            reject(err);\n          }\n          resolve(reply);\n        });\n      });\n    }\n  }, {\n    key: 'del',\n    value: function del(key) {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        _this3.client.del(key, function (err, reply) {\n          if (err) {\n            reject(err);\n          }\n          resolve(reply);\n        });\n      });\n    }\n  }]);\n\n  return Redis;\n}();\n\nexports.default = Redis;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/redis.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/redis.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redis\"\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"jsonwebtoken\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _math = __webpack_require__(12);\n\nvar _math2 = _interopRequireDefault(_math);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Calculations = function () {\n  function Calculations() {\n    _classCallCheck(this, Calculations);\n  }\n\n  _createClass(Calculations, null, [{\n    key: 'card',\n    value: function card(product, due) {\n      var cardFee = product.processingFees.cardFee / 100;\n      var cardFeeFlat = product.processingFees.cardFeeFlat;\n      var paidUpFee = product.collectionFees.fee / 100;\n      var paidUpFeeFlat = product.collectionFees.feeFlat;\n      var price = due.amount;\n      var processing = product.payFees.processing;\n      var collect = product.payFees.collect;\n\n      var result = {\n        paidupFee: 0,\n        priceBase: 0\n      };\n\n      if (!processing && collect) {\n        result.priceBase = _math2.default.round((price - paidUpFeeFlat) / (1 + paidUpFee));\n      } else if (!processing && !collect) {\n        result.priceBase = _math2.default.round(price);\n      } else if (processing && collect) {\n        result.priceBase = _math2.default.round((price - price * cardFee - paidUpFeeFlat - cardFeeFlat) / (1 + paidUpFee));\n      } else if (processing && !collect) {\n        result.priceBase = _math2.default.round(price - price * cardFee - cardFeeFlat);\n      }\n\n      result.paidupFee = _math2.default.round(result.priceBase * paidUpFee + paidUpFeeFlat);\n\n      return result;\n    }\n  }, {\n    key: 'bank',\n    value: function bank(product, due) {\n      var achFeeCap = product.processingFees.achFeeCap;\n      var achFee = product.processingFees.achFee / 100;\n      var achFeeFlat = product.processingFees.achFeeFlat;\n      var paidUpFee = product.collectionFees.fee / 100;\n      var paidUpFeeFlat = product.collectionFees.feeFlat;\n      var price = due.amount;\n      var collect = product.payFees.collect;\n      var processing = product.payFees.processing;\n\n      var result = {\n        priceBase: 0,\n        paidupFee: 0\n      };\n\n      if (!processing && collect) {\n        result.priceBase = _math2.default.round((price - paidUpFeeFlat) / (1 + paidUpFee));\n      } else if (!processing && !collect) {\n        result.priceBase = _math2.default.round(price);\n      } else if (processing && collect) {\n        if (price <= achFeeCap / achFee) {\n          result.priceBase = _math2.default.round((price - price * achFee - paidUpFeeFlat - achFeeFlat) / (1 + paidUpFee));\n        } else {\n          result.priceBase = _math2.default.round((price - achFeeCap - paidUpFeeFlat) / (1 + paidUpFee));\n        }\n      } else if (processing && !collect) {\n        if (price <= achFeeCap / achFee) {\n          result.priceBase = _math2.default.round(price - price * achFee - achFeeFlat);\n        } else {\n          result.priceBase = _math2.default.round(price - achFeeCap - achFeeFlat);\n        }\n      }\n\n      result.paidupFee = _math2.default.round(result.priceBase * paidUpFee + paidUpFeeFlat);\n    }\n  }]);\n\n  return Calculations;\n}();\n\nexports.default = Calculations;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/calculations.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/calculations.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mathjs = __webpack_require__(13);\n\nvar _mathjs2 = _interopRequireDefault(_mathjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Math = function () {\n  function Math() {\n    _classCallCheck(this, Math);\n  }\n\n  _createClass(Math, null, [{\n    key: 'round',\n    value: function round(num) {\n      return _mathjs2.default.round(num, 2);\n    }\n  }]);\n\n  return Math;\n}();\n\nexports.default = Math;\nmodule.exports = exports['default'];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/math.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"mathjs\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"mathjs\"\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22mathjs%22?");

/***/ })
/******/ ]);
});