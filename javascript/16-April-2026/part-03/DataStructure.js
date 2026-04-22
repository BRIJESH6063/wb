/*

======================  SET  ======================
const arr = [ 10, 20, 30, 20, 15, 10, 5, 90, 87 ]
console.log(arr) ;
const st = new Set(arr) ;
console.log(st) ;

---->>> [
          10, 20, 30, 20, 15,
          10,  5, 90, 87
        ]
        Set(7) { 10, 20, 30, 15, 5, 90, 87 }

--------------------------------------------------------
st.add(11) ;
console.log(st.has(11)) ;
console.log(st.has(111)) ;

st.delete(20) ;
console.log(st) ;
st.clear() ;
console.log(st) ;

---->>> true
        false
        Set(7) { 10, 30, 15, 5, 90, 87, 11 }
        Set(0) {}

-------------------------------------------------------------------------------------------
const emails = ['r1@xyz.com', 'r2@xyz.com', 'r1@xyz.com', 'r3@xyz.com', 'r2@xyz.com'] ;
const uniqueMails = [ ...new Set(emails)]
console.log(uniqueMails) ;

for(uMail of uniqueMails) {
  console.log(uMail) ;
}

---->>> [ 'r1@xyz.com', 'r2@xyz.com', 'r3@xyz.com' ]
        r1@xyz.com
        r2@xyz.com
        r3@xyz.com

=================================  MAP  ================================= 
const m1 = new Map([
  ['Rohit', 40],
  [2, 'Rohit'],
  [10, true],
  [true, 11],
  [[10, 20, 30], 'Mohit']
])

console.log(m1) ;

---->>> Map(5) {
          'Rohit' => 40,
          2 => 'Rohit',
          10 => true,
          true => 11,
          [ 10, 20, 30 ] => 'Mohit'
        }

m1.set({name: 'Rohit', age: 34}, false) ;
console.log(m1) ;

---->>> Map(6) {
          'Rohit' => 40,
          2 => 'Rohit',
          10 => true,
          true => 11,
          [ 10, 20, 30 ] => 'Mohit',
          { name: 'Rohit', age: 34 } => false
        }

for(let [key, value] of m1) {
  console.log(key, value) ;
}

---->>> Rohit 40
        2 Rohit
        10 true
        true 11
        [ 10, 20, 30 ] Mohit
        { name: 'Rohit', age: 34 } false

--------------------------------------------




*/




const m1 = new Map([
  ['Rohit', 40],
  [2, 'Rohit'],
  [10, true],
  [true, 11],
  [[10, 20, 30], 'Mohit']
])

// console.log(m1) ;

m1.set({name: 'Rohit', age: 34}, false) ;

for(let [key, value] of m1) {
  console.log(key, value) ;
}



































