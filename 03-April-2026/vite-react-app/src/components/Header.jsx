import Cart from "./Cart";
import Display from "./Display";



/*
function Header({ count }) {
  return (
    <>
      <h2>I am Blinkit</h2>
      <Display count={count}/>
    </>
  )
}

*/


function Header() {
  return (
    <>
      <h2>I am Blinkit</h2>
      {/* <Display /> */}
      <Cart />
    </>
  )
}

export default Header ;