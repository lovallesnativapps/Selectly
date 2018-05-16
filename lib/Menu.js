'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTravel = require('react-travel');

var _reactTravel2 = _interopRequireDefault(_reactTravel);

var _reactPopper = require('react-popper');

var _reactAria = require('react-aria');

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