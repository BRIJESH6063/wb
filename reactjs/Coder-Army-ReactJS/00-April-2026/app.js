/*
const element = document.createElement(tag) ;
element.textContent=children ;

const element1 = document.createElement("h1") ;
element1.textContent = "Hello Coder Army!" ;
element1.className = "element" ;
element1.id = "first" ;
element1.style.fontSize = "30px" ;
element1.style.backgroundColor= "red" ;
element1.style.color="white" ;

const element2 = document.createElement("h1") ;
element2.textContent = "Strike Launched" ;
element2.className = "element" ;
element2.id = "second" ;
element2.style.fontSize = "20px" ;
element2.style.backgroundColor= "green" ;
element2.style.color="white" ;
*/

/*
function createElement(tag, attributes, children) {
  const element = document.createElement(tag) ;
  element.textContent=children ;
  
  for (let key in attributes) {
    if (key === "style") {
      
      // const styles = attributes[key];
      // for (let styleName in styles) {
      //   element.style[styleName] = styles[styleName];
      // }
      
      // copy attributes.style in element.style
      Object.assign(element.style, attributes.style) ;
    } else {
      element[key] = attributes[key];
    }
  }
  return element ;
}
*/

/*
const React = {
  createElement: function(tag, attributes, children) {
    const element = document.createElement(tag) ;
    element.textContent=children ;
    
    for (let key in attributes) {
      if (key === "style") {
        // copy attributes.style in element.style
        Object.assign(element.style, attributes.style) ;
      } else {
        element[key] = attributes[key];
      }
    }
    return element ;
  }
}

const ReactDOM = {
  render: function(child, parent) {
    parent.append(child ) ;
  }
}
*/

/*
const React = {
  createElement: function (type, props, children) {
    return {
      type: type,
      props: {
        ...props,
        children: children
      }
    }
  }
}

const ReactDOM = {
  render: function(reactElement, root) {
    root.innerHTML = '' ; // clear the root and then render 
    const element = document.createElement(reactElement.type) ;
    const { props } = reactElement ;

    for(const key in  props) {
      if(key === 'style') {
        Object.assign(element.style, props.style) ;
      } else if(key === 'children') {
        element.textContent = props[key] ;
      } else {
        element[key] = props[key] ;
      }
    }

    root.append(element) ;
  }
}
*/

const attributes1 = {
  className: "element" ,
  id: "first" ,
  style: {
    fontSize: "30px",
    backgroundColor: "red",
    color: "white"
  }
}
const element1 = React.createElement("h1", attributes1, "Hello Coder Army!") ;

const attributes2 = {
  className: "element" ,
  id: "second" ,
  style: {
    fontSize: "25px",
    backgroundColor: "green",
    color: "white"
  }
}
const element2 = React.createElement("h1", attributes2, "Welcome to React from Scratch") ;

// console.log(element1) ;
// const root = document.getElementById("root") ;

// root.append(element1) ;
// root.append(element2) ;
// ReactDOM.render(element1, root) ;
// ReactDOM.render(element2, root) ;

// children ---> [element1, element2, "Hello Coders!"]
const div = React.createElement("div", null, element1, element2, "Hello Coders!") ;
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div) ;