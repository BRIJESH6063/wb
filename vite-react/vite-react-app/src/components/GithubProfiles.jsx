import { useState, useEffect } from "react";

/*
[
  async function GetGithubProfiles() {
    const response = await fetch("https://api.github.com/users") ;
    const data = await response.json() ;
    setUser(data) ;  // re-renders the COMPONENT
    console.log(data) ;
  }
  GetGithubProfiles() ;
]
setUser(data) ;  // re-renders the COMPONENT
and re-fetch data and print data 
setUser(data) -> will re- render the COMPONENT and so on ...  INFINTE LOOP 

We cannot directly call [ GetGithubProfiles() ; ]

A HOOK can fix this shit --> 
useEffect(() => {}, [dependencies...])

Executes only when dependency is triggered
without dependency -> INFINITE LOOP

empty Array -> Triggered [ only once ]


*/

/*
<input type="text" value={name} onChange={handleInputChange}/> 

function handleInputChange(event) {
  console.log(event.target.value) ;
  setName(event.target.value.toUpperCase()) ;
}

*/

/*
<input type="number" value={count} onChange={handleProfileCounts}/> 

----------------->> when COUNT changes
useEffect(() => {
    GetGithubProfiles() ;
  }, [count]) ;
*/
const GithubProfiles = () => {

  const [users, setUser] = useState([]) ;
  // const [name, setName] = useState('') ;
  const [count, setCount] = useState(30) ;

  async function GetGithubProfiles() {
    const response = await fetch(`https://api.github.com/users?per_page=${count}`) ;
    const data = await response.json() ;
    // console.log(data) ;
    setUser(data) ;
  }

  useEffect(() => {
    GetGithubProfiles() ;
  }, [count]) ;

  function handleInputChange(event) {
    console.log(event.target.value) ;
    setName(event.target.value.toUpperCase()) ;
  }

  function handleProfileCounts(event) {
    setCount(event.target.value) ;
  }
  

  return (
    <>
      <h1>Hello Github profiles</h1>

      <input type="number" value={count} onChange={handleProfileCounts}/> 

      <div className="content" 
        style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
        {
          users.map((user) => (
            <img src={user.avatar_url} alt="avatar" height="100px" width="100px" key={user.id} />
          ))
        }
      </div>
    </>
  )
}

export default GithubProfiles ;