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