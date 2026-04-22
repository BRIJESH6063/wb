/*

======================= forEach(fun) ============================
const arr = [10, 20, 30, 5, 90, 87] ;
arr.forEach((number, index, array) => {
  console.log(number, index, array) ; 
})

-------------------------------------------
10 0 [ 10, 20, 30, 5, 90, 87 ]
20 1 [ 10, 20, 30, 5, 90, 87 ]
30 2 [ 10, 20, 30, 5, 90, 87 ]
5 3  [ 10, 20, 30, 5, 90, 87 ]
90 4 [ 10, 20, 30, 5, 90, 87 ]
87 5 [ 10, 20, 30, 5, 90, 87 ]

======================= arr.filter ============================
const arr = [10, 20, 30, 5, 90, 87] ;
const numsGT25 = arr.filter((num) => num>=25) ;
console.log(numsGT25) ;
---->>> [ 30, 90, 87 ]

--------- create your own filter fun ------------------
const arr = [10, 20, 30, 5, 90, 87] ;
arr.customFilter = function(compare) {
  const ans = [] ;
  for(const x of this) {
    if(compare(x)) {
      ans.push(x) ;
    }
  }
  return ans ;
}

---->> arr.customFilter ==> only available in 'arr' Array Object
---->> in order to generalize it Array.customFilter(..){ .. }
const filterData = arr.customFilter((num) => num>=25) ;
console.log(filterData) ;
---->>> [ 30, 90, 87 ]

---------------- Object's prototype method filter -----------------
const arr1 = [10, 20, 30, 5, 90, 87] ;
const arr2 = [10, 34, 56, 11,, 20, 21] ;
Array.prototype.customFilter = function(compare) {
  const ans = [] ;
  for(const x of this) {
    if(compare(x)) {
      ans.push(x) ;
    }
  }
  return ans ;
}

const filterData1 = arr1.customFilter((num) => num>=25) ;
const filterData2 = arr2.customFilter((num) => num>=25) ;
console.log(filterData1) ;
console.log(filterData2) ;

========================= reduce(fun) ==========================
const arr1 = [10, 20, 30, 5, 90, 87] ;
console.log(arr1.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue) ;
  return accumulator+currentValue ;
})) ;
---->>> 10 20
        30 30
        60 5
        65 90
        155 87
        242

--------------------- initialize accumulator=0 ----------------------

const arr1 = [10, 20, 30, 5, 90, 87] ;

console.log(arr1.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue) ;
  return accumulator+currentValue ;
}, 0)) ;

---->>> 0 10
        10 20
        30 30
        60 5
        65 90
        155 87
        242





*/

const arr1 = [10, 20, 30, 5, 90, 87] ;
const arr2 = [10, 34, 56, 11,, 20, 21] ;


console.log(arr1.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue) ;
  return accumulator+currentValue ;
}, 0)) ;