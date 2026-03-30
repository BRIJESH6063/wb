console.log("starting!..") ;
setTimeout(()=> {
    console.log("setTimeout called!!") ;
}, 1000) ;
Promise.resolve().then(()=> console.log("promise resolved")) ;

console.log("ending!!...") ;