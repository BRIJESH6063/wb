/*
fun() ;
// fun2() ;
console.log(x) ;

var x = 43 ;
function fun() {
  console.log("fun() called!!") ;
}

// fun2 --> arrow function does not participate in hoisting 
const fun2 = () => {
  console.log("arrow function called!!..") ;
}
*/


// CURRYING

function fun (a) {
  return function(b) {
    return function(c) {
      return a+b+c ;
    }
  }
}

// const x = fun(12) ;
// const xx = x(24) ;
// const xxx = xx(36) ;
// console.log(xxx) ;

const x = fun(12)(24)(36) ;  // ---- currying method
// console.log(x) ;

// EXAMPLE - 2
const userObj = {
  name: "anuj shukla" ,
  age: 34
}

function findUserData(obj) {
  return function(prop) {
    return obj[prop] ;
  }
}

// const X = findUserData(userObj) ;
// const XX = X("name") ;
// console.log(XX) ;

// const X = findUserData(userObj)("age") ;
// console.log(X) ;
// console.log(findUserData(userObj)("name")) ;


// INFINITE CURRYING ------
// function add(a) {
//   return function (b) {
//     return function() {
//       return a+b ;
//     }
//   }
// }

// const A = add(12)(11)() ;
// // const A = add(12)(11)(2)(1)() ; -- error as we need to change add function to get further addition.
// console.log(A) ;

// SMART ADDITION FUNCTION -- recursive addition
function add(a) {
  return function(b) {
    if(b) return add(a+b) ;
    else return a ;
  }
}

// const A = add(12)(11)(2)(1)() ;
// console.log(A) ;