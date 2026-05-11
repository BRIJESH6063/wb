import React from "react" ;


class Channel extends React.Component {
  constructor() {
    super() ;
    this.state= {
      msg: "Technical Suneja Youtube Channel!"
    }
  }

  subscribe() {
    this.setState({
      msg: "Thank you! for Subscribing Technical Suneja Youtube Channel!"
    })
  }

  render() {
    return (
      <>
        <p>{this.state.msg}</p>
        <button onClick={() => this.subscribe() }>Subscribe</button> <br />
      </>
    )
  }
}

export default Channel ;