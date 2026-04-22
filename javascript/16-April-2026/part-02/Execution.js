/*

Code RUN ---->>> Execution Access

1. Memory Allocation
2. a = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
3. b = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
4. a = 10
5. b = 20
4. Execution 

--------------------   ERROR   --------------------
console.log(a, b) ;
let a = 10 ;
const b = 20 ;

--------------------   FINE   --------------------
let a = 10 ;
const b = 20 ;
console.log(a, b) ;

==========================================
let a = 10 ;
const b = 20 ;

---->>> addNumber => variable not function, which will be assigned value of function expression while execution
const addNumber = function(a, b) {
  const sum = a + b ;
  return sum ;
}

console.log(addNumber(a, b)) ;

1. Memory Allocation
2. a = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
3. b = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
4. addNumber = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
5. a = 10 
6. b = 20
7. addNumber = function Code
8. addNumber(10, 20) = 30
    i. a = undefined
    ii. b = undefined
    iii. sum = <uninitialized> (Temporal dead zone) [cannot be accessed untill 'initialized']
    a = 10 
    b = 20
    sum = 30
4. Execution 


-----------------------------------------------------------------
Parameter variables in function behave like var (function-scoped)
Parameters are scoped to the function (not block-scoped like let/const)
-----------------------------------------------------------------




*/


let a = 10 ;
const b = 20 ;

const addNumber = function(a, b) {
  const sum = a + b ;
  return sum ;
}

console.log(addNumber(a, b)) ;








