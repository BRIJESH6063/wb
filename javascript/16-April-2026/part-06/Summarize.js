/*

1. this, call, apply, bind
2. this: class object method
3. strict mode vs non-strict moode

----------------------------------------------
var a = 10 ;
b = 20 ;
console.log(a, b) ;
function fun(name, name) {
  console.log(name, name) ;
}
fun("Rohit", "Mohit") ;
------------->>>> output
10 20
Mohit Mohit

-------------------------------------  'use strict'  -------------------------------------
'use strict' ;

var a = 10 ;
b = 20 ;
console.log(a, b) ;
function fun(name, name) {
  console.log(name, name) ;
}
fun("Rohit", "Mohit") ;
--------------->>>> Error (does not execute)

Error 1. b = 20 ;
Error 2. function fun(name, name) 

-----------------------------------------------------------------------------
'use strict' ;

var a = 10 ;
let b = 20 ;
console.log(a, b) ;
function fun(name1, name2) {
  console.log(name1, name2) ;
}
fun("Rohit", "Mohit") ;
--------------------------->>>>>>> output
  10 20
  Rohit Mohit

console.log(window) ;
----------------->>>>> output
Error --
console.log(window) ;
            ^
ReferenceError: window is not defined

------------------------------------------
'window' is global object provided by 'WEB API', not a part of javascript


==================  'global' in javascript provided by node  =============
console.log(global) ;
------------->>>>> output
  <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      Symbol(nodejs.util.promisify.custom): [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      Symbol(nodejs.util.promisify.custom): [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter],
    navigator: [Getter]
  }



----------------------------   globalThis   ----------------------------
console.log(globalThis) ;
------------>>>>>> output 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}

---------->>>> 'globalThis' is same for browser and node environment javascript

===========================   'THIS' keyword   ===========================
console.log(this) ;
-------->>> output = {}
-------->>> 'this' in browser = 'window'


==========================  'THIS' in object  ==========================
const user = {
  name: 'brijesh',
  age: 55,
  greet: function () {
    console.log('this : ', this)
    console.log(`Hi ${this.name}`) ;
  }
}

user.greet() ;
--------------->>>>>> output
this :  { name: 'brijesh', age: 55, greet: [Function: greet] }
Hi brijesh

================== Hardcoring(user.greet) vs this.greet ======================
const user = {
  name: 'brijesh',
  age: 55,
  greet: function () {
    console.log('this : ', this)
    console.log(`Hi ${user.name}`) ; // hardcore X 
    console.log(`Hi ${this.name}`) ;
  }
}

const user2 = {
  name: 'Mohit'
}

user2.greet = user.greet ;
user2.greet() ;
----------->>>>>>>> output
  this :  { name: 'Mohit', greet: [Function: greet] }
  Hi brijesh
  Hi Mohit


=====================  fun() { this } without 'use strict'  ===================
function greet() {
  console.log(this) ;
}
greet() ;
---------->>>>> output
  global(node) = window(browser)

=====================  fun() { this } with 'use strict'  ===================
'use strict' ;

function greet() {
  console.log(this) ;
}
greet() ;
---------->>>>> output
  undefined

  user2.greet() ---> greet(this) points to 'user2'
  greet(this)   ---> points to nobody/'undefined'

-----------------------------------------------------------------
function greet() {
  console.log(this.name) ;
}
greet() ;
----->>> undefined (since without 'use strict' this = window/global)
-----------------------------------------------------------------
'use strict' ;
function greet() {
  console.log(this.name) ;
}
greet() ;
----->>> Error (since with 'use strict' this = undefined


--------------------------   fun.call(obj)   ---------------------------------
'use strict' ; // with/without both works

function greet() {
  console.log(`Hi ${this.name}`) ;
}

function ageIncrement(value) {
  this.age += value
}

function modifyObject(name, age) {
  this.name = name ;
  this.age = age ;
}

const user = {
  name: 'rohit',
  age: 30
}

console.log('user before : ', user.age) ;
ageIncrement.call(user, 10) ;
console.log('user after  : ', user.age) ;

console.log('user before (name & age) : ', user.name, user.age) ;
modifyObject.call(user, 'shivam', 90) ;
console.log('user after  (name & age) : ', user.name, user.age) ;
------------>>> output
  user before :  30
  user after  :  40
  user before (name & age) :  rohit 40
  user after  (name & age) :  shivam 90


=========================   bindFun = fun.bind(obj, x, y, z)   ===========================
'use strict' ; // with/without both works

function greet() {
  console.log(`Hi ${this.name}`) ;
}

function ageIncrement(value) {
  this.age += value
}

function modifyObject(name, age) {
  this.name = name ;
  this.age = age ;
  console.log(this) ;
}

const user = {
  name: 'rohit',
  age: 30
}

const bindFun = modifyObject.bind(user, 'rajeev', 20) ;
console.log(bindFun) ;
bindFun() ;
---------------->>>>>>> output
  [Function: bound modifyObject]
  { name: 'rajeev', age: 20 }


==========================   CLASS   ==========================
class Person {
  constructor() { // points to newly created empty object

  }
  getPerson() {
    return this ;
  }
}
const p1 = new Person() ;
console.log(p1) ;
-------------->>>> output 
  Person {}

-------------------------------------------------------------
class Person {
  constructor(name, age) { // points to newly created object with values
    this.name = name ;
    this.age = age ;
  }
  getPerson() {
    return this ;
  }
}

const p1 = new Person('rohit sharma', 49) ;
console.log(p1) ;
---------------->>>>> output
  Person { name: 'rohit sharma', age: 49 }


============================  Function  ============================
------------ without 'use strict' --------------------
function greet() {
  console.log(this) ;
}
greet() ;
------>>> Object [global]
--------------------------------
'use strict' ;
function greet() {
  console.log(this) ;
}
greet() ;
------------->>>> undefined

============================   Normal Function vs Arrow function   ============================
------>>>  Normal Function(have own 'this') vs Arrow Function(doesn't have their own 'this')

const outerThis = this ;
const arrowFun = () => {
  // console.log(this) ;
  console.log('Arrow Function : ', outerThis == this) ;
}

function normalFun() {
  // console.log(this) ;
  console.log('Normal Function : ', outerThis == this) ;
}
arrowFun() ;
normalFun() ;
---------------->>>>>>>>>>>> OUTPUT
  Arrow Function  :  true
  Normal Function :  false

---->> in Arrow Function ( outsider 'this' == inner 'this') ==> means They dont have their own 'THIS'
---->> Arrow function look for 'Lexical Environment' scope

==============================   Non Arrow fun take this = 'window'   ================================
---->>> Normal Function (this = window)
const user = {
  name: 'shivam dubey',
  age: 24,
  greet: function () {
    function meet() {
      console.log("Meet Function : ", this) ;
    }
    meet() ;
  }
}

user.greet() ;
--------------->>>>>> output
  (without 'use strict') --> Meet Function :  <ref *1> Object [global]
  (with 'use strict')    --> undefined


==============================   Arrow fun take this = 'lexical env this'   ================================
const user = {
  name: 'shivam dubey',
  age: 24,

  greet: function () {
    const meet = () => {
      console.log("Meet Function : ", this) ;
    }
    meet() ;
  }
}
user.greet() ;
------------------->>>>> output
Meet Function :  { name: 'shivam dubey', age: 24, greet: [Function: greet] }


----------------------------   Stopwatch Normal Function ------------------------------------
const stopWatch = {
  second: 0,
  start: function() {
    setInterval(function() {
      this.second ++ ; // this = window
      console.log(this.second) ;
    }, 1000)
  } 
}

stopWatch.start() ;
----------->>>> output
  NaN
  NaN
  NaN


----------------------------   Stopwatch Arrow Function ------------------------------------

const stopWatch = {
  second: 0,
  start: function() {
    setInterval(() => {
      this.second ++ ; // this = stopwatch
      console.log(this.second) ;
    }, 1000)
  } 
}

stopWatch.start() ;
----------->>>> output
1
2
3
4


======================  SCOPE  ===========================
--->> fun() { functiional scope }
--->> user = { not a scope }
-----------------------------------------
const outerThis = this ;
const user = {
  greet: () => {
    console.log(outerThis == this) ;
    // this != user because object is not a scope like function
  }
}
user.greet() ;
----------->>> true


===============================   DOM   ==================================

const button = document.getElementById('first') ;

button.addEventListener('click', function() {
  console.log(this) ; // button
})

button.addEventListener('click', () => {
  console.log(this) ; // window
})








*/




