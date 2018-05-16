'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAria = require('react-aria');

var _reactPopper = require('react-popper');

var _getToggledValues = require('./utils/get-toggled-values');

var _getToggledValues2 = _interopRequireDefault(_getToggledValues);

var _isOptionSelected = require('./utils/is-option-selected');

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