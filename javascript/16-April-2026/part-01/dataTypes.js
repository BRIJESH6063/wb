/*


DATA TYPES --
1. Primitive Data Type      ---->>> [number, string, null, undefined, bigInt, symbol]
2. Non Primitive Data Type  ---->>> [array, object, function]

let und ;
console.log(und) ;

-->> CONST cannot be declared UNDEFINED. --> ERROR
const x ;
console.log(x) ;

NUMBER --->>> 8 BYTE (64 bit)
BIGINT --->>> beyond 8 BYTE
let num = 211421342146123416362342334n ; 
console.log(num) ;

NULL --->>> INTENTIONAL absence of any object value.

undefined --> no value given by js compiler
null --> no value given by coder/programmer

function currentWeather() {
  // return 25 ;
  // return null ;
}

let weather = currentWeather('dwarka') ;
console.log(weather) ;
[
  25 (return 25)
  null (return null)
  undefined (don't return anything)
]

### SYMBOL --->> used to create unique value
const id1 = Symbol('id') ;
console.log(id1) ;
const id2 = Symbol('id') ;
console.log(id2) ;

console.log(id1 == id2) ;
[
  Symbol(id)
  Symbol(id)
  false
]



*/



