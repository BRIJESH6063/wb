import React from "react";
import LifeCycleB from "./LifeCycleB";



class LifeCycleA extends React.Component {
  constructor(props) {
    super(props) ;
    this.state={
      name: "Ajay"
    }
    console.log("LifeCycleA : constructor") ;
  }

  // before rendering to make changes in props and states
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA : getDerivedStateFromProps") ;
    return null ;
  }

  // called after render
  componentDidMount() {
    console.log("LifeCycleA : componentDidMount") ;
  }



  render() {
    console.log("LifeCycleA : render") ;

    return (
      <>
        <div>LifeCycleA : return</div>
        <LifeCycleB />
      </>
    )
  }
}


export default LifeCycleA ;