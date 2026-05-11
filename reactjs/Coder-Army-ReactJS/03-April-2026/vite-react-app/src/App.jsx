
import { createContext, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'

/*
------------------------ PROP DRILLING ([App->Body->Count, App->Header->Display])
<Header count={count}/>
<Body count={count} setCount={setCount}/> 
----------------------------------------
<Header count={count}/>
<Body count={count} setCount={setCount}/> 
<Footer />

[App->Body->Count, App->Header->Display]
Intermediate Components(like Body and Header) are rendered even if they are not using these props.
This is a problem of unwanted re-rendering.

solution ---> USECONTEXT hook
producer(createContext) -----> Consumer(useContext)
USECONTEXT --> prevent us from prop drilling..

*/


/*
<CountContext value={{count, setCount}}>
  <Header />
  <Body />
  <Footer />
</CountContext>
*/

// export const CountContext = createContext() ;
export const ProductContext = createContext() ;

function App() {

  // const [count, setCount] = useState(0) ;
  // stete lifting
  
  const [cartItem, setCartItem] = useState(0) ;

  return (
    <>
      <ProductContext value={{cartItem, setCartItem}} >
        <Header />
        <Body />
        <Footer />
      </ProductContext>
      
    </>
  )
}

export default App
