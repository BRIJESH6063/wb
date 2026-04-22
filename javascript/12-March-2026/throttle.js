function clickThrottleButton(fn, t) {
  return () => {
    document.getElementById("throttle").disabled=true ;
    setTimeout(()=> {
      fn() ;
      document.getElementById("throttle").disabled=false ;
    }, t) ;
  }
}

const clickThrottle = clickThrottleButton(()=> {
  console.log("Throttle button clicked!!") ;
}, 1000) ;
