import { useState } from "react";

import Count from "./Count";
import Product from "./Product";

/*
function Body({count, setCount}) {
  return (
    <>
      <div className="body">
        <h2>I am Blinkit Body</h2>
        <Count count={count} setCount={setCount} />
      </div>
    </>
  )
}

*/



function Body() {

  const [items, setItems] = useState([
    {id: 1, name: 'Milk', price: 120}, 
    {id: 2, name: 'Protien', price: 120}, 
    {id: 3, name: 'Tea', price: 120}, 
    {id: 4, name: 'Rice', price: 120}, 
    {id: 5, name: 'Wheat', price: 120}, 
  ]) ;



  return (
    <>
      <div className="body">
        <h3>I am Blinkit Body</h3>
        {/* <Count /> */}
        <div style={{display: 'flex', gap: '50px'}}>
          {
            items.map((item) => <Product key={item.id} item={item} />)
          }
        </div>
        
      </div>
    </>
  )
}

export default Body ;