'use strict';

var h = 'hello';
var w = 'world';
console.log(h + ' ' + w);

var a = 5;
var b = '';
var multiply = function multiply() {
  var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return console.log(a + ' * ' + b);
};
multiply();




function calculate() {
        var result = 0;
        for (i = 0; i < arguments.length; i++) {
            result = result + arguments[i];
        }
        var avg = result / arguments.length;
        console.log(avg);
    }


calculate(1); //Wypisze "Błąd: Nie podałeś żadnych liczb"
calculate(1, 3); //Wypisze "Podałeś tylko jedną liczbę: 1"
calculate(1, 3, 6, 6); //Wypisze 15