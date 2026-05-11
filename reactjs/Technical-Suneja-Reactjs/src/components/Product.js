import React from "react";



class Product extends React.Component {

  constructor(props) {
    super(props) ;
    this.state={
      prodID: 1,
      quantity: 0 
    }
  }

  addToCart=(pid) => {
    this.setState((prevState) => ({
      prodID: pid,
      quantity: prevState.quantity + 1
    }));
  }

  render() {
    return (
      <>
        <div>
          <button onClick={()=> this.addToCart(1)}>Add to Cart</button>
          <Cart productID={this.state.prodID} qty={this.state.quantity}/>

        </div>
        

      </>
    )
  }
  
}

export default Product ;


class Cart extends React.Component {

  constructor(props) {
    super(props) ;
    this.state={
      quantity: this.props.qty
    }
  }

  // updateQuantity = () => {
  //   this.setState({
  //     quantity: this.state.quantity+1
  //   })
  // }

  // before rendering to make changes in props and states
  static getDerivedStateFromProps(props, state) {
    if(props.qty != state.quantity) {
      
    }
    return null ;
  }
  

  componentDidMount=() => {
    console.log("Cart: component mounting done!!") ;
  }

  componentDidUpdate =(prevProps, prevStates) => {
    console.log("Cart: component updation done!!") ;
  }

  render() {
    return (
      <>
          <div>
            <h1><span>CART : </span>{this.props.qty}</h1>
            <button onClick={this.updateQuantity}>Update Quantity</button>
          </div>
      </>
    )
  }
}