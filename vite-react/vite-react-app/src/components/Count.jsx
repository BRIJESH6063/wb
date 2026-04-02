import { useState } from 'react' ;


/*
// named export 
export function Mohit() {
  return (
    <>
      <h2>Hello, I am Mohit</h2>
    </>
  )
}

export function Rohit() {
  return (
    <>
      <h2>Hello, I am Rohit</h2>
    </>
  )
}
*/

// default export 
export default function Count() {
  
  /*
  let count = 0 ;

  function increaseCount() {
    count++ ;
    const count_element = document.querySelector('h2') ;
    count_element.textContent = `Count : ${count}` ;
    //
    //  you wont see updated value on browser untill you update the element's textContent
    //  If count is used at 100 place we need to change textContent at all those place
    //  We need Hooks
    //
    console.log(count) ;
  }
  */

  let [count, setCount] = useState(0) ;

  function increaseCount() {
    /*
      count++ ;
      setCount(count) ; // send signal to update count 'state' and re-renders Component
    */
    setCount(count+1) ;
  } 

  function decreaseCount() {
    setCount(count-1) ;
  }

  return (
    <>
      <h1>Hello Coder Army!</h1>
      <div className="counter">
        <h2>Count : { count }</h2>
        <button onClick={increaseCount}> Increase Count </button>
        <button onClick={decreaseCount}> Decrease Count </button>
      </div>
    </>
  )
}



