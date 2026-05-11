
const element = React.createElement("h1", {id: "title"}, "Hello Coder Army!") ;
const div = React.createElement("div", null, element) ;

/*
const div = React.createElement("div", null, 
  React.createElement("div", null, 
    React.createElement("div", null, 
      React.createElement("h1", {id: "title"}, "Hello Coder Army!"
      )
    )
  )
) ;

*/

/* JSX Code --> */
const element_jsx = <h1 id="title">Hello Coder Army!</h1>
const element_jsx2 = (
  <div className="div2" id="second">
    <h3>Hello element 2</h3>
  </div>
) ;

const element_jsx3 = (
  <div className="div3" id="second">
    <h1>Hello Coder Army!</h1>
    <h2>Welcome to React from Scratch!.</h2>
  </div>
) ;

/*
root.render(element_html) ; ---> doesnot fucking support 
We need someone who convert [ <h1 id="title">Hello Coder Army!</h1> ]
into element = React.createElement("h1", {id: "title"}, "Hello Coder Army!") ;

BABEL --> add babel cdn
converts JSX ----> React.createElement("h1", {id: "title"}, "Hello Coder Army!") ;

JSX --> React.createElement() ---> React Element(JS Object) ---> Real DOM (HTML element)
    [Babel]                   [React]                       [React DOM]



<div className="div2" id="second">  --> not HTML, React Element(since class(html) className(react element))
*/


/*
REACT COMPONENT --> Function that returns JSX which can be further compiled(by BABEL) to React Element
Which can be further rendered(by ReactDOM) to ROOT

<h1>Hello { name } from App React Component!</h1>
{ name } ---> javascript expression can be written here!
Number String Boolean Null Undefined Array Object

1. { true }
2. { null }
3. { undefined } 
4. { {name: "Rahul", age: 44} }  // BIG ERROR
The above print nothing on browser.
Object(including functions) --> browser doesnot know how object can be displayed

<ul>
  { [ <li>HTML</li>, <li>CSS</li>, <li>Javascript</li>, <li>ReactJs</li>] } 
</ul>
====> React.createElement("ul", null, [
  React.createElement("li", null, "HTML") , 
  React.createElement("li", null, "CSS") ,
  React.createElement("li", null, "Javascript") ,
  React.createElement("li", null, "React.js") 
]) ;
*/

/*
const list = React.createElement("ul", null, [
  React.createElement("li", null, "HTML") , 
  React.createElement("li", null, "CSS") ,
  React.createElement("li", null, "Javascript") ,
  React.createElement("li", null, "React.js") 
]) ;
*/


/*
function App(name, age) {
  return (
    <div>
      <h1>Hello { name } The {age>18?"Adult":"Bachche"}, from App React Component!</h1>
      <h2>Hello Coder Army!!</h2>
      { 12412+1000 }
      { "kyaa chal rahaa laadleeyy!!" }
      <ul>
        { [ <li>HTML</li>, <li>CSS</li>, <li>Javascript</li>, <li>ReactJs</li>] } 
      </ul>
      
      { true }
      { null }
      { undefined } 
      { {name: "Rahul", age: 44} } 
    </div>
  )
}
*/

/*
React Component names start with CAPITAL letter because all HTML tags start with small letters
So in order to differenciate between React Component and HTML tag
<h1></h1> <--------------> <App />
*/
function App(props) {
  return (
    <div>
      <h1>Hello { props.name } The { props.age>18?"Adult":"Bachche" }, from App React Component!</h1>
      <h2>Hello Coder Army!!</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root")) ;
// root.render(element_jsx) ;  
// root.render(App()) ; // works
// root.render(App("Rohit", 23)) ;

/*
<App name="Rohit" age={30} /> -->
const props = {
  name: "Rohit",
  age: 30
}
props is accessible in React Component as 
App(props) {
  return (<></>)
} 

*/

root.render(<App name="Rohit" age={11} />) ;


// root.render(list) ;