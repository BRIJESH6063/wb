import React from "react";
import './Style.css'

function Stylesheet (props) {
  const styleClass = (props.isColorRed) ? "style1" : "style2" ;
  return (
    <>
      <div className={styleClass}>
        <h3>Hello!, STYLESHEET COMPONENT</h3>
      </div>
    </>
  )
}

export default Stylesheet ;