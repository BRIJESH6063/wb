/*



console.log(typeof null) ;
--->>> object 
very popular javascript bug (since it was built in 10 days) and unresolved till now

=================================================
console.log(typeof 23324332) ;
console.log(typeof 2332433214313453215435113554n) ;
console.log(typeof 2332.4332) ;
console.log(typeof 'what the fuck') ;
console.log(typeof null) ;
console.log(typeof undefined) ;
console.log(typeof Symbol('id')) ;

---------------------------------
number
bigint
number
string
object
undefined
symbol

STRING 
====================== Primitive data type IMMUTABLE
====================== Immutability
let name = 'brijesh' ;
console.log(name) ;
name[1] = '-' ;
console.log(name) ;
-------------
brijesh
brijesh


ARRAY
const array = [12, 23.21, 'rohit'] ;
console.log(array, typeof array) ;

====================== NON Primitive data type MUTABLE
const array = [12, 23.21, 'rohit'] ;
console.log(array) ;
array[0] = 'shivam' ;
console.log(array) ;
------------------------------------
[ 12, 23.21, 'rohit' ]
[ 'shivam', 23.21, 'rohit' ]

============  OBJECT  ===============
------------------------------------
const name = 'brijesh' ;
const age = 24 ;

const person = {
  name, 
  age
}

console.log(person)

======================================>> COPY PRIMITIVE data type
let a = 20 ;
let b = a ; 
  ==> a-->>[20, add1], b-->>[20, add2]
console.log(a, b) ;
a = 34 ; 
-->> a and b dont point to same address, a-->>[34, add3], b-->>[20, add2]
-->> a and b are primitive data type hence 'IMMUTABLE'
console.log(a, b)

======================================>> COPY NON PRIMITIVE data type
const obj1 = {
  name: 'brijesh', 
  age: 23
}

const obj2 = obj1 ;
console.log(obj1, obj2) ;
obj2.name = 'shivam' ;
console.log(obj1, obj2) ;
--------------------------------------------------------
{ name: 'brijesh', age: 23 } { name: 'brijesh', age: 23 }
{ name: 'shivam', age: 23 } { name: 'shivam', age: 23 }


================== DEEP COPY -- Non Primitive ==================
const obj1 = {
  name: 'brijesh', 
  age: 23
}
const obj2 = {
  ...obj1
}
console.log(obj1, obj2) ;
obj2.name='shivam' ;
console.log(obj1, obj2) ;
----------------------------------------------------------
{ name: 'brijesh', age: 23 } { name: 'brijesh', age: 23 }
{ name: 'brijesh', age: 23 } { name: 'shivam', age: 23 }




*/

