import { useState } from "react"




function Login2() {
  const [name, setName] = useState('') ;
  const [age, setAge] = useState('') ;
  const [password, setPassword] = useState('') ;

  console.log('Re-render') ;
  
  function handleFormSubmit(e) {
    e.preventDefault() ;
    console.log(name) ;
    console.log(age) ;
    console.log(password) ;
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="formName">
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
          <label htmlFor="">Name</label>
        </div>
        <div className="formAge">
          <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}></input>
          <label htmlFor="">Age</label>
        </div>
        <div className="formPassword">
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          <label htmlFor="">Password</label>
        </div>
        <div className="submit">
          <button type='submit'>SUBMIT</button>
        </div>
      </form>
    </>
  )
}

export default Login2 ;