

// ### Values and Variables 
/*

var _myLastName = "valid" ;
var $myLastName = "valid" ;
var &myLastName = "invalid" ;

var str = "string" ;
var bool = true ;
var num = 27687 ;

// TYPEOF OPERATOR ---
var bigNumber = 1237812412341234781234613247134271463271823461234n ;
console.log(bigNumber) ;
console.log(typeof bigNumber) ; // bigint

var x = null ;
console.log(typeof x) ; // object (bug)

var num = "27375" ;
console.log(typeof num)  ; // string
console.log(typeof +num) ; // number 
console.log(typeof Number(num)) ; // number 

// NUMBER TO STRING ---
console.log(typeof String(27353)) ; // String
console.log(typeof (27137813+"")) ; // String

In Javascript varlues are either considered as truthy or falsy value. 
1. Any non Empty String --> True
2. Any non zero number
3. Arrays and Objects, even when they are empty
4. true


false 
""
0



### parseInt -- used to parse string and convert it into integer(whole number)
const str = "1235235" ;
const x = parseInt(str) ;
console.log(x) ;

console.log(parseInt("12336"))
console.log(parseInt("12336", 10))
console.log(parseInt("   12336  "))
console.log(parseInt("000012336"))



### parseFloat -- used to parse string and convert it into float(decimal number)
const str = "1235235.546556" ;
const x = parseFloat(str) ;
console.log(x) ;

console.log(parseInt("jdqhdcs")) // NAN -- Not a Number
console.log(" 5" ==5)
console.log(" 6768$  " == 6768)


console.log(NaN === NaN) ; // False


console.log(typeof (" "+0)) ;
console.log(true + true) ;


### TYPES OF OPERATORS ---
1. Arithmetic 
2. Comparison
3. Logical operator
4. String 
5. Unary 
6. Ternary Operator 
7. Type operator
8. Assignment operator.

var result = 0.54 + 6.7 ;
console.log(result.toFixed(4)) ; // 7.2400


console.log(7 === 7) 
console.log(2 < 12 < 5)
expression executes from left to right 
(2 < 12) = true and true < 5 ==> true = 1, 1 < 5 == true
console.log(true+true) // 2
console.log("20"+10+40) ; // 201040

print pattern --

var i = 0 ;
for(var i=0; i<17; i++) {
    var pattern = "" ;
    for(var j=0; j<i; j++) pattern +=  "*" ;
    console.log(pattern) ;
}

FUNCTIONS ---
var result = ((a, b) => {
    return a+b ;
})(23, 45) ;

console.log(result) ;


### ECMASCRIPT ---
// console.log(x) ; // var is functional scoped 
let add = (a, b) => {
    console.log(x) ;
    if(true) {
        var x = 34 ;
    }
    return a+b ;
}

console.log(add(354, 365)) ;

ARRAY ---
let arr = []
console.log(typeof arr) ; // object 


let fruits = ["Mango", "Apple", "Banana", "Grapes", 12] ;
let fruits1 = new Array(["Mango", "Apple", "Banana", "Grapes"])

// console.log((typeof fruits) == (typeof fruits1)) // true

// for(let item of fruits) console.log(item) ;
// For-in is used to iterate over properties of object
for(let item in fruits) console.log(item) ; // 0 1 2 3 4
for(let item in fruits) console.log(fruits[item]) ;// Mango, ...

let fruits = new Array("Mango", "Apple", "Banana", "Grapes") ;

console.log(fruits) ;
fruits.forEach((value, index, array) => {
    console.log(`${value} ${index}`) ;
    console.log(array) ;
}) ;

let fruits = ["Mango", "Apple", "Banana", "Grapes", 12] ;
fruits.map((value, index, array) => {
    console.log(`${value} ${index}`) ;
    // console.log(array) ;
})

// Difference bw forEach and map fun 
// map return value but forEach return nothing

let arr = [1, 2, 3, 4, 5, 6] ;
let arr2 = arr.map((value) => {
    return value*value ;
})

console.log(arr2) ;
// [ 1, 4, 9, 16, 25, 36 ]

let arr = [1, 2, 3, 4, 5, 6] ;
let arr2 = arr.forEach((value) => {
    return value*value ;
})

console.log(arr2) ;
// undefined

PUSH POP SHIFT UNSHIFT ----

let fruits = ["Mango", "Apple", "Banana", "Grapes", 12] ;
fruits.splice(2, 0, "Guava")
console.log(fruits) ;
// fruits.splice(-1, 0, "ewkwjq") ;

fruits.indexOf(value, startFrom) ;
fruits.lastIndexOf(value) ;

let arr = [1, 2, 3, 4, 5, 6] ;
const result = arr.find((curElement, index, arr) => {
    return curElement > 4 ;
}) ;
 console.log(result) ; // 5
// returns only first value satisfying condition.. 




let arr = [1, 2, 3, 4, 5, 6] ;
const result = arr.filter((curElement, index, arr) => {
    return curElement > 4 ;
}) ;
console.log(result) ;
// [ 5, 6 ]


let arr = [1, 2, 3, 4, 5, 6] ;
arr.sort() ;
console.log(arr)
arr.reverse()
console.log(arr) ;


let arr = [1, 2, 3, 4, 5, 6] ;
arr.sort((a, b) => {
    return a<b ? 1 : -1;
}) ;

console.log(arr) ;





let num = 282 ;
if(num & 1){
    console.log("Odd Number") ;
} else {
    console.log("Even Number") ;
}


const prodPrice = [120, 100, 123, 128, 200] ;
const totalPrice = prodPrice.reduce((accum, curElem) => {
    return accum + curElem ;
}, 80) ;
// 80 added once
console.log(totalPrice)






const str = "It is a controlled statement that controls the increment/decrement of the counter variable controls." ;
console.log(str.search("controls")) ;

console.log(str.match("controls")) ;






let result = str.matchAll("controls") ; // iterator
console.log(...result) ;

[
  'controls',
  index: 34,
  input: 'It is a controlled statement that controls the increment/decrement of 
the counter variable controls.',        
  groups: undefined
] [
  'controls',
  index: 91,
  input: 'It is a controlled statement that controls the increment/decrement of 
the counter variable controls.',        
  groups: undefined

for(let item of result) {
    console.log(item)
} 
// item --> array, item[0] ==> 
// same op as above..


const str = "It is a controlled statement that controls the increment/decrement of the counter variable controls." ;
console.log(str.includes("controls")) ; // TRUE | FALSE
console.log(str.startsWith("It is a controlled")) ; // TRUE | FALSE


SLICE -- 
slice(start, end) ; // end not included
slice(-6) --> last -6 to -1

substring() ---
substring(-6) ; since -6 less than 0 it give str from 0 ---> 



str.charAt(4) ;
str.charCodeAt('A') --> ASCII --> 65


str.at(-6)
Allow -ve indexing

str.toUpperCase
str.toLowerCase()

str.trim()


const str = "It is a controlled statement that controls the increment/decrement of the counter variable controls." ;
let strArray = str.split(' ') ;
console.log(strArray)

PRINT a - z
for(let char = 97; char <=122; char++) {
    console.log(String.fromCharCode(char)) ;
}


// MATH OBJECT ---
console.log(Math.PI)

*/

