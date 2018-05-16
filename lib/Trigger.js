'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPopper = require('react-popper');

var _reactAria = require('react-aria');

var _reactMeasure = require('react-measure');

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