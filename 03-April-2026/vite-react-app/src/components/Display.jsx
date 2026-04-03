
import { useContext } from "react";
// import { CountContext } from "../App";

/*
function Display({count}) {
  return (
    <>
      <h2>Display Component: Count: {count}</h2>

    </>
  )
}
*/

function Display() {

  const {count} = useContext(CountContext) ;

  return (
    <>
      <h2>Display Component: Count: {count}</h2>

    </>
  )
}

export default Display ;