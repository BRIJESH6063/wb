import { useState, useMemo, useCallback } from "react";


import Sum from "./Sum";
import Post from "./Post";


function Math() {
  
  const [count, setCount] = useState(0) ;
  const [number, setNumber] = useState(50000) ;
  
  console.log('Math Rendered!') ;

  function calculatePrime() {
    console.log("prime number calculation called!") ;
    let prime=0 ;
    if(number>1) prime++ ;
    
    for(let i=3; i<=number; i++) {
      prime++ ;
      for(let j=2; j<i; j++) {
        if(i%j == 0) {
          prime-- ;
          break ;
        }
      }
    }

    return prime ;
  }

  const totalPrimes = useMemo(() => calculatePrime() , [number]) ;
  // totalPrimes created/computed again when number changes

  /*
    function handleClick() {
      console.log("Click Triggered!!") ;
    }
    handleClick() ;
    --- Prevent Function called every time Math renders 
    --- only called when dependency is triggered!!
    --- USECALLBACK work (for function) same as USEMEMO work for calculated value
  */
  
  const handleClick = useCallback(() => console.log('handle Click Triggered!!', count), [count])
  // function created again when count changes

  const obj = useMemo(() => { return {name: 'Rohit', age: 43} }, []) ;
  // 'useMemo' - memorise the value across the re-render

  
  return (
    <>
      <h2>Hello from Math Page</h2>
      <p>Count Value: <b>{count}</b> </p>
      <button onClick={() => setCount(count+1) }>Increase Count</button>

      <p>Number Value: <b>{number}</b></p>

      <p>Total Prime Numbers upto <b>{number}</b> is <b>{totalPrimes}</b></p>


      <button onClick={() => setNumber(number+500)}>Increase Number</button>
      <Sum N={number}/>

      <div className="useCallbackFun">
        <button onClick={handleClick}>UseCallback Click</button>
      </div>

      {/* <Post value={{name: 'Rohit', age: 43}}/> */}
      <Post value={obj}/>
    </>
  )
}


/*
<Post value={{name: 'Rohit', age: 43}}/>
every time page re-renders it create new Object with different Reference
Prop is compared with previous prop object(on basis of reference)
hence, Post will be rendered every time Math is rendered.

'useMemo' - memorise the value across the re-render

*/

export default Math ;