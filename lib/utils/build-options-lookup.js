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