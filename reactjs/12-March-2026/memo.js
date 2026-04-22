/*
Implementing memoization in js
-- Optimising technique to reduce time consuming calculation by saving previous data in cache 
*/


function twoPoweredN(a) {
  let ans = 1 ;
  for(let i=0; i<a; i++) {
    ans = (ans<<1) ;
  }
  return ans ;
}
// console.time() ;
// const tpn = twoPoweredN(10) ;
// console.timeEnd() ;
// console.log(tpn) ;


function memoizeTwoPoweredN(fun) {
  const cache = {} ;
  return function (...args) {
    const n = args[0] ;
    if(n in cache) {
      console.log("cache fetched!!") ;
      return cache[n] ;
    } else {
      console.log("calculating for the first time!!..") ;
      const result = fun(n) ;
      cache[n] = result ;
      return result ;
    }
  }
}

/*
console.time() ;
const z = memoizeTwoPoweredN(twoPoweredN) ;
console.log(z(10)) ;
console.timeEnd() ;

console.time() ;
console.log(z(10)) ;
console.timeEnd() ;
*/

