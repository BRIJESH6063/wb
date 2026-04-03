import { useState, useRef } from "react";


/*
FORM HANDLED BY REACT ---> renders at every key
------------------------------------------------------------------------------
const [email, setEmail] = useState('') ;
const [password, setPassword] = useState('') ;

<form action="" onSubmit={handleFormSubmit}>
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  <button type='submit'>SUBMIT</button>
</form>

FORM HANDLED BY REAL-DOM ---> no render
------------------------------------------------------------------------------
*/


function Login() {
  
  const emailRef = useRef(null) ;
  const passwordRef = useRef(null) ;

  
  console.log('re-render') ;

  function handleFormSubmit(e) {
    e.preventDefault() ;

    console.log(emailRef.current.value) ;
    console.log(passwordRef.current.value) ;
  }

  

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef}  />
        <button type='submit'>SUBMIT</button>
      </form>
    </>
  )
}



export default Login ;