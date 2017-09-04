/*zadanie 1 */

const h = ('hello') ;
const w = ('world') ;
console.log(`${h} ${w}`);




const a = (5);
const b = ('');
const  multiply = (b = '1') => console.log(`${a} * ${b}`);
multiply();

/*zadanie 2*/


const numbers = [0, ,3];

const multiply2 = (numbers = (1) = '1') => consol.log (`${numbers[1] * numbers[2]}`);

/*zadanie 3 */

function average() {
        var result = 0;
        for (i = 0; i < arguments.length; i++) {
            result = result + arguments[i];
        }
        var avg = result / arguments.length;
        console.log(avg);
    }


average(1); 
average(1, 3); 
average(1, 3, 6, 6); 


