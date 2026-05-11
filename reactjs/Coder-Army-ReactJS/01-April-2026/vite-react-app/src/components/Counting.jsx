
import { useState } from "react"



function Counting({card}) {

  const [count, setCount] = useState(0) ;

  return (
    <div >
    
      <p>Counter App {card}</p>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase Counter {card}</button>
      
    </div>
  )
}


export default Counting ;