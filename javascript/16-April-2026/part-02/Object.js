/*

const user = {
  name: 'rohan', 
  age: 34,
  email: 'rohan@lodu.com',
  phone: 91212193021,
  size: 'M'
}

console.log(user['name'], user['age'], user['email'], user['phone'], user['size']) ;
console.log(user) ;

const user_d = user ;
user_d['age'] = 55 ;

console.log('user (after update) : ', user) ;
console.log('user_d (after update) : ', user_d) ;

---->>> rohan 34 rohan@lodu.com 91212193021 M
        {
          name: 'rohan',
          age: 34,
          email: 'rohan@lodu.com',
          phone: 91212193021,
          size: 'M'
        }

        user (after update) : {
          name: 'rohan',
          age: 55,
          email: 'rohan@lodu.com',
          phone: 91212193021,
          size: 'M'
        }
        user_d (after update) : {
          name: 'rohan',
          age: 55,
          email: 'rohan@lodu.com',
          phone: 91212193021,
          size: 'M'
        }

================  Object.keys(obj) and Object.values(obj) =====================
const user = {
  name: 'rohan', 
  age: 34,
  email: 'rohan@lodu.com',
  phone: 91212193021,
  size: 'M'
}

console.log('keys : ',Object.keys(user)) ;
console.log('values : ',Object.values(user)) ;
---->>> keys :  [ 'name', 'age', 'email', 'phone', 'size' ]
        values :  [ 'rohan', 34, 'rohan@lodu.com', 91212193021, 'M' ]

================  for(let key in obj) { } =====================
const user = {
  name: 'rohan', 
  age: 34,
  email: 'rohan@lodu.com',
  phone: 91212193021,
  size: 'M'
}
for(const key in user) {
  console.log(key, ' : ', user[key]) ;
}
---->>> name  :  rohan
        age  :  34
        email  :  rohan@lodu.com
        phone  :  91212193021
        size  :  M

----------------------------------------------
for(const key of Object.keys(user)) {
  console.log(key, user[key]) ;
}
---->>> name rohan
        age 34
        email rohan@lodu.com
        phone 91212193021
        size M
------------------------------------------------
for(const val of Object.values(user)) {
  console.log(val) ;
}
---->>> rohan
        34
        rohan@lodu.com
        91212193021
        M
---------------------------------------------------
for(const entry of Object.entries(user)) {
  console.log(entry) ;
}
---->>> [ 'name', 'rohan' ]
        [ 'age', 34 ]
        [ 'email', 'rohan@lodu.com' ]
        [ 'phone', 91212193021 ]
        [ 'size', 'M' ]
--------------------------------------------------
for(const [key, value] of Object.entries(user)) {
  console.log(key, value) ;
}
---->>> name rohan
        age 34
        email rohan@lodu.com
        phone 91212193021
        size M


================  DESTRUCTURING object =====================
----->>> const { x, y} = obj ;
const user = {
  name: 'rohan', 
  age: 34,
  email: 'rohan@lodu.com',
  phone: 91212193021,
  size: 'M'
}

const { name, age, size } = user ;
console.log(name, age, size) ;
---->>> rohan 34 M
-----------------------------------


const {name: userName, phone: phoneNo} = user ;
console.log(userName, phoneNo) ;
---->>> rohan 91212193021

================  DESTRUCTURING array =====================
const arr = [123, 254, 512, 234, 113] ;
const [x, y, ...z] = arr ;
console.log(x, y, z) ;
---->>> 123 254 [ 512, 234, 113 ]


================  object.function() =====================
const user = {
  name: 'rohan', 
  age: 34,
  email: 'rohan@lodu.com',
  phone: 91212193021,
  size: 'M',
  greeting: function() {
    console.log('hello!! namaskaar!!') ;
  }
}
user.greeting() ;

=================== obj2 = { ...obj1 } ==================
--->> only first layer of nested object is deep copied rest are referenced

const user = {
  name: 'sohan', 
  age: 34,
  email: 'sohan@lodu.com',
  phone: 91212193021,
  size: 'M',
  address: {
    city: 'new delhi',
    state: 'delhi'
  }
}

const user2 = {...user} ;
user2.name = 'shivam' ;

user2.address.city = 'ashok nagar' ;
console.log(user, user2) ;
---->>> {
          name: 'sohan',
          age: 34,
          email: 'sohan@lodu.com',
          phone: 91212193021,
          size: 'M',
          address: { city: 'ashok nagar', state: 'delhi' }
        } 
        {
          name: 'shivam',
          age: 34,
          email: 'sohan@lodu.com',
          phone: 91212193021,
          size: 'M',
          address: { city: 'ashok nagar', state: 'delhi' }
        }

============================ obj2 = structuredClone(obj) ============================
const user = {
  name: 'sohan', 
  age: 34,
  email: 'sohan@lodu.com',
  phone: 91212193021,
  size: 'M',
  address: {
    city: 'new delhi',
    state: 'delhi'
  }
}

const user2 = structuredClone(user) ;
user2.name = 'shivam' ;

user2.address.city = 'ashok nagar' ;
console.log(user, user2) ;
---->>> {
          name: 'sohan',
          age: 34,
          email: 'sohan@lodu.com',
          phone: 91212193021,
          size: 'M',
          address: { city: 'new delhi', state: 'delhi' }
        } 
        {
          name: 'shivam',
          age: 34,
          email: 'sohan@lodu.com',
          phone: 91212193021,
          size: 'M',
          address: { city: 'ashok nagar', state: 'delhi' }
        }
----------------------------------------------------------
const number = {
  0: 'zero',
  1: 'one',
  2: 'two'
}

console.log(number[0], number['0']) ;
console.log(number[1], number['1']) ;
---->>> zero zero
        one one


-----------------------------------------
const sym = Symbol('id') ;
const number = {
  0: 'zero',
  1: 'one',
  2: 'two',
  [sym]: 'Hello ji'
}

console.log(number[sym]) ;
---->>> Hello ji












*/

const sym = Symbol('id') ;
const number = {
  0: 'zero',
  1: 'one',
  2: 'two',
  [sym]: 'Hello ji'
}

console.log(number[sym]) ;
