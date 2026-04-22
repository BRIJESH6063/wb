/*

class Person {
  constructor(name, age) {
    this.name = name ;
    this.age = age ;
  }

  sayHi() {
    console.log(`Hi ${this.name}`) ;
  }
}

const person1 = new Person('Rohit', 36) ;
const person2 = new Person('Mohit', 20) ;
console.log(person1.name, person1.age) ;
person1.sayHi() ;
console.log(person2.name, person2.age) ;
person2.sayHi() ;
------------------------>>>>>  output
  Rohit 36
  Hi Rohit
  Mohit 20
  Hi Mohit

------------------------    Object vs Class    ------------------------
-----------------------------------------------------------------------
const obj = {
  name: 'rohit',
  age: 32 ,
  sayHi: function() {
    console.log(`Hi ${this.name}`) ;
  }
}

console.log(obj) ;

class Person {
  constructor(name, age) {
    this.name = name ;
    this.age = age ;
  }

  sayHi() {
    console.log(`Hi ${this.name}`) ;
  }
}

const person1 = new Person('Rohit', 34) ;

console.log(person1) ;

console.log(person1.__proto__ == Person.prototype) ;
console.log(person1.__proto__.__proto__ == Object.prototype) ;
console.log(person1.__proto__.__proto__.__proto__) ;
-------------->>>>> output
  { name: 'rohit', age: 32, sayHi: [Function: sayHi] }
  Person { name: 'Rohit', age: 34 }
  true
  true
  null

----------------------   Inheritance   ----------------------
class Person {
  constructor(name, age) {
    this.name = name ;
    this.age = age ;
  }

  sayHi() {
    console.log(`Hi ${this.name}`) ;
  }
}

class Customer extends Person {
  constructor(name, age, accountNo, balance) {
    super(name, age) ;
    this.accountNo = accountNo ;
    this.balance = balance ;
  }

  checkBalance() {
    return this.balance ;
  }
}

const cust01 = new Customer('Rohit', 23, 'A11009823', 12300) ;
console.log(cust01) ;
cust01.sayHi() ;
console.log(cust01.checkBalance()) ;
----------------------->>>>>> output
  Customer {
    name: 'Rohit',
    age: 23,
    accountNo: 'A11009823',
    balance: 12300
  }
  Hi Rohit
  12300




-------------------------   Object.create(obj)   ---------------------------------
const obj = {
  name: 'brijesh',
  age: 24
}

const obj2 = Object.create(obj) ;
obj2.account = 324423 ;
console.log(obj) ;
console.log(obj2) ;
console.log(obj2.name, obj2.age) ;
console.log(obj2.__proto__) ;
console.log(obj2.__proto__.__proto__ == Object.prototype)
---------------->>>> output
  { name: 'brijesh', age: 24 }
  { account: 324423 }
  brijesh 24
  { name: 'brijesh', age: 24 }
  true






*/



const obj = {
  name: 'brijesh',
  age: 24
}

const obj2 = Object.create(obj) ;
obj2.account = 324423 ;
console.log(obj) ;
console.log(obj2) ;
console.log(obj2.name, obj2.age) ;
console.log(obj2.__proto__) ;
console.log(obj2.__proto__.__proto__ == Object.prototype)