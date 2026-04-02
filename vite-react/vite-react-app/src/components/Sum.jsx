
import React from "react";

/*
const Sum = React.memo(() => {})

*/
const Sum = React.memo(({N}) => {
  // const N = 10000 ;
  function sumToN() {
    let S = 0 ;
    for(let i=1; i<=N; i++) {
      S += i ;
    }
    return S ;
  }

  console.log('Sum Rendered!') ;
  const total = sumToN() ;

  return (
    <>
      <h2>This is our Math Library</h2>
      <p>Total Sum upto <b>{N}</b> is : <b>{total}</b></p>
    </>
  )
}) ;

export default Sum ;