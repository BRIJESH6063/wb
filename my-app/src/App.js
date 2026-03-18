import React from 'react';
// import Channel from './components/Channel' ;
// import FunctionClick from './components/FunctionClick' ;
// import FnClick from './components/FnClick';
// import ThisBind from './components/ThisBind';
// import Fragment from './components/Fragment';
// import List from './components/List';
// import {HeaderTemp} from './components/HeaderTemp' ;
// import CHeader from './components/CHeader';
// import Footer from './components/Footer' ;
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import Style from './appstyle.module.css' ;
// import Form from './components/Form';
// import Routing from './components/Routing';
import Product from './components/Product' ;
// import LifeCycleA from './components/LifeCycleA';
import './appstyle.css' ;
import './App.css';


/*
const greet = <span>Hello, Rehman Baloch!!</span> ;
const newComponent = React.createElement("h3", {className:"newc"}, "New component added") ;

const sayHello = function() {
  alert("Namaskaar, Hosh me aaao abhijeet!") ;
}

const ageVerify = (a) => {
  if(a>18) return <span>You are fucking eligible to watch porn! Watch openly</span>
  else return <span>You are NOT fucking eligible to watch porn! Watch secretly</span> 
}

*/

function App() {
  // const numbers = [121, 232, 321, 782, 210, 110] ;
  return (
    <div className="App">
      {/* <h2>Assalawaleykum Liyaaarii -- {greet}</h2>
      {newComponent}
      <div className="btn">
        <button onClick={sayHello}>Greet</button>
      </div>
      <br />
      <div className="age"> 
        {ageVerify(12)}
      </div> */}

      {/* <div className="cmp">
          <HeaderTemp name="rajesh" last="dhakad">
            <p>Laal phool neela phool rajesh bhaiya beautiful</p>
          </HeaderTemp>
          <HeaderTemp name="shivam" last="dalal"/>
          <HeaderTemp name="anuj"/>
          <CHeader name="rajesh" last="dhakad"> 
            <p>Laal phool neela phool rajesh bhaiya beautiful</p>
          </CHeader>
          <Footer />
      </div> */}

      {/* <div className="channel">
        <Channel /> <br />
        <FunctionClick /> <br />
        <FnClick /> <br />
        <ThisBind rollNo="212AA1"/> <br />
      </div>
      
      <div className="fragment">
        <Fragment />
      </div> */}

      {/* <div className="list">
        <List numbers={numbers}/>
      </div> */}

      {/* <div>
        <Stylesheet isColorRed={false}/>
        <Inline />

        <p className={Style.success}>SUCCESS</p> 
        <p className='error'>ERROR</p>
         
          {Style.success} --> module css(appstyle.module.css) not common for all -- ONLY SPECIFIC(who import Style css module)
          'error' className is common and APPLIED TO ALL element with classname error. 
        
      </div>
      */}

        {/* <div>
          <Form />
        </div> */}

        {/* <div>
          <Routing />
        </div> */}


        {/* <LifeCycleA /> */}

        <div>
          <Product />
        </div>


    </div> 
    
    
  );
}


/*
class App extends React.Component {
  render() {
    return (
      <h2>Welcome Class Component Reactjs</h2>
    )
  }
}
*/ 


export default App;
