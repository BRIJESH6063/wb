

import { useEffect, useState } from "react";

/*
Javascript is single threaded programming language!

setInterval(() => {
  setTime(new Date().toLocaleTimeString()) ;
}, 1000) ;

as soon as setTime is called Clock is re-rendered 
setInterval is handled by Web API 
Infinite [ setInterval ] is send to WEB API

JUST SEND one setInterval to WEB API
useEffect(() => {
  setInterval(() => {
    setTime(new Date().toLocaleTimeString()) ;
  }, 1000) ;
}, []) ;

Empty dependency array ---> re-renders ONLY ONCE
*/

function Clock() {

  const [time, setTime] = useState(new Date().toLocaleTimeString()) ;

  const [show, setShow] = useState(false) ;

  /*
    The useEffect hook in React runs after the component has rendered and the DOM has been updated
  */
  useEffect(() => {
    if(!show) return ;

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString()) ;
      console.log("clock setInterval called!") ;
    }, 1000) ;
    
    /*
      runs when 'show' value is about to change(in last) and
    */
    return () => clearInterval(intervalId) ;

  }, [show]) ;

  return (
    <>
      <button onClick={()=>setShow(!show)}>{show? "Hide": "Show"}</button>
      {
        show ? <h2>Current Time: {time} </h2> : <></>
      }
    </>
  )
}


export default Clock ;