

import { useContext } from "react";
import { ProductContext } from "../App";

function Cart() {

  const { cartItem } = useContext(ProductContext) ;

  return (
    <>
      <p>Total Items : <b>{cartItem}</b> </p>
    </>
  )
}

export default Cart ;