import React from "react";


function Inline () {
  

  const inlineStyle = {
    color: 'red' ,
    fontSize: '26px'
  }

  return (
    <>
      <div>
        <p style={inlineStyle} >Inline Stylesheet Component</p>
      </div>
    </>
  )
}

export default Inline ;