/*

===================== COMPUTER SCIENCE ERROR/BUG ===================================
const x = Number('123.21') ;
console.log(x+100) ;
------------------------
223.20999999999998

JavaScript uses the IEEE 754 floating-point standard to represent numbers. 
The problem is that some decimal numbers (like 123.21) cannot be represented exactly in binary, 
so they get stored as a very close approximation.
So internally:
  123.21 ≈ 123.20999999999999
When you do:
  123.20999999999999 + 100
you get:
  223.20999999999998
--------------------------------
const x = Number('123.21') ;
console.log((x+100).toFixed(2)) ;
--------------------------------
const x = Number('123.21') ;
console.log(Math.round((x+100)*100)/100) ;

===================================================
console.log(Number('123'), Number('123a'), Number(true), Number(false), Number(null), Number(undefined)) ;
---------------------------------------------------
123 NaN 1 0 0 NaN


================ NUMBER 2 STRING =====================
console.log(String(123)+'--') ;
output -->>> 123--


=============  'NULL' is loosely equals to 'UNDEFINED'  ================

console.log(null==undefined) ;
  -->> TRUE

console.log(null===undefined) ;
console.log(null==0) ;
console.log(null==true) ;
console.log(null==false) ;
console.log(null==0) ;
console.log(null=='') ;
  -->> FALSE


============  NULL with >=, <=, <, >  ============
---->>> null behaves as Number(null) = 0
console.log(null>=0) ;  
console.log(null<=0) ;
  -->> TRUE
console.log(null>0) ;
console.log(null<0) ;
  -->> FALSE

console.log(null>='') ;
  -->> TRUE

console.log(NaN == NaN) ;
  -->> FALSE


============  UNDEFINED with >=, <=, <, >  ============
---->>> undefined behaves as Number(undefined) = NaN

============  LOGICAL OPERATOR ================
console.log(true && true) ;
console.log(true && false) ;
console.log(false && true) ;
console.log(false && false) ;

console.log(true || true) ;
console.log(true || false) ;
console.log(false || true) ;
console.log(false || false) ;


const n1 = 'Rohit' ;
const n2 = 'Mohit' ;
console.log(n1 && n2) ;
--->>> left --> right n1=true with && operator, now n2 is deciding factor so returns n2(Mohit) direct

const n1 = '' ;
const n2 = 'Mohit' ;
console.log(n1 && n2) ;
--->>> left --> right n1=false with && operator, now n1 is deciding factor so returns n1('') direct

console.log(n1 || n2) ;
--->>> left --> right n1=true with || operator, now n1 is itself deciding factor so returns n1(Rohit) direct

console.log(n1 || n2) ;
--->>> left --> right n1=false with || operator, now n2 is deciding factor so returns n2(Mohit) direct

console.log(0 && 12) ; 
--->>> 0

*/










