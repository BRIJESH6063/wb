import React from "react";

function Testing (props) {
  // <p>{props.key} </p> // -- wont work because, <key, value> pair
  return (
    <>
      <p>{props.value} </p>
    </>
  )
}


export default Testing ;