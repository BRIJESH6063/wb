import React from "react";


const Sum = React.memo(({ number }) => {
  const sum = () => {
    let TS = 0 ;
    for(let i=1; i<=number; i++) {
      TS += i ;
    }
    return TS ;
  }

  const total = sum() ;
  console.log("Rerendering Sum Component") ;

  return (
    <>
      <h1>This is our Math Library</h1>
      <h2>Total Sum till {number} is: {total}</h2>
    </>
  )
})

/*
const Sum = () => {
  const sum = () => {
    let TS = 0 ;
    for(let i=1; i<=100; i++) {
      TS += i ;
    }
    return TS ;
  }

  const total = sum() ;
  console.log("Rerendering Sum Component") ;

  return (
    <>
      <h1>This is our Math Library</h1>
      <h2>Total Sum : {total}</h2>
    </>
  )
} 
  

*/

export default Sum ;