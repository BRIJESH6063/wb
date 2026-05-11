import { useState, useContext } from "react";
// import { CountContext } from "../App";

/*
function Count({count, setCount}) {

  // const [count, setCount] = useState(0) ;

  return (
    <>
      <div>
        <h1>Count: {count} </h1>
        <div className="btn">
          <button onClick={() => setCount(count+1)}>INCREASE</button>
          <button onClick={() => setCount(count-1)}>DECREASE</button>
        </div>
      </div>
    </>
  )
}
*/



function Count() {

  // const [count, setCount] = useState(0) ;
  // const { count, setCount} = useContext(CountContext) ;

  return (
    <>
      <div>
        <h1>Count: {count} </h1>
        <div className="btn">
          <button onClick={() => setCount(count+1)}>INCREASE</button>
          <button onClick={() => setCount(count-1)}>DECREASE</button>
        </div>
      </div>
    </>
  )
}

export default Count ;