import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
} from "react-router-dom";


export default function Routing () {



  return (
    <>
      <h1>WELCOME TO ROUTING</h1>

      
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>

      </Router>


      
      
    </>
  )
}



function Home() {
  return <h1>Hello Home Component Routed</h1>
}

function About() {
  return <h1>Hello About Component Routed</h1>
}

function Users() {
  return <h1>Hello Users Component Routed</h1>
}

