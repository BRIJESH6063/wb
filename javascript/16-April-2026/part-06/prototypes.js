/*

====================   Prototype and Classes   =======================
const obj = {
  name: 'shivam dubey',
  age: 38,
  greet: function() {
    console.log('Hello! shivam dubey here!!') ;
  }
}

console.log(obj.hasOwnProperty("names")) ;
console.log(obj.hasOwnProperty("name")) ;
console.log(obj.toString()) ;
---->>> output
  false
  true
  [object Object]

================   fetching property of obj1 from obj2   =======================
---->>> direct method -- fail
const obj = {
  name: 'shivam dubey',
  age: 38,
  greet: function() {
    console.log('Hello! shivam dubey here!!') ;
  }
}
const obj2 = {
  account: 23823
}

console.log(obj2.name) ;
---->>> undefined

================  obj.__proto__ = obj2  =======================
const obj = {
  name: 'shivam dubey',
  age: 38,
  greet: function() {
    console.log('Hello! shivam dubey here!!') ;
  }
}
const obj2 = {
  account: 23823
}

---->>> PROTOTYPE 
obj2.__proto__ = obj ;
console.log(obj2.name) ;
---->>> shivam dubey

==================================================================================
const obj = {
  name: 'shivam dubey',
  age: 38,
  greet: function() {
    console.log('Hello! shivam dubey here!!') ;
  }
}
const obj2 = {
  account: 23823
}

obj2.__proto__ = obj ;
console.log(obj2.name) ;
console.log(obj.hasOwnProperty('name')) ;
console.log(obj2.hasOwnProperty('name')) ;
---->>> output
  shivam dubey
  true
  false


=========================   Array and Object   ============================
const arr = [12, 231, 98, 234] ;
console.log(arr.__proto__) ;
console.log(arr.__proto__ == Array.prototype)
console.log(arr.__proto__.__proto__ == Object.prototype)
console.log(arr.__proto__.__proto__.__proto__)
---------------------->>> output
  Object(0) []
  true
  true
  null


===========================   Function and Object   ================================
function ab() { }

console.log(typeof ab) ;
console.log(ab.__proto__ == Function.prototype) ;
console.log(ab.__proto__.__proto__ == Object.prototype)
console.log(ab.__proto__.__proto__.__proto__)
------------------->>>
  function
  true
  true
  null



  
*/

function ab() { }

console.log(typeof ab) ;
console.log(ab.__proto__ == Function.prototype) ;
console.log(ab.__proto__.__proto__ == Object.prototype)
console.log(ab.__proto__.__proto__.__proto__)










