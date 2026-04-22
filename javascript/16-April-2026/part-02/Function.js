/*
==================  FUNCTION ====================
function twoNum(num1, num2) {
  console.log(num1, num2) ;
}
twoNum() ;
twoNum(undefined, undefined) ;
twoNum(null, null) ;
twoNum(31) ;
twoNum(12, 34) ;
-----------------------------
---->>> undefined undefined
        undefined undefined
        null null
        31 undefined
        12 34

==================== default argument fun(x=0) =============
function twoNum(num1, num2=0) {
  console.log(num1, num2) ;
}
twoNum(23) ;

==================== REST operator fun(...x) =============
function twoNum(...rest) {
  console.log(rest) ;
}
twoNum(23, 34, 12, 63, 24, 16) ;
---->>> [ 23, 34, 12, 63, 24, 16 ]


==================  VARIABLE function ====================
// console.log(addTwoNumber(13, 26)) ; --->>> ERROR
const addTwoNumber = function (x, y) {
  return x + y ;
}
console.log(addTwoNumber(13, 26)) ;
----------------------------------------------

console.log(addTwoNumber(13, 26)) ;
function addTwoNumber(x, y) {
  return x + y ;
}
console.log(addTwoNumber(13, 26)) ;
---->>> 39
        39

==================  ARROW function  ====================
const fun = () => ({ name: 'Mohit', age: 23}) ;
console.log(fun()) ;

const square = (num) => (num*num) ;
console.log(square(7)) ;

==================  Immediately Invoked function  ====================
---->>> Method 1
(function square(num) {
  console.log(num*num) ;
})(9) ;
-------------------------
---->>> Method 2
((num) => {
  console.log(num*num) ;
})(9) ;


==================  CALLBACK function  ====================
function greet() {
  console.log('Greet function called!! GREETING!!..') ;
}
function meet(callback) {
  console.log('Meet function called!! MEETING!!..') ;
  callback() ;
  console.log('Meet function over!! MEETING OVER!!..') ;
}
meet(greet) ;

---->>> Meet function called!! MEETING!!..
        Greet function called!! GREETING!!..
        Meet function over!! MEETING OVER!!..





*/

function greet() {
  console.log('Greet function called!! GREETING!!..') ;
}
function meet(callback) {
  console.log('Meet function called!! MEETING!!..') ;
  callback() ;
  console.log('Meet function over!! MEETING OVER!!..') ;
}
meet(greet) ;