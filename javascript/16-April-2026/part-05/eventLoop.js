

/*
===================   setTimeout   ========================
console.log('Hello Ji') ;
setTimeout(()=> {
    console.log('5 seconds later') ;
}, 5000)
console.log('I am at the end') ;

---->>> Who is countiong seconds/time when javascript is synchronous and busy in executing other code

console.log('Hello Ji') ;
setTimeout(()=> {
    console.log('setTimeout 5 seconds later') ;
}, 5000)
setTimeout(()=> {
    console.log('setTimeout 6 seconds later') ;
}, 6000)
console.log('I am at the end') ;

==============================================================
WEB-API (browser multi threaded) --->> setTimeout/setInterval, DOM API, fetch, local storage, console.log, location



*/