

function Header() {
  return (
    <>
      <h1>Hello! Election Comission of INDIA (ECI) </h1>
    </>
  )
}

function Main() {
  const parties = [
    "Bhartiya Janata Party",
    "Indian National Congress",
    "Trinamool Congress",
    "Communist Party of India",
    "Aam Admi Party"
  ]
  return (
    <>
      <h2>The Political parties participating in LSEs 2025 </h2>
      <ul>
        {
          parties.map((party) => {
            return <li key={party} >{party}</li>
          })
        }
      </ul>
    </>
  )
}

function Footer() {
  return (
    <>
      <p>@Copyright Election Comission of INDIA (ECI) </p>
    </>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(<App />)



/*
The above application file arrangement is not OPTIMISED.
We have entire code of React, ReactDOM and Babel but we hardly use a section of it.

We need to pass react part(only required ones) in each jsx file.
BUNDLER --> provides optimised bundling of react.js
eg -  Vite
      Webpack
      Parcel

VITE --> powerful 
does NOT need BABEL ---> because ESBuild is present in VITE which is much better than BABEL

NPM --> Node Package Manager
 
*/