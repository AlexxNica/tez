(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tez"] = factory();
	else
		root["Tez"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT = typeof window !== "undefined" ? window :  true ? exports : {};
var MAX_WORKER_THREAD = 2;
var CURRENT_WORKER_THREAD = 0;
var LIST_WORKER_THREAD = [];
var ARRAY_SLICE = [].slice;
var FUNC_STR = Function.toString;
var WORKER_SUPPORT = ROOT.Worker !== undefined;

exports.MAX_WORKER_THREAD = MAX_WORKER_THREAD;
exports.CURRENT_WORKER_THREAD = CURRENT_WORKER_THREAD;
exports.LIST_WORKER_THREAD = LIST_WORKER_THREAD;
exports.ARRAY_SLICE = ARRAY_SLICE;
exports.FUNC_STR = FUNC_STR;
exports.WORKER_SUPPORT = WORKER_SUPPORT;
exports.ROOT = ROOT;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PluginManager = {};

exports.PluginManager = PluginManager;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var makeNode = function makeNode(opts) {
	if (!opts || !opts.tag) return;
	var tag = opts.tag,
	    css = opts.css,
	    content = opts.content,
	    attr = opts.attr;

	var _tag = document.createElement(tag);
	if (css) {
		_tag.style.cssText = css;
	}
	if (content) {
		_tag.innerHTML = content;
	}
	if (attr) {
		for (var p in attr) {
			_tag.setAttribute(p, attr[p]);
		}
	}
	return _tag;
};

var createElement = makeNode;

exports.createElement = createElement;
exports.makeNode = makeNode;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.attrs = attrs;
function attrs(a) {
	if (!a) return {};
	var _a = {};
	var attributes = a.attributes;

	for (var i = 0, atr, len = attributes.length; i < len; i++) {
		atr = attributes[i];
		_a[atr.name] = atr.value;
	}
	return JSON.stringify(_a);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var DOMManager = function DOMManager(node) {
	this.node = node;
	return this;
};
DOMManager.prototype = {
	getNode: function getNode() {
		return this.node;
	},
	logic: function logic(fn) {
		this._logic = new Tez.LogicManager(fn);
		return this;
	},
	logicArg: function logicArg(arg) {
		this._logic.run.call(this._logic, arg);
		return this;
	},
	logicMsg: function logicMsg(fn) {
		this._logic && this._logic.onMessage(fn.call(this, this.node));
		return this;
	},
	getLogic: function getLogic() {
		return this._logic;
	},
	composite: function composite(fn) {
		this._composite = new Tez.CompositeManager(fn.bind(this));
		return this;
	},
	compositeArg: function compositeArg(arg) {
		this._composite.run.call(this._composite, arg);
		return this;
	},
	compositeMsg: function compositeMsg(fn) {
		this._composite && this._composite.onMessage(fn.call(this, this.node));
		return this;
	},
	getComposite: function getComposite() {
		return this._composite;
	}
};

exports.default = DOMManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DiffManager = function DiffManager(a, b) {
	if (a && b && !a.nodeType && !b.nodeType && (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && (typeof b === "undefined" ? "undefined" : _typeof(b)) === "object") {
		var _keys = (b && b.push && b.slice ? b : b && Object.keys(b)) || [];
		var _keysA = (a && a.push && a.slice ? a : a && Object.keys(a)) || [];
		var i = 1;
		var _diff = {};
		var _len = _keys && _keys.length;
		var _extract = ((a && _keys.length || 0) > (b && _keysA.length || 0) ? b : a) || _diff;
		if (_keys.length || _keysA.length) {
			for (var p in _extract) {
				if (DiffManager(a[p], b[p])) {
					_diff[p] = [a[p], b[p]];
					i++;
				}
			}
		}
		return Object.keys(_diff).length ? _diff : i > 1;
	} else {
		return a !== b && [a, b];
	}
};

exports.default = DiffManager;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _configs = __webpack_require__(0);

var _setWorker = __webpack_require__(20);

var _setWorker2 = _interopRequireDefault(_setWorker);

var _setRaf = __webpack_require__(19);

var _setRaf2 = _interopRequireDefault(_setRaf);

var _setFn = __webpack_require__(18);

var _setFn2 = _interopRequireDefault(_setFn);

var _PluginManager = __webpack_require__(1);

var _PluginManager2 = _interopRequireDefault(_PluginManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FunctionManager = function FunctionManager(fnc, mode) {
	this._mode = mode === "Worker" && WORKER_SUPPORT ? new _setWorker2.default(true) : mode === "raf" ? new _setRaf2.default(true) : new _setFn2.default(true);
	this.m = this._mode.call(fnc);
	return this;
};

FunctionManager.prototype = {
	onMessage: function onMessage(fn) {
		var c = this;
		this.m.done(function (e) {
			return fn.call(c.m, e.data);
		});
		return this;
	},
	plugin: function plugin(plug) {
		if (typeof plug === "string" && _PluginManager2.default[plug] !== undefined && _PluginManager2.default[plug].fnMgr !== undefined) {
			this.m = _PluginManager2.default[plug].fnMgr.call(this, this.m);
		}
		return this;
	},
	get: function get() {
		return this.m.get();
	},
	run: function run(a) {
		var _m;

		var args = a !== undefined ? _configs.ARRAY_SLICE.call(arguments) : [];
		if (!args.length) return this;
		(_m = this.m).run.apply(_m, _toConsumableArray(args));
		return this;
	}
};
exports.default = FunctionManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var CompositeManager = function CompositeManager(draw, args) {
	return new Tez.FunctionManager(draw, "raf").run(args);
};
var LogicManager = function LogicManager(fn, args) {
	return new Tez.FunctionManager(fn, "Worker").run(args);
};
var CallManager = function CallManager(fn, args) {
	return new Tez.FunctionManager(fn).run(args);
};

exports.CompositeManager = CompositeManager;
exports.LogicManager = LogicManager;
exports.CallManager = CallManager;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var TweenManager = function TweenManager(a, b) {
	var _isFunc = typeof b === "function";
	var _isArray = b && b.push && b.slice;
	var _isObj = !_isArray && (typeof b === "undefined" ? "undefined" : _typeof(b)) === "object";
	var _isNum = !_isArray && !_isObj && typeof b === "number";
	var _isStr = !_isNum && typeof b === "string";
	var _obj = {};
	var _arr = [];
	var _num = 0;
	return function (t) {
		if (_isFunc) {
			return b(t);
		} else if (_isArray) {
			return _arr = b.map(function (v2, i) {
				if (typeof v2 === "number") {
					return a[i] + (v2 - a[i]) * t;
				} else if (typeof v2 === "function") {
					return v2(t);
				}
			});
		} else if (_isObj) {
			for (var p in b) {
				if (typeof b[p] === "number") {
					_obj[p] = a[p] + (b[p] - a[p]) * t;
				} else if (typeof b[p] === "function") {
					_obj[p] = b[p](t);
				}
			}
			return _obj;
		} else if (_isNum) {
			return a + (b - a) * t;
		}
	};
};

exports.default = TweenManager;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _attrs2 = __webpack_require__(3);

var _str2node = __webpack_require__(21);

var _pathDiff = __webpack_require__(17);

var _makeNode2 = __webpack_require__(2);

var _getItem2 = __webpack_require__(16);

var domClass = function domClass(node, vars) {
	this._vars = vars = vars || {};
	if (vars.quickRender === undefined) {
		vars.quickRender = true;
	}
	var _opts = this._opt = {};
	this._node = typeof node === "string" ? document.querySelector(node) : node.length && node[0].nodeType ? node[0] : node;
	this._vnode = this._node.cloneNode(true);
	this._nodeElem = this._vnode;
	this._quickRender = vars.quickRender;
	this._appendStore = [];
	this.props = {};
	this._listOfNodes = [];
	if (vars.styling === undefined) {
		vars.styling = this._vnode.style.cssText;
	}
	if (vars.attrs === undefined) {
		vars.attrs = (0, _attrs2.attrs)(this._vnode);
	}
	if (vars.content === undefined) {
		vars.content = this._vnode.innerHTML;
	}
	return this.render();
};
domClass.prototype = {
	createElement: function createElement(opts) {
		var item = void 0;
		var appendStore = this._appendStore;
		var len = appendStore.length;
		appendStore[len] = {
			real: 'append',
			virtual: item = (0, _makeNode2._makeNode)(opts),
			diff: false,
			index: len
		};
		return item;
	},
	setProps: function setProps(props) {
		for (var p in props) {
			this.props[p] = props[p];
		}
		return this;
	},
	setEvent: function setEvent(find, eventName, eventFunc) {
		var __self__ = this;

		var __eventFunc__ = function __eventFunc__(e) {
			eventFunc.call(__self__, this, e);
		};

		if (eventFunc && find === null) {
			this._node.addEventListener(eventName, __eventFunc__);
		} else if (eventFunc) {
			find = this._node.querySelector(find);
			find.addEventListener(eventName, __eventFunc__);
		}
		return this;
	},
	createFunction: function createFunction(fn) {
		fn.call(this);
		return this;
	},
	render: function render() {
		var vars = this._vars;
		var node = this._node;
		var vnode = this._vnode;
		var append = this._appendStore;
		var _listOfNodes = this._listOfNodes;
		var _vattrs = vars.attrs;
		var _attrs = (0, _attrs2.attrs)(node);
		var _diff = void 0;
		if (_attrs !== _vattrs) {
			_diff = JSON.parse(_vattrs);
			for (var p in _diff) {
				node.setAttribute(p, _diff[p]);
			}
			vars.attrs = (0, _attrs2.attrs)(vnode);
		}
		_vattrs = vars.styling;
		_attrs = node.style.cssText;
		if (_vattrs !== _attrs) {
			this._node.style.cssText = _vattrs;
			vars.styling = node.style.cssText;
		}
		_vattrs = vars.content;
		_attrs = node.innerHTML;
		for (var i = 0, len = _listOfNodes.length; i < len; i++) {
			var idx = append.length;
			append[idx] = {
				virtual: _listOfNodes[i],
				real: 'append',
				diff: false,
				index: idx
			};
		}
		if (append.length || _attrs !== _vattrs) {
			var _childs = (0, _str2node._parseString)(_vattrs);
			var _childs2 = (0, _str2node._parseString)(_attrs);
			(0, _pathDiff.replaceChildrenByDiff)(node, vnode, _childs, _childs2, append);
			vars.content = vnode.innerHTML;
		}
		return this;
	},
	setNode: function setNode(node) {
		this._listOfNodes.push(node);
		return this._quickRender ? this.render() : this;
	},
	setAttrs: function setAttrs(_attrs) {
		var attr = void 0;
		var nattr = {};
		var _attr = JSON.parse(this._vars.attrs);
		for (var p in _attr) {
			if (_attr[p] !== undefined) {
				nattr[p] = _attr[p];
			}
		}
		for (var p in _attrs) {
			if (_attrs[p] !== undefined) {
				nattr[p] = _attrs[p];
			}
		}
		this._vars.attrs = JSON.stringify(nattr);
		return this._quickRender ? this.render() : this;
	},
	setStyling: function setStyling(cssText) {
		var styling = this._vars.styling;
		var style = this._vnode.style;
		style.cssText = styling;
		for (var p in cssText) {
			style[p] = cssText[p];
		}
		this._vars.styling = style.cssText;
		return this._quickRender ? this.render() : this;
	},
	setContent: function setContent(contents) {
		var content = this._vars.content;
		if (!contents) {
			return this._quickRender ? this.render() : this;
		}
		contents = typeof contents === "string" ? contents : contents.nodeType ? contents.outerHTML : contents;
		var rel = contents.includes("=") ? contents.charAt(0) === "+" ? 1 : contents.charAt(0) === "-" ? -1 : 0 : 0;

		if (rel === 0) {
			content = contents;
		} else if (rel === 1) {
			content += contents.substr(2);
		} else if (rel === -1) {
			var _getParsed = (0, _str2node._parseString)(contents.substr(2))[0];
			var _find = (0, _getItem2._getItem)(_getParsed, this._node);
			if (_find && _find.matched) {
				this._appendStore.push({
					virtual: _find.matched,
					real: 'append',
					remove: true
				});
			}
		}

		this._vars.content = content;
		return this._quickRender ? this.render() : this;
	}
};

exports.default = domClass;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var hashURL = function hashURL() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	this._prefix = opts.prefix || "!/#";
	this._hashTags = true;
	this._changed = false;
	return this;
};
hashURL.prototype = {
	getHash: function getHash(hash) {
		return this._prefix + hash;
	},
	getLocationHash: function getLocationHash() {
		return window.location.hash.substr(1);
	},
	getChanged: function getChanged() {
		return this._changed;
	},
	setHash: function setHash(hash) {
		if (this.getHash(hash) !== this.getLocationHash()) {
			window.location.hash = this.getHash(hash);
			this._changed = true;
		} else {
			this._changed = false;
		}
		return this;
	},
	set: function set(url) {
		return this.setHash(url);
	}
};
exports.default = hashURL;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getDecPow = __webpack_require__(15);

var _configs = __webpack_require__(0);

var _extend = __webpack_require__(14);

var tezClass = function tezClass(opts) {
	this.events = {};
	opts = (0, _extend.extend)(opts || {}, {
		lets: {},
		lets2: {},
		_lets: {},
		tweenable: {},
		state: 0,
		render: null
	});

	opts.setInitLets && opts.setInitLets.call(opts);
	opts.setTweenableLets && opts.setTweenableLets.call(opts);

	this.mountedNodes = [];

	this.opts = opts;

	this.lets = opts.lets;
	this.lets2 = opts.lets2;
	return this;
};

tezClass.prototype = {
	plugin: function plugin(plug) {
		if (typeof plug === "string" && Tez.PluginManager[plug] !== undefined && Tez.PluginManager[plug].tez !== undefined) {
			Tez.PluginManager[plug].tez.call(this, this.lets, this.opts);
		}
		return this;
	},
	apply: function apply() {
		var _this = this;

		var opts = this.opts;
		var lets = opts.lets,
		    lets2 = opts.lets2;

		var _lets = opts._lets;
		var _minVal = 0.001;
		var _maxVal = 1;
		this.mountedNodes.map(function (node, index) {
			var dom = new Tez.DOMManager(node);
			var now = Date.now();
			var render = opts.render,
			    tweenable = opts.tweenable;

			var round = tweenable.roundLets;
			var limitDec = tweenable.limitLetsDecimals;
			var start = tweenable && (typeof tweenable.startTime === "function" ? tweenable.startTime.call(_this, node, index) : tweenable.startTime) || 0;
			var dur = tweenable && (typeof tweenable.duration === "function" ? tweenable.duration.call(_this, node, index) : tweenable.duration) || 1000;
			var tween = Tez.TweenManager(lets, lets2);
			var diff = void 0;

			if (tweenable) {
				diff = Tez.DiffManager(lets, lets2);
				dom.composite(function (e) {
					if (!diff) return e.state;
					var elapsed = Math.max(0, Math.min((Date.now() - now - start) / dur, 1));
					var timeElapsed = elapsed;
					if (tweenable.curve) {
						elapsed = tweenable.curve(timeElapsed);
					}
					_lets = tween(elapsed);
					for (var p in _lets) {
						if (round && round[p]) {
							_lets[p] = typeof _lets[p] === "number" ? _lets[p] | 0 : _lets[p] !== undefined && _lets[p].push && _lets[p].slice ? _lets[p].map(Math.round) : _lets[p];
						} else if (limitDec && limitDec[p]) {
							(function () {
								var dv = (0, _getDecPow.getDecPow)(limitDec[p]);
								_lets[p] = typeof _lets[p] === "number" ? (_lets[p] * dv | 0) / dv : _lets[p] !== undefined && _lets[p].push && _lets[p].slice ? _lets[p].map(function (v) {
									return (v * dv | 0) / dv;
								}) : _lets[p];
							})();
						}
					}
					if (timeElapsed > _minVal) {
						render.call(_this, node, _lets, opts, index, elapsed);
					}
					return timeElapsed < _maxVal ? e.state : 0;
				}).compositeArg({
					state: opts.state || "RUNNING"
				});
			} else if (opts.initState) {
				render.call(_this, node, lets, opts, index, elapsed);
			}
		});
		return this;
	},
	render: function render(_lets, leaveLet) {
		var _this2 = this;

		var opts = this.opts;
		_lets = _lets || opts.lets;
		var dm = Tez.DiffManager(opts.lets, _lets);
		if (!dm) return this;
		this.mountedNodes.map(function (node, index) {
			opts.render.call(_this2, node, _lets || opts.lets, opts, index);
		});
		if (!leaveLet) {
			opts.lets = _lets;
		}
		return this;
	},
	mountNode: function mountNode(node) {
		node = _configs.ARRAY_SLICE.call(typeof node === "string" ? document.querySelectorAll(node) : node.length ? node : [node]);
		this.mountedNodes = this.mountedNodes.concat(node);
		return this;
	},
	nodeOn: function nodeOn(event, on) {
		var _this3 = this;

		this.mountedNodes.map(function (node) {
			_this3.node = node;
			node.addEventListener(event, function (e) {
				on.call(_this3, e);
			});
		});
		return this;
	},
	nodeOff: function nodeOff(event, off) {
		var _this4 = this;

		this.mountedNodes.map(function (node) {
			_this4.node = node;
			node.removeEventListener(event, function (e) {
				off.call(_this4, e);
			});
		});
		return this;
	},
	on: function on(event, callback, unshift) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event][unshift ? 'unshift' : 'push'](callback);
		return this;
	},
	off: function off(event, callback) {
		if (!this.events[event].length) {
			delete this.events[event];
		}
		var i = 0;
		while (i < this.events[event].length) {
			if (this.events[event][i] === callback) {
				this.events[event].splice(i, 1);
			} else {
				i++;
			}
		}
		return this;
	},
	dispatch: function dispatch(event) {
		var _this5 = this;

		var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		if (!this.events[event]) {
			return;
		}
		var opts = this.opts;

		this.events[event].map(function (event) {
			event.call(_this5, (0, _extend.extend)(custom, {
				opts: opts,
				timestamp: Date.now(),
				type: event,
				target: _this5
			}));
		});
		return this;
	}
};

exports.default = tezClass;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var URLComponent = function URLComponent() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	this.hash = new Tez.hashURL({
		prefix: opts.prefixURL
	});
	this.async = opts.async !== undefined ? opts.async : true;
	this.xhr = new Tez.XHR();
	this.loadRealLink = opts.loadRealLink !== undefined ? opts.loadRealLink : true;
	return this;
};
URLComponent.prototype = {
	request: function request(url, method, withCredentials) {
		this.hash.set(url);
		if (this.loadRealLink) {
			this.xhr.request(method || "GET", url, this.async);
			this.xhr.withCredentials(withCredentials);
			this.xhr.send();
		}
		return this;
	},
	then: function then(fn) {
		if (this.loadRealLink && this.hash.getChanged()) {
			var __self__ = this.xhr;
			var __self__hash__ = this.hash;
			var _eventFunc__ = void 0;
			this.xhr.on('load', _eventFunc__ = function __eventFunc__() {
				var args = ARRAY_SLICE.call(arguments);
				if (__self__hash__.getChanged()) {
					fn.apply(this, args);
					__self__.off('load', _eventFunc__);
				}
			});
		} else if (this.hash.getChanged()) {
			fn.call(this, {
				onlyURLChanged: true
			});
		}
		return this;
	}
};

exports.default = URLComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var XHR = function XHR() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	this._xhr = new XMLHttpRequest();
	var xhr = this;
	if (opts.load) {
		xhr.on('load', opts.load);
	}
	if (opts.url) {
		xhr.request(opts.method || "GET", opts.url, opts.async);
		xhr.send(opts.params);
	}
	if (opts.events) {
		opts.events.map(function (event) {
			xhr.on(event.name, event.callback);
		});
	}
	return this;
};
XHR.prototype = {
	on: function on(ev, fn) {
		this._xhr.addEventListener(ev, fn);
		return this;
	},
	withCredentials: function withCredentials(state) {
		this._xhr.withCredentials = state !== undefined ? state : false;
		return this;
	},
	off: function off(ev, fn) {
		this._xhr.removeEventListener(ev, fn);
		return this;
	},
	request: function request(method, url, async) {
		this._xhr.open(method, url, async);
		return this;
	},
	send: function send(params) {
		if (params) {
			this._xhr.send(params);
		} else {
			this._xhr.send();
		}
		return this;
	}
};

exports.default = XHR;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extend = extend;
function extend() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	for (var p in b) {
		if (a[p] === undefined && b[p] !== undefined) {
			a[p] = b[p];
		}
	}
	return a;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDecPow = getDecPow;
function getDecPow() {
  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return Math.pow(10, d);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._getItem = _getItem;

var _configs = __webpack_require__(0);

function _getItem(item, parent) {
	if (item.isEqualNode(parent)) {
		return item;
	}
	var childs = _configs.ARRAY_SLICE.call(parent.children);
	var i = 0;
	var _match = void 0;
	var _parentWhile = void 0;
	var _matchInsideWhile = void 0;
	if (childs.length) {
		while (i < childs.length) {
			if (childs[i] && childs[i].isEqualNode(item)) {
				_match = childs[i];
				_parentWhile = parent;
				break;
			} else if (_matchInsideWhile = _getItem(item, _parentWhile = childs[i])) {
				_match = _matchInsideWhile;
				break;
			}
			i++;
		}
	} else if (item.isEqualNode(parent)) {
		_match = parent;
	}
	if (_match) {
		return {
			matched: _match,
			matchParent: _parentWhile
		};
	}
	return null;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.replaceChildrenByDiff = replaceChildrenByDiff;

var _attrs3 = __webpack_require__(3);

function replaceChildrenByDiff(_attrs, _vattrs, _childs, _childs2, substore) {
	var _store = (substore || []).concat([]);
	var _attrs1 = (0, _attrs3.attrs)(_attrs);
	var _attrs2 = (0, _attrs3.attrs)(_vattrs);
	if (substore) {
		substore.splice(0, substore.length);
	}
	var i = 0;
	var _max = Math.max(_childs.length, _childs2.length);
	var item = void 0;
	var pi;
	var ni;
	var _tmp;
	var len = void 0;
	if (_max) {
		while (i < _max) {
			if (_childs[i] && !_childs2[i]) {
				_store.push({
					index: i,
					diff: false,
					virtual: _childs[i],
					real: 'append'
				});
			} else if (_childs2[i] && !_childs[i]) {
				_store.push({
					index: i,
					diff: false,
					virtual: 'append',
					real: _childs2[i]
				});
			} else if (_childs[i] && _childs[i].isEqualNode(_childs2[i])) {
				_store.push({
					index: i,
					diff: true,
					virtual: _childs[i],
					real: _childs2[i]
				});
			}
			i++;
		}
	}
	if (_store.length) {
		var a = 0;
		len = _store.length;
		while (a < len) {
			item = _store[a], i = item.index;
			var _tmp2 = void 0;
			var _pi = i - 1;
			var _ni = i + 1;
			var vr = item.virtual;
			var rr = item.real;
			if (!item.diff && rr === 'append') {
				_tmp2 = _childs2[_ni];
				if (_tmp2) {
					_attrs.insertBefore(vr, _tmp2);
				} else {
					_attrs.appendChild(vr);
				}
			} else if (!item.diff && vr === 'append') {
				rr.remove();
			} else if (item.diff) {
				_tmp2 = rr;
				replaceChildrenByDiff(rr, vr, vr.children, rr.children);
			}
			a++;
		}
	} else if (_attrs.innerHTML !== _vattrs.innerHTML) {
		_attrs.innerHTML = _vattrs.innerHTML;
	} else if (_attrs.style.cssText !== _vattrs.style.cssText) {
		_attrs.style.cssText = _vattrs.style.cssText;
	} else if (_attrs.tagName !== _vattrs.tagName) {
		_attrs.parentNode.replaceChild(_vattrs, _attrs);
	} else if (_attrs1 !== _attrs2) {
		var _diff = JSON.parse(_attrs);
		for (var p in _diff) {
			_attrs.setAttribute(p, _diff[p]);
		}
	}
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _configs = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setFn = function setFn() {
	this._fn = null;
	return this;
};
var p = setFn.prototype = {
	call: function call(fn) {
		this._fn = fn;
		return this;
	},
	get: function get() {
		return this._val;
	},
	done: function done(fn) {
		var _oldFn = this._fn;
		var curr = this;
		this._fn = function () {
			var args = _configs.ARRAY_SLICE.call(arguments);
			return fn.call(curr, {
				data: curr._val = _oldFn.apply(curr, args)
			});
		};
		return this;
	},
	run: function run(a) {
		var args = a !== undefined ? _configs.ARRAY_SLICE.call(arguments) : [];
		this._val = args.length ? this._fn.apply(this, _toConsumableArray(args)) : this._fn.call(this);
		return this;
	},
	close: function close() {
		this._fn = null;
		return this;
	}
};

exports.default = setFn;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _configs = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RAF_CALLS = [];

var RAF_UPDATE = function (win) {
	win.requestAnimationFrame = win.requestAnimationFrame || function (fn) {
		return win.setTimeout(fn, 50 / 3);
	};
	win.cancelAnimationFrame = win.cancelAnimationFrame || function (fn) {
		return win.clearTimeout(fn);
	};
	var _run = "RUNNING";
	var _tick = void 0;
	_tick = function update() {
		var i = 0;
		while (i < RAF_CALLS.length) {
			var raf = RAF_CALLS[i];
			if (raf.loop) {
				raf._val = raf.args ? raf.render.apply(raf, _toConsumableArray(raf.args)) : raf.render.call(raf);
				raf.loop = raf._val === _run;
			} else if (raf.run && !raf.rendered && !raf._destroy) {
				if (raf.args) {
					raf._val = raf.render.apply(raf, _toConsumableArray(raf.args));
				} else {
					raf._val = raf.render.call(raf);
				}
				if (raf._val === _run) {
					raf.loop = true;
				}
				raf.rendered = true;
			} else if (raf.run) {
				RAF_CALLS.splice(i, 1);
			}
			i++;
		}
		if (RAF_CALLS.length) {
			_tick = win.requestAnimationFrame(update);
		} else {
			win.cancelAnimationFrame(_tick);
		}
	};
	return {
		add: function add(item) {
			var _item = {
				_destroy: false,
				message: function message(last) {
					var old = this.render,
					    curr = this,
					    self = this.self;
					this.render = function () {
						return curr._val = last.call(curr, {
							data: curr._val = old.apply(curr, _configs.ARRAY_SLICE.call(arguments))
						});
					};
				},
				get: function get() {
					return this._val || this.args && this.args[0];
				},
				destroy: function destroy() {
					this._destroy = true;
				},
				args: null,
				rendered: false,
				render: item,
				run: false
			};
			RAF_CALLS.push(_item);
			win.requestAnimationFrame(_tick);
			return _item;
		},
		destroy: function destroy(item) {
			var match = [].concat(RAF_CALLS).filter(function (item2) {
				return item2.render === item;
			});
			if (!match) return;
			var i = RAF_CALLS.indexOf(match[0]);
			if (i > -1) {
				RAF_CALLS.splice(i, 1);
			}
		}
	};
}(_configs.ROOT);

var setRAF = function setRAF() {
	this._raf = null;
	return this;
};
var p = setRAF.prototype = {
	call: function call(fn) {
		this._raf = RAF_UPDATE.add(fn);
		this._raf.self = this;
		this._val = this._raf._val;
		return this;
	},
	get: function get() {
		return this._raf.get();
	},
	done: function done(fn) {
		this._raf.message(fn);
		this._val = this._raf._val;
		return this;
	},
	run: function run() {
		this._raf.args = _configs.ARRAY_SLICE.call(arguments);
		this._raf.run = true;
		this._val = this._raf._val;
		return this;
	},
	close: function close() {
		RAF_UPDATE.destroy(this._raf);
		return this;
	}
};

exports.default = setRAF;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _configs = __webpack_require__(0);

var setWorker = function setWorker(force) {
	this._force = force;
	this._worker = null;
	this._id = 0;
	return this;
};
if (_configs.WORKER_SUPPORT) {
	var p = setWorker.prototype = {
		createBlob: function createBlob(fn) {
			return new Worker(window.URL.createObjectURL(new Blob(['self.onmessage = function(wrk) {var f = ' + _configs.FUNC_STR.call(fn) + ';self.postMessage(f.apply(this, wrk.data));};'], {
				type: 'text/javascript'
			})));
		},
		call: function call(fn) {
			if (this._id >= _configs.MAX_WORKER_THREAD && this._force) {
				_configs.LIST_WORKER_THREAD.shift().close();
			}
			this._fnc = fn;
			this._worker = this.createBlob(fn);
			this._id++;
			_configs.LIST_WORKER_THREAD.push(this);
			return this;
		},
		get: function get() {
			return this._val;
		},
		done: function done(fn) {
			var curr = this;
			this._worker.addEventListener('message', function (e) {
				if (e.data === undefined) return;
				curr._val = fn.call(curr._worker, {
					data: e.data
				});
			});
		},
		run: function run() {
			var args = _configs.ARRAY_SLICE.call(arguments);
			this._worker.postMessage(args);
			this._val = args[0];
			return this;
		},
		close: function close() {
			this._worker && this._worker.destroy();
			return this;
		}
	};
}
exports.default = setWorker;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._parseString = _parseString;

var _configs = __webpack_require__(0);

var _tmpDiv = document.createElement("div");
function _parseString(str) {
	if (!str) {
		return [];
	};
	_tmpDiv.innerHTML = str;
	return _configs.ARRAY_SLICE.call(_tmpDiv.children);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tezClass = exports.URLComponent = exports.hashURL = exports.XHR = exports.domClass = exports.DOMManager = exports.TweenManager = exports.CallManager = exports.LogicManager = exports.CompositeManager = exports.DiffManager = exports.FunctionManager = exports.PluginManager = exports.createElement = undefined;

var _PluginManager = __webpack_require__(1);

var _FunctionManager = __webpack_require__(6);

var _FunctionManager2 = _interopRequireDefault(_FunctionManager);

var _DiffManager = __webpack_require__(5);

var _DiffManager2 = _interopRequireDefault(_DiffManager);

var _Managers2Fn = __webpack_require__(7);

var _TweenManager = __webpack_require__(8);

var _TweenManager2 = _interopRequireDefault(_TweenManager);

var _DOMManager = __webpack_require__(4);

var _DOMManager2 = _interopRequireDefault(_DOMManager);

var _domClass = __webpack_require__(9);

var _domClass2 = _interopRequireDefault(_domClass);

var _xhr = __webpack_require__(13);

var _xhr2 = _interopRequireDefault(_xhr);

var _hash = __webpack_require__(10);

var _hash2 = _interopRequireDefault(_hash);

var _makeNode = __webpack_require__(2);

var _urlc = __webpack_require__(12);

var _urlc2 = _interopRequireDefault(_urlc);

var _tezClass = __webpack_require__(11);

var _tezClass2 = _interopRequireDefault(_tezClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createElement = _makeNode.createElement;
exports.PluginManager = _PluginManager.PluginManager;
exports.FunctionManager = _FunctionManager2.default;
exports.DiffManager = _DiffManager2.default;
exports.CompositeManager = _Managers2Fn.CompositeManager;
exports.LogicManager = _Managers2Fn.LogicManager;
exports.CallManager = _Managers2Fn.CallManager;
exports.TweenManager = _TweenManager2.default;
exports.DOMManager = _DOMManager2.default;
exports.domClass = _domClass2.default;
exports.XHR = _xhr2.default;
exports.hashURL = _hash2.default;
exports.URLComponent = _urlc2.default;
exports.tezClass = _tezClass2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=Tez.js.map