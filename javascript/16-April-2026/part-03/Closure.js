/*

======================  SCOPES and CLOSURE  ======================
1. GLOBAL scope      ==>Eg. - [x, y]
2. FUNCTIONAL scope  ==>Eg. - [c]
3. BLOCK scope       ==>Eg. - [d]

---------------------------------------------
let x = 20 ;
const y = 40 ;
if(true) {
  let d = 23 ;
  console.log(x, y) ;
}
function fun() {
  let c= 45 ;
  console.log('function fun called!!!.') ;
}
---->>> ERROR :: console.log(c) ;
fun() ;
---->>> 20 40
        function fun called!!!.
---------------------------------------------

======================  VAR variable on scopes  ======================
1. GLOBAL scope       ❌(does not respects closure scope, can be called outside function)
2. FUNCTIONAL scope   ✔ (respects closure scope, cant be called outside function)
3. BLOCK scope        ❌(does not respects closure scope, can be called outside function)

if(true) {
  var x = 100 ;
}
function fun() {
  var y = 200 ;
}
console.log(x) ;
// console.log(y) ;
---->>> 100

---------------------------------------------
let global = 100 ;
function fun1() {
  // let global = 200 ;
  function fun2() {
    // let global = 300 ;
    console.log(global) ;
  }
  fun2() ;
}
fun1() ;
---->>> 100 
---------------------------------------------
let global = 100 ;
if(true) {
  // let global = 200 ;
  console.log(global) ;
}
---->>> 100 
---------------------------------------------
==================== CLOSURE execution ================================
function countNumber() {
  let count = 0 ;
  function increment() {
    count++ ;
    return count ;
  }
  return increment ;
}

const counter = countNumber() ;
console.log(counter()) ;
// console.log(counter()) ;
// console.log(counter()) ;
// console.log(counter()) ;


-----------------------------------------------------------------------------------------------------
counter = [Function: countNumber]
execute 'counter'(execution context)
  Memory Allocation
    count = undefined
    increment = [Function: increment]
  Execute 
    count = 0+1 ;
    increment = [Function: increment]
    return 'increment'
[ 
  'As soon as return increment(function) executes, all needed variables(like 'COUNT') gets allocated in HEAP MEMORY'
  'increment(function in HEAP) will fetch count variable from HEAP(delcared and allocated during 'return increment')'
  'This is how returned function remembers variable of parent scope to use them' 
]

Execute counter(=increment)
  count = 0 (from heap)
  count++ , count = 1 
  print count=1

Execute counter(=increment)
  count = 1 (from heap updated)
  count++ , count = 2 
  print count=1

AND SO ON ....
---->>> 1 2 3 4

-----------------------------------------------------------------------------------------------------
==================== CLOSURE application ================================
const user = {
  balance: 500 ,
  credit: function(amount) {
    if( typeof amount === 'number' && amount>=0) {
      this.balance += amount ;
    }
  },
  debit: function(amount) {
    if( typeof amount === 'number' && amount>=0 && this.balance >= amount) {
      this.balance -= amount ;
    }
  }
}

console.log('balance: '+user.balance) ;
user.credit(12000) ;
console.log('balance: '+user.balance) ;
user.debit(3000) ;
console.log('balance: '+user.balance) ;
----------------------------------------------------------------------------------------
function credit/debit --> variable balance
---->>> variable 'balance' is not safe and private (user.balance = 'lawdaa lassan')


----------------------------------------------------------------------------------------
function createBankAccount() {
  let balance = 500.00 ;
  const user = {
    credit: function(amount) {
      if( typeof amount === 'number' && amount>=0) {
        balance += amount ;
        return balance ;
      }
    },
    debit: function(amount) {
      if( typeof amount === 'number' && amount>=0 && balance >= amount) {
        balance -= amount ;
        return balance ;
      }
    }
  }

  return user ;
}

const user = createBankAccount() ;
console.log(user.credit(23000)) ;
console.log(user.debit(6400)) ;
---->>> variable 'balance' is safe and private

----------------------  REDUX -------------------------------------
function createBankAccount() {
  let balance = 500.00 ;
  
  return {
    credit: function(amount) {
      if( typeof amount === 'number' && amount>=0) {
        balance += amount ;
        return balance ;
      }
    },
    debit: function(amount) {
      if( typeof amount === 'number' && amount>=0 && balance >= amount) {
        balance -= amount ;
        return balance ;
      }
    }
  }

}



*/


function createBankAccount() {
  let balance = 500.00 ;
  
  return {
    credit: function(amount) {
      if( typeof amount === 'number' && amount>=0) {
        balance += amount ;
        return balance ;
      }
    },
    debit: function(amount) {
      if( typeof amount === 'number' && amount>=0 && balance >= amount) {
        balance -= amount ;
        return balance ;
      }
    }
  }

}



// const user = createBankAccount() ;
// console.log(user.credit(23000)) ;
// console.log(user.debit(6400)) ;




























