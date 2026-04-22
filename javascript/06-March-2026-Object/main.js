/*

const a = true ;
const b = false ;

function getName(name) {
  return name ;
}

console.log(a && getName("rahul")) ;  // getName
console.log(b && getName("rahul")) ;  // false -- b
console.log(a || getName("rahul")) ;  // true -- a
console.log(b || getName("rahul")) ;  // getName



------ TEMPLATE LITERALS --------

const name1 = "rahul" ;
const name2 = "dhakad" ;

console.log(name1+" "+name2) ;
console.log(`${name1} ${name2}`)

-------- TERNARY OPERATOR -----------

const showRecipieOneName = false ;

function getRecipieOneName(recipieName) {
  return recipieName ;
}


function getRecipieTwoName(recipieName) {
  return recipieName ;
}

if(showRecipieOneName) {
  console.log(getRecipieOneName("Pizza")) ;
} else {
  console.log(getRecipieTwoName("Coke")) ;
}

condition ? statement1 : statement2

console.log(showRecipieOneName ? getRecipieOneName("Pizza") : getRecipieTwoName("Coke")) ;



-- SHORT HAND PROPERTY NAME --





const id = 1101 ;
const productName = "Apple Watch" ;
const rating = 4.5 ;

const product = {
  id: id,
  productName: productName,
  rating: rating,
} ;


console.log(product) ;


-- SHORT HAND PROPERTY NAME --
const product = {
  id,
  productName,
  rating,
}

console.log(product) ;




--- DESTRUCTURING OBJECT -----
const id = 1101 ;
const productName = "Apple Watch" ;
const rating = 4.5 ;


const product2 = {
  description: "Product2 Description",
  id, 
  productName,
  rating,
} ;

const getProductTwoDescription = product2.description ;
console.log(getProductTwoDescription) ;

const {description} = product2 ;
console.log(description) ;




--- DESTRUCTURING ARRAY VALUE ----
const array = [1, 2, 3] ;

let getArrayFirstValue = array[0] ;
let getArraySecondValue = array[1] ;

console.log(getArrayFirstValue, getArraySecondValue) ;

const [arrayFirstElement, 
  arraySecondElement, 
  arrayThirdElement, 
  arrayFourthElement
] = array ;

console.log(arrayFirstElement, 
  arraySecondElement, 
  arrayThirdElement, 
  arrayFourthElement
) ;



----- Default parameters, spread and rest operations -----

####   default value is undefined 
function mulTwoNumbers(num1, num2) {
  console.log(num1, num2) ; // undefined undefined
  return num1* num2 ;
}

console.log(mulTwoNumbers()) ;

function mulTwoNumbers(num1 = 1, num2 = 2) {
  return num1* num2 ;
}

console.log(mulTwoNumbers(120, 24)) ;

const array2 = [2, 3, 4] ;
const array3 = [10, 11, 12] ;

console.log([999, ...array2, ...array3, 10000]) ;

function getInfo(a, b, ...c) {
  console.log(a, b, c) ;
}

getInfo(1, 2, 3, 4, 5, 6, 7, 8) ;



##### map, filter, find, some, every, includes, indexof, findIndex
const personArray = [
  {
    name: "Person1",
    age: 30,
    country: "USA"
  }, 
  {
    name: "Person2",
    age: 34,
    country: "RUSSIA"
  }, 
  {
    name: "Person3",
    age: 24,
    country: "INDIA"
  }, 
  {
    name: "Person4",
    age: 28,
    country: "USA"
  }, 
] ;

const getAllNamesAndAges = personArray.map((singlePerson, index) => {
  return `${singlePerson.name}'s age is ${singlePerson.age}` ;
}) ;

console.log(getAllNamesAndAges) ;





const checkSomePersonAgeGreaterThan25 = personArray.some((singlePerson) => {
  return singlePerson.age > 25 ;
}) ;

console.log(checkSomePersonAgeGreaterThan25) ;
-- TRUE

const checkAllPersonAgeGreaterThan25 = personArray.every((singlePerson) => {
  return singlePerson.age > 25 ;
}) ;

console.log(checkAllPersonAgeGreaterThan25) ;
-- FALSE -- all are not greater than 25

const fruitsArray = ["Apple", "Banana", "Orange"] ;

console.log(fruitsArray.includes('Apple'), fruitsArray.indexOf('Banana')) ;
console.log(fruitsArray.includes('Banana') && fruitsArray.indexOf('Banana')) ;
-- 1
console.log(fruitsArray.includes('Banana') && 'Banana is present in Fruit Array') ;
-- Banana is present in Fruit Array






const personArray = [
  {
    name: "Person1",
    age: 30,
    country: "USA"
  }, 
  {
    name: "Person2",
    age: 34,
    country: "RUSSIA"
  }, 
  {
    name: "Person3",
    age: 24,
    country: "INDIA"
  }, 
  {
    name: "Person4",
    age: 28,
    country: "USA"
  }, 
] ;


const getIndexOfPersonWhoIsFromRussia = personArray.findIndex((singlePerson) => {
  return singlePerson.country === 'INDIA' ;
}) ;

console.log(getIndexOfPersonWhoIsFromRussia) ;
-- 2

*/





