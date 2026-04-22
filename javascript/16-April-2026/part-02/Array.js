/*

================  SHIFT and UNSHIFT  ===================
let arr = [12, 13, 14, 15, 16] ;
---->> SHIFT() (delete from front, returns first element)
console.log(arr.shift()) ; 

---->> UNSHIFT(x) (add x in front, returns length of array after unshift)
console.log(arr.unshift(1000)) ;
console.log(arr.unshift(2000)) ;
console.log(arr) ; 
---->>> 12
        5
        6
        [ 2000, 1000, 13, 14, 15, 16 ]

================  FOR - OF  ===================
let arr = [12, 13, 14, 15, 16] ;
for(let x of arr) {
  x += 100000 ;
  console.log(x) ;
}

console.log(arr) ;
---->>> 100012
        100013
        100014
        100015
        100016
        [ 12, 13, 14, 15, 16 ]


================  SLICE and SPLICE  ===================
const arr1 = [101, 102, 103, 104, 105, 106] ;
const arr2 = arr1.slice(2, 5) ;
console.log('arr1 (after slice) : ', arr1) ;
console.log('arr2 (after slice) : ', arr2) ;

const arr3 = arr1.splice(2, 5) ;
console.log('arr1 (after splice) : ', arr1) ;
console.log('arr3 (after splice) : ', arr3) ;

---->>> arr1 (after slice) :  [ 101, 102, 103, 104, 105, 106 ]
        arr2 (after slice) :  [ 103, 104, 105 ]
        arr1 (after splice) :  [ 101, 102 ]
        arr3 (after splice) :  [ 103, 104, 105, 106 ]



================  CONCAT  ===================
const arr1 = [101, 102, 103, 104, 105, 106] ;
const arr2 = [1, 2, 3, 4] ;

const arr3 = arr1.concat(arr2) ;

console.log('arr1 (after concatenation)', arr1) ;
console.log('arr2 (after concatenation)', arr2) ;
console.log('arr3 (after concatenation)', arr3) ;

---->>> arr1 (after concatenation) [ 101, 102, 103, 104, 105, 106 ]
        arr2 (after concatenation) [ 1, 2, 3, 4 ]
        arr3 (after concatenation) [ 101, 102, 103, 104, 105, 106,   1,   2,   3,   4 ]


================  SPREAD (...arr) ===================
const arr1 = [101, 102, 103, 104, 105, 106] ;
const arr2 = [1, 2, 3, 4, ...arr1] ;

console.log('arr1 : ', arr1) ;
console.log('arr2 : ', arr2) ;


const arr1 = [101, 102, 103, 104, 105, 106] ;
console.log(arr1.toString(), typeof arr1.toString()) ;
console.log(arr1.join('-'), typeof arr1.join('-')) ;
console.log(arr1.lastIndexOf(103)) ;
console.log(arr1.includes(103)) ;
---->>> 101,102,103,104,105,106 string
        101-102-103-104-105-106 string
        2
        true


const names = ['brijesh', 'Brijesh'] ;
console.log(names.sort()) ;
console.log(names) ;
---->>> [ 'Brijesh', 'brijesh' ]
        [ 'Brijesh', 'brijesh' ]


const nums = [112, 10, 298, 35, 463] ;
nums.sort((a, b) => a-b) ;
console.log(nums) ;
---->>> ASCENDING ORDER (a>b : a-b=+ve)
nums.sort((a, b) => b-a) ;
console.log(nums) ;
---->>> DESCENDING ORDER (a>b : b-a=-ve)


================  FLAT and FLAT(Infinity) ===================


=============== Array is Object   ==================
const array = [121, 435, 122, 566, 234] ;
console.log(typeof array)
array.name = 'rahul jhpdeewala' ;
console.log(array) ;
---->>> object
        [ 121, 435, 122, 566, 234, name: 'rahul jhpdeewala' ]



*/


const array = [121, 435, 122, 566, 234] ;
console.log(typeof array)
array.name = 'rahul jhpdeewala' ;
console.log(array) ;



