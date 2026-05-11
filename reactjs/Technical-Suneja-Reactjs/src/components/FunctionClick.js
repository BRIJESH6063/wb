import React from "react" ;



class FunctionClick extends React.Component {
  
  changeEvent() {
    console.log("event change method called!! CLASS component") ;
  }


  render() {
    return (
      <>
        <div className="fbtn">
          <button onClick={this.changeEvent}>Click Class EventChange Method</button>
        </div>
      </>
    )
  }
}

export default FunctionClick ;