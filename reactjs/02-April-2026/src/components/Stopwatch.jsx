import { useRef, useState } from "react";


/*
setTimeout(() => {
  setTime(time+1) ;
}, 1000) ;
'time' is updated outside function but due to closure property of javascript
'time' = 0, and after every 1 sec, time update is to '1' (not changing/increasing=>fixed)


----------------------------

*/

function Stopwatch() {
  // console.log('stopwatch re-rendered!!') ;

  const [time, setTime] = useState(0) ;
  // let setIntervalId = null ; // --> changes everyTime rendered
  
  const setIntervalIdRef = useRef(null) ;

  function handleStart() {

    if(setIntervalIdRef.current != null) {
      // clearInterval(setIntervalIdRef.current) ;
      return ;
    }

    setIntervalIdRef.current = setInterval(() => {
      setTime(time=>time+1) ;
      
    }, 1000) ;
  }

  function handleStop() {
    clearInterval(setIntervalIdRef.current) ;
    setIntervalIdRef.current = null ;
  }

  function handleReset() {
    clearInterval(setIntervalIdRef.current) ;
    setIntervalIdRef.current = null ;
    setTime(0) ;
  }

  return (
    <>
      <h2>STOPWATCH : {time} </h2>
      <div className="container" style={{}}>
        <button onClick={handleStart} className="start">START</button>
        <button onClick={handleStop}  className="stop">STOP</button>
        <button onClick={handleReset} className="reset">RESET</button>
      </div>
    </>
    
  )
}


export default Stopwatch ;