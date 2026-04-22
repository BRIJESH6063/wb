/*

=====================  toFixed(4) =========================
---->>>> returns 'STRING'
const a = 1323.354213 ;
console.log(a.toFixed(3)) ;
console.log(typeof a.toFixed(3)) ;
console.log(a) ;
---->>> 1323.354
        string
        1323.354213


=====================  toPrecision(4) =========================
---->>>> returns 'STRING'
const a = 1323.354213 ;
console.log(a.toPrecision(6)) ;
console.log(typeof a.toPrecision(6)) ;
console.log(a) ;
---->>>> 1323.35
         string
         1323.354213


=====================  new Number(23) =========================
---->>>> returns 'OBJECT'
const num = new Number(20) ;
console.log(num) ;
console.log(typeof num) ;
console.log(num == 20) ;
console.log(num === 20) ;

console.log(b == num) ;
console.log(b === num) ;

--->>>  [Number: 20]
        object
        true
        false

        true 
        true [Object/Non Primitive copy 'reference']

console.log(Boolean(0)) ;
console.log(Boolean(new Number(0))) ;

--->>> false
       true 


=====================  Math.random()  =========================
console.log(Math.floor(1+Math.random()*10)) ;
console.log(Math.floor(1+Math.random()*6)) ;

----->>>> 15 - 25
console.log(Math.floor(15+Math.random()*(25-15+1))) ;

GENERATE 4 digit otp --->>> 1000 -- 9999
console.log(Math.floor(1000+Math.random()*(9999-1000+1))) ;













*/



