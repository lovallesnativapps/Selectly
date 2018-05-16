/*!
 * Selectly 0.5.0
 * https://github.com/souporserious/selectly
 * Copyright (c) 2018 Selectly Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-aria"), require("react-popper"), require("react-measure"), require("react-travel"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-aria", "react-popper", "react-measure", "react-travel"], factory);
	else if(typeof exports === 'object')
		exports["SelectlyPrerelease"] = factory(require("react"), require("react-dom"), require("react-aria"), require("react-popper"), require("react-measure"), require("react-travel"));
	else
		root["SelectlyPrerelease"] = factory(root["React"], root["ReactDOM"], root["ReactARIA"], root["ReactPopper"], root["Measure"], root["Portal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.Option = exports.OptionList = exports.Menu = exports.Trigger = exports.Select = undefined;

	var _Select = __webpack_require__(1);

	var _Select2 = _interopRequireDefault(_Select);

	var _Trigger = __webpack_require__(8);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Menu = __webpack_require__(10);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Option = __webpack_require__(12);

	var _Option2 = _interopRequireDefault(_Option);

	var _OptionList = __webpack_require__(13);

	var _OptionList2 = _interopRequireDefault(_OptionList);

	var _buildOptionsLookup = __webpack_require__(14);

	var _buildOptionsLookup2 = _interopRequireDefault(_buildOptionsLookup);

	var _getCurrentOptions = __webpack_require__(15);

	var _getCurrentOptions2 = _interopRequireDefault(_getCurrentOptions);

	var _getToggledValues = __webpack_require__(6);

	var _getToggledValues2 = _interopRequireDefault(_getToggledValues);

	var _getAllValues = __webpack_require__(16);

	var _getAllValues2 = _interopRequireDefault(_getAllValues);

	var _isOptionSelected = __webpack_require__(7);

	var _isOptionSelected2 = _interopRequireDefault(_isOptionSelected);

	var _withOptGroupProps = __webpack_require__(17);

	var _withOptGroupProps2 = _interopRequireDefault(_withOptGroupProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var utils = {
	  buildOptionsLookup: _buildOptionsLookup2.default,
	  getCurrentOptions: _getCurrentOptions2.default,
	  getToggledValues: _getToggledValues2.default,
	  getAllValues: _getAllValues2.default,
	  isOptionSelected: _isOptionSelected2.default,
	  withOptGroupProps: _withOptGroupProps2.default
	};

	exports.Select = _Select2.default;
	exports.Trigger = _Trigger2.default;
	exports.Menu = _Menu2.default;
	exports.OptionList = _OptionList2.default;
	exports.Option = _Option2.default;
	exports.utils = utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAria = __webpack_require__(4);

	var _reactPopper = __webpack_require__(5);

	var _getToggledValues = __webpack_require__(6);

	var _getToggledValues2 = _interopRequireDefault(_getToggledValues);

	var _isOptionSelected = __webpack_require__(7);

	var _isOptionSelected2 = _interopRequireDefault(_isOptionSelected);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SelectManager = _reactAria.Select.Manager;


	var arraysEqual = function arraysEqual(a, b) {
	  return a.sort().join(' ') === b.sort().join(' ');
	};

	var noop = function noop() {
	  return null;
	};

	var Select = function (_Component) {
	  _inherits(Select, _Component);

	  function Select() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Select);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isOpen: false,
	      triggerWidth: null,
	      value: _this.props.value,
	      selectedOptions: []
	    }, _this.options = [], _this.open = function () {
	      _this.setState({ isOpen: true });
	    }, _this.close = function () {
	      _this.setState({ isOpen: false });
	    }, _this.toggle = function () {
	      _this.setState(function (state) {
	        return { isOpen: !state.isOpen };
	      });
	    }, _this._addOption = function (option) {
	      // store option so we can update its state
	      _this.options.push(option);

	      // determine if this option is selected or not
	      if ((0, _isOptionSelected2.default)(_this.state.value, option.value)) {
	        option.setSelectedState(true);
	      }
	    }, _this._removeOption = function (value) {
	      _this.options = _this.options.filter(function (option) {
	        return option.value !== value;
	      });
	    }, _this._handleTriggerMeasure = function (_ref2) {
	      var width = _ref2.width;

	      _this.setState({ triggerWidth: width });
	    }, _this._handleChange = function (option) {
	      var _this$props = _this.props,
	          multiple = _this$props.multiple,
	          onChange = _this$props.onChange;

	      var newValue = multiple ? (0, _getToggledValues2.default)(_this.state.value, option.value) : option.value;

	      _this._setValue(newValue, function () {
	        onChange({
	          value: newValue,
	          option: option,
	          options: _this.options,
	          selectedOptions: _this.state.selectedOptions
	        });

	        if (!multiple) {
	          _this.close();
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Select, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        selectly: _extends({}, this.state, {
	          autoWidth: this.props.autoWidth,
	          multiple: this.props.multiple,
	          open: this.open,
	          close: this.close,
	          toggle: this.toggle,
	          addOption: this._addOption,
	          removeOption: this._removeOption,
	          onTriggerMeasure: this._handleTriggerMeasure,
	          onChange: this._handleChange
	        })
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update any new values by comparing the current values with incoming values
	      if (nextProps.value) {
	        if (nextProps.value.constructor === Array) {
	          if (this.props.value && !arraysEqual(this.props.value, nextProps.value) || this.state.value && !arraysEqual(this.state.value, nextProps.value)) {
	            this._setValue(nextProps.value);
	          }
	        } else {
	          if (this.props.value !== nextProps.value || this.state.value !== nextProps.value) {
	            this._setValue(nextProps.value);
	          }
	        }
	      }

	      // if there is an incoming disabled prop we need to make sure the options get closed
	      if (this.props.disabled !== nextProps.disabled && nextProps.disabled === true) {
	        this.close();
	      }
	    }
	  }, {
	    key: '_setValue',
	    value: function _setValue(value) {
	      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

	      var selectedOptions = [];

	      this.options.forEach(function (option) {
	        var isSelected = (0, _isOptionSelected2.default)(value, option.value);

	        option.setSelectedState(isSelected);

	        if (isSelected) {
	          selectedOptions.push(option);
	        }
	      });

	      this.setState({ value: value, selectedOptions: selectedOptions }, cb);
	    }
	  }, {
	    key: '_getSelectedOptions',
	    value: function _getSelectedOptions() {
	      return this.options.filter(function (option) {
	        return option.getSelectedState();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          multiple = _props.multiple,
	          disabled = _props.disabled,
	          autoWidth = _props.autoWidth,
	          onChange = _props.onChange,
	          children = _props.children,
	          restProps = _objectWithoutProperties(_props, ['multiple', 'disabled', 'autoWidth', 'onChange', 'children']);

	      return _react2.default.createElement(
	        SelectManager,
	        { component: false },
	        _react2.default.createElement(
	          _reactPopper.Manager,
	          restProps,
	          children
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react.Component);

	Select.childContextTypes = {
	  selectly: _react.PropTypes.object
	};
	Select.propTypes = {
	  multiple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  autoWidth: _react.PropTypes.bool,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	  onChange: _react.PropTypes.func
	};
	Select.defaultProps = {
	  multiple: false,
	  disabled: false,
	  autoWidth: true,
	  onChange: noop
	};
	exports.default = Select;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getToggledValues;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function getToggledValues() {
	  var prevValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var nextValues = arguments[1];

	  var newValues = [].concat(_toConsumableArray(prevValues));

	  if (nextValues.constructor !== Array) {
	    nextValues = [nextValues];
	  }

	  nextValues.forEach(function (value) {
	    var pos = newValues.indexOf(value);
	    if (pos > -1) {
	      newValues.splice(pos, 1);
	    } else {
	      newValues.push(value);
	    }
	  });

	  return newValues;
	}
	module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isOptionSelected;
	function isOptionSelected(currentValue, value) {
	  if (!value || !currentValue) {
	    return false;
	  } else {
	    if (currentValue.constructor === Array) {
	      return currentValue.indexOf(value) > -1;
	    } else {
	      return value === currentValue;
	    }
	  }
	}
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactPopper = __webpack_require__(5);

	var _reactAria = __webpack_require__(4);

	var _reactMeasure = __webpack_require__(9);

	var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Trigger = function Trigger(_ref, _ref2) {
	  var selectly = _ref2.selectly;

	  var defaultValue = _ref.defaultValue,
	      _ref$renderLabel = _ref.renderLabel,
	      renderLabel = _ref$renderLabel === undefined ? function (label) {
	    return label;
	  } : _ref$renderLabel,
	      children = _ref.children,
	      restProps = _objectWithoutProperties(_ref, ['defaultValue', 'renderLabel', 'children']);

	  var value = selectly.value,
	      selectedOptions = selectly.selectedOptions,
	      isOpen = selectly.isOpen,
	      toggle = selectly.toggle,
	      autoWidth = selectly.autoWidth,
	      onTriggerMeasure = selectly.onTriggerMeasure;

	  var childrenToRender = void 0;

	  if (typeof children === 'function') {
	    childrenToRender = function childrenToRender(props) {
	      return children(props, {
	        isOpen: isOpen,
	        value: value,
	        selectedOptions: selectedOptions
	      });
	    };
	  } else if (children) {
	    childrenToRender = children;
	  } else if (selectedOptions.length > 0) {
	    childrenToRender = selectedOptions.map(function (o) {
	      return renderLabel(o.label);
	    });
	  } else {
	    childrenToRender = defaultValue;
	  }

	  var component = _react2.default.createElement(
	    _reactPopper.Target,
	    null,
	    function (_ref3) {
	      var targetProps = _ref3.targetProps;
	      return _react2.default.createElement(_reactAria.Trigger, _extends({
	        ref: function ref(c) {
	          targetProps.ref(_reactDom2.default.findDOMNode(c));
	        },
	        isOpen: isOpen,
	        keybindings: [' '],
	        onTrigger: toggle,
	        children: childrenToRender
	      }, restProps));
	    }
	  );
	  return component;
	};

	Trigger.contextTypes = {
	  selectly: _react.PropTypes.object
	};

	exports.default = Trigger;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactTravel = __webpack_require__(11);

	var _reactTravel2 = _interopRequireDefault(_reactTravel);

	var _reactPopper = __webpack_require__(5);

	var _reactAria = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Menu = function Menu(props, context) {
	  var component = props.component,
	      renderTo = props.renderTo,
	      placement = props.placement,
	      style = props.style,
	      children = props.children,
	      restProps = _objectWithoutProperties(props, ['component', 'renderTo', 'placement', 'style', 'children']);

	  var selectly = context.selectly;

	  var optionList = _react2.default.createElement(
	    _reactAria.Select.OptionList,
	    _extends({
	      component: false,
	      closeOnOutsideClick: true,
	      onOptionSelection: selectly.onChange,
	      onRequestClose: selectly.close
	    }, restProps),
	    function (optionListProps) {
	      return _react2.default.createElement(
	        _reactPopper.Popper,
	        _extends({
	          component: component,
	          placement: placement,
	          style: _extends({ width: selectly.triggerWidth }, style)
	        }, optionListProps),
	        children
	      );
	    }
	  );
	  var componentToRender = renderTo ? _react2.default.createElement(_reactTravel2.default, { renderTo: renderTo, children: optionList }) : optionList;

	  return selectly.isOpen && componentToRender;
	};

	Menu.contextTypes = {
	  selectly: _react.PropTypes.object
	};

	Menu.propTypes = {
	  placement: _react.PropTypes.any,
	  renderTo: _react.PropTypes.any
	};

	Menu.defaultProps = {
	  placement: 'bottom-start',
	  renderTo: document.body
	};

	exports.default = Menu;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAria = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Option = function (_Component) {
	  _inherits(Option, _Component);

	  function Option() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Option);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isSelected: false
	    }, _this.setSelectedState = function (isSelected) {
	      _this.setState({ isSelected: isSelected });
	    }, _this.getSelectedState = function () {
	      return _this.state.isSelected;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Option, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _context = this.context,
	          selectly = _context.selectly,
	          optgroup = _context.optgroup;

	      var option = {
	        value: this.props.value,
	        label: this.props.label || this.props.value,
	        node: (0, _reactDom.findDOMNode)(this),
	        setSelectedState: this.setSelectedState,
	        getSelectedState: this.getSelectedState
	      };

	      selectly.addOption(option);

	      if (optgroup) {
	        optgroup.addOption(option);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.selectly.removeOption(this.props.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isMultiple = this.context.selectly.multiple;

	      var _props = this.props,
	          children = _props.children,
	          restProps = _objectWithoutProperties(_props, ['children']);

	      var isSelected = this.state.isSelected;

	      return _react2.default.createElement(
	        _reactAria.Select.Option,
	        restProps,
	        typeof children === 'function' ? function (props) {
	          return children(_extends({}, props, { isMultiple: isMultiple, isSelected: isSelected }));
	        } : children
	      );
	    }
	  }]);

	  return Option;
	}(_react.Component);

	Option.contextTypes = {
	  selectly: _react.PropTypes.object,
	  optgroup: _react.PropTypes.object
	};
	exports.default = Option;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAria = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var OptionList = function OptionList(props, context) {
	  var children = props.children,
	      restProps = _objectWithoutProperties(props, ['children']);

	  var selectly = context.selectly;

	  var childrenToRender = typeof children === 'function' ? function (optionListProps) {
	    return children({
	      isOpen: selectly.isOpen,
	      triggerWidth: selectly.triggerWidth,
	      optionListProps: optionListProps
	    });
	  } : children;
	  return _react2.default.createElement(
	    _reactAria.Select.OptionList,
	    _extends({
	      closeOnOutsideClick: false,
	      onOptionSelection: selectly.onChange,
	      onRequestClose: selectly.close
	    }, props),
	    childrenToRender
	  );
	};

	OptionList.contextTypes = {
	  selectly: _react.PropTypes.object
	};

	exports.default = OptionList;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = buildOptionsLookup;
	function buildOptionsLookup(options) {
	  var _lookup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  for (var i = 0, len = options.length; i < len; i++) {
	    var option = options[i];
	    var optgroup = option.optgroup,
	        value = option.value,
	        label = option.label;


	    if (optgroup) {
	      buildOptionsLookup(optgroup, _lookup);
	    } else {
	      _lookup[value] = options[i];
	    }
	  }
	  return _lookup;
	}
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getCurrentOptions;

	var _buildOptionsLookup = __webpack_require__(14);

	var _buildOptionsLookup2 = _interopRequireDefault(_buildOptionsLookup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getCurrentOptions(options, currentValue) {
	  var lookup = (0, _buildOptionsLookup2.default)(options);

	  // if no value provided return the first option
	  if (!currentValue) {
	    return new Array(lookup[Object.keys(lookup)[0]]);
	    // if an array we return an array of the selected options back
	  } else if (currentValue.constructor === Array) {
	    return currentValue.map(function (_value) {
	      return lookup[_value];
	    });
	    // otherwise just return the single selected option
	  } else {
	    return new Array(lookup[currentValue]);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getAllValues;

	var _buildOptionsLookup = __webpack_require__(14);

	var _buildOptionsLookup2 = _interopRequireDefault(_buildOptionsLookup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getAllValues(options) {
	  var lookup = (0, _buildOptionsLookup2.default)(options);
	  return Object.keys(lookup).map(function (key) {
	    return lookup[key].value;
	  });
	}
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = withOptGroupProps;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function withOptGroupProps(WrappedComponent) {
	  var _class, _temp2;

	  return _temp2 = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      var _ref;

	      var _temp, _this, _ret;

	      _classCallCheck(this, _class);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAllSelected: false }, _this.options = [], _this._addOption = function (option) {
	        _this.options.push(option);
	      }, _this._removeOption = function (value) {
	        _this.options = _this.options.filter(function (option) {
	          return option.value !== value;
	        });
	      }, _this.selectAll = function () {
	        _this.options.forEach(function (option) {
	          return option.setSelectedState(true);
	        });
	        _this.setState({ isAllSelected: true });
	      }, _this.deselectAll = function () {
	        _this.options.forEach(function (option) {
	          return option.setSelectedState(false);
	        });
	        _this.setState({ isAllSelected: false });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(_class, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return {
	          optgroup: {
	            addOption: this._addOption,
	            removeOption: this._removeOption
	            // onChange: this
	          }
	        };
	      }
	    }, {
	      key: '_isAllSelected',
	      value: function _isAllSelected() {
	        this.setState({
	          isAllSelected: this.options.every(function (option) {
	            return option.getSelectedState();
	          })
	        });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _react.createElement)(WrappedComponent, _extends({}, this.props, {
	          isAllSelected: this.state.isAllSelected,
	          selectAll: this.selectAll,
	          deselectAll: this.deselectAll
	        }));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.childContextTypes = {
	    optgroup: _react.PropTypes.object
	  }, _temp2;
	}
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;