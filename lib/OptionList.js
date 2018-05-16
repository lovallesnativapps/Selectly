'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAria = require('react-aria');

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