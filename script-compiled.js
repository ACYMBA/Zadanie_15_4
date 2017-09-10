'use strict';

/*zadanie 1 */

var h = 'hello';
var w = 'world';
console.log(h + ' ' + w);

/*zadanie 2*/

var a = '5';
var b = '';
var multiply = function multiply() {
  var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return console.log(a * b);
};
multiply();

/*zadanie 3 */

var average = function average() {
  for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }

  return num.reduce(function (a, b) {
    return a + b;
  }) / num.length;
};
console.log(average(3, 2, 1));

/*zadanie 4 */

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var avarage = function () {
  for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }

  return numbers.reduce(function (sum, next) {
    return sum + next;
  });
}.apply(undefined, grades) / grades.length;
console.log(avarage);
