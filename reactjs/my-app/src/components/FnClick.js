import React from "react" ;


function FnClick() {
  const eventChangeFun = function () {
    console.log("event change method called!! FUNCTION component") ;
    // this -> is not accessible for function component
  }
  return (
    <>
      <div className="fclick">
        <button onClick={eventChangeFun}>Click Function EventChange</button>
      </div>
    </>
  )
}

export default FnClick ;