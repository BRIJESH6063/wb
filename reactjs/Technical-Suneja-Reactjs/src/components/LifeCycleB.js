import React from "react";



class LifeCycleB extends React.Component {
  constructor(props) {
    super(props) ;
    this.state={

    }
    console.log("LifeCycleB : constructor") ;
  }

  // before rendering to make changes in props and states
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB : getDerivedStateFromProps") ;
    return null ;
  }

  // called after render
  componentDidMount() {
    console.log("LifeCycleB : componentDidMount") ;
  }



  render() {
    console.log("LifeCycleB : render") ;

    return (
      <>
        <>LifeCycleB : return</>
      </>
    )
  }
}


export default LifeCycleB ;