/*zadanie 1 */

const h = ('hello') ;
const w = ('world') ;
console.log(`${h} ${w}`);


/*zadanie 2*/

const a = ('5');
const b = ('');
const  multiply = (b = '1') => console.log(a * b);
multiply();



/*zadanie 3 */

const average = (...num) => num.reduce((a,b) => a+b)/ num.length;
console.log(average(3,2,1));




/*zadanie 4 */


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const avarage= (((...numbers)=> numbers.reduce((sum, next) => sum + next))(...grades)) / grades.length;
console.log(avarage);


/*zadanie 5*/

const allParm=[1, 4, 'Iwona', false, 'Nowak'];
const [ ,b,c, ,e]=allParm;
console.log(c,e);