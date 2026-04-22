
import { useState, useMemo, useCallback } from "react";
import Sum from "./Sum";
import Post from "./Post";

/*
Memo(parent) --> Sum(child)
Sum(Child) completely independent from Parent
To prevent Child to render again and again, we use React.memo
We dont need to render child since we did not change child component.
we only need to re render Memo that is Parent Component

const Child = React.Memo(() => {
  return (
    <>Child</>
  )  
})

React.Memo --> compares the argument passed to child component
if argument of child component is constant(doesnot change) there is no need to re render Child component.
else call the child component

--------------------------------
function calculatePrime --> is calculated every time the Memo page re renders.
To prevent so(until number variable doesnot change) we can use useMemo

const calculatePrime = useMemo(() => {
  // prime number logic  
}, [dependencies])


--------------------------

useMemo handles VALUE
useCallback handles FUNCTION
function does not create everytime page/component re renders.
it saves memory.

--------------------------
<Post value={{name: "Vishal", age: 25}}/>
here object is created again and again as the component Memo renders and 
it tries to match argument object, since all objects created have different refference
and their matching content does not matter while processing useMemo on Post component 

*/



const Memo = function () {

  const [count, setCount] = useState(0) ;
  const [number, setNumber] = useState(100000) ;

  /*
  function calculatePrime() {
    console.log("calculationg prime value!") ;
    let total = 0 ;
    if(number>1) total++ ;

    for(let i=3; i<=number; i++) {
      total++ ;
      for(let j=2; j<i; j++) {
        if(i%j==0) {
          total-- ;
          break ;
        }
      }
    }
    return total ;
  }
  const prime = calculatePrime() ;
  */

  const prime = useMemo(() => {
    console.log("calculationg prime value!") ;
    let total = 0 ;
    if(number>1) total++ ;

    for(let i=3; i<=number; i++) {
      total++ ;
      for(let j=2; j<i; j++) {
        if(i%j==0) {
          total-- ;
          break ;
        }
      }
    }
    return total ;
  }, [number]) ;

  // without useCallback
  /*
  const handleClick = function () {
    console.log("Handle click button Triggered!!..") ;
  }
  */
  

  // with useCallback
  const handleClick = useCallback(() => {
    console.log("Handle click button Triggered!!..", count) ;
  }, [count]) ;

  // memorize object 
  const obj = useMemo(() => {
    return {
      name: "Vishal", 
      age: 25
    }
  }, [])

  console.log("Rerendering Memo Component") ;
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count+1) }>Increase Count</button>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number+1) }>Increase Number</button>

      <div className="click" style={{margin: "20px"}} >
        <button onClick={handleClick}>Click Handle</button>
      </div>
      

      <h2>Total Prime Numbers till {number} is : {prime} </h2>
      <Sum number={number} />
      <Post value={obj}/>
    </>
  )
}


export default Memo ;