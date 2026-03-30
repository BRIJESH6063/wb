import { useState, useRef, useEffect } from "react";

/*
const reducer = (state, action) => {
  if(action==="reset")
    return 0 ;
  else if(action==="increment") 
    return state+1 ;
  else if(action==="decrement" && state===0) 
    return state
  else return state-1 ;
}

*/






const Reducer = () => {
  // const [count, dispatch] = useReducer(reducer, 0) ;

  /*
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current) ;
  };
  */

  /*
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current++;
    // console.log("Ref value:", countRef.current);
  }; 
  */

  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      {/* <div>
        <h1>Count: {count}</h1>
        <div className="btnIncr">
          <button onClick={() => dispatch("increment")}>Increase Count</button>
        </div>
        <div className="btnDecr">
          <button onClick={() => dispatch("decrement")}>Decrease Count</button>
        </div>
        <div className="btnReset">
          <button onClick={() => dispatch("reset")}>Reset Count</button>
        </div> 
    </div> */}
        {/*
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={handleFocus}>Focus Input</button>
        </div>
        */}
      
      {/*
      <div>
        <h2>Count Ref : {countRef.current}</h2> <br />
        <button onClick={increment}>Increment Ref</button> <br />
        <h2>RenderCount: {renderCount}</h2> <br />
        <button onClick={() => setRenderCount(renderCount + 1)}>
          Re-render
        </button>
      </div>

      */}
      
      <div>
        <p>Current: {count}</p>
        <p>Previous: {prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}


export default Reducer ;