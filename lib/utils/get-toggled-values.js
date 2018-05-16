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