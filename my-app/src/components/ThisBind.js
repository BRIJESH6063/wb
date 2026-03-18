import React from "react";

class ThisBind extends React.Component {

  constructor(props) {
    super(props) ;
    // this.changeEvent = this.changeEvent.bind(this) ;
    // now you can use 'this' in changeEvent method as well!

    this.state= {
      course: "B.Tech" ,
      rollNo: this.props.rollNo
    }
  }

  // arrow function --> binding is not required!!
  changeEvent = ()=> {

    console.log("THIS reference gives: ", this) ;
    console.log(this.state.course) ;

    this.setState({
      course: "M.Tech"
    })
    console.log(this.props.rollNo) ;
  }

  changeAnchorEvent(e) {
    e.preventDefault() ;
    console.log("anchor tag prevented to access link!!") ;
  }
  
  // non arrow function --> binding is required!! --> better use (ARROW FUNCTION) if (NOT BINDING)
  // changeEvent() {
  //   console.log("THIS reference gives: ", this) ;
  //   console.log(this.state.course) ;
  // }

  render() {
    return (
      <>
        <div className="thisbind">
          <p>Roll Number props - {this.props.rollNo}</p>
          <p>Roll Number state - {this.state.rollNo}</p>
          <p>{this.state.course}</p>
          <button onClick={this.changeEvent}>This Bind Button</button>
          <br /> <br />

          <a href="https://youtube.com" onClick={this.changeAnchorEvent}>Youtube Link</a>
        </div>
      </>
    )
  }
}

export default ThisBind ;