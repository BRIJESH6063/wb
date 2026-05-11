import { useState } from "react"



/*
-----------------------------------------------------------
const [countArray, setCountArray] = useState([10, 20, 30]) ;
countArray.push(40) ;
setCountArray(countArray) ;

before re-rendering Old VDOM compares [ countArray ] with New VDOM
compare takes place by REFERENCE.
since even after push in array, reference remains same(no change)
The Changed Array is not rendered on realDOM / browser.

-----------------------------------------------------------
setCountArray([...countArray, 40]) ;
[...countArray, 40] --> new Array[new Refference] with old + new values
problem solved
*/






function ArrayRender() {

  const [countArray, setCountArray] = useState([10, 20, 30]) ;

  function handleChange() {
    // countArray.push(40) ;
    // setCountArray(countArray) ;
    setCountArray([...countArray, 40]) ;
  } 


  return (
    <>
      <h1>Count: {countArray}</h1>
      <button onClick={handleChange}>Add 40</button>
    </>
  )
}

export default ArrayRender ;