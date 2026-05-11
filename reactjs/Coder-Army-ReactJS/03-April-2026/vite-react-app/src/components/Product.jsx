import { useState, useContext } from "react";
import { ProductContext } from "../App";



function Product({item}) {

  const [addToCart, setAddToCart] = useState(false) ;
  const {cartItem, setCartItem} = useContext(ProductContext) ;

  return (
    <>
      <div>
        <p>Name : <b>{item.name}</b> </p>
        <p>Price : <b>{item.price}</b> </p>
        {
          addToCart ? 
            <button onClick={()=>{
                setAddToCart(!addToCart) ;
                setCartItem(cartItem-1) ;
              }}>REMOVE</button> 
            : 
            <button onClick={()=>{
              setAddToCart(!addToCart) ;
              setCartItem(cartItem+1) ;
            }}>ADD</button>
        }
      </div>
    </>
  )
}


export default Product ;