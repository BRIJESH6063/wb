/*

---------------------- Method 1 -----------------------------
---->>> <button onclick="handleClick()">Click Me</button>
const handleClick = function() {
  const element = document.getElementById('first') ;
  element.textContent = 'STRIKE is comming!' ;
}

---------------------- Method 2 -----------------------------
const element = document.getElementById('first') ;
element.onclick = function () {
  element.textContent = 'STRIKE is comming!' ;
}
---->>> Overriding 'click' eventListener (only one at a time)
element.onclick = function () {
  element.textContent = 'Mitochondrion is powerhouse of cell!' ;
}


---------------------- Method 3 ( BEST ONE ) -----------------------------
const element = document.getElementById('first') ;
element.addEventListener('click', () => {
  element.textContent = 'STRIKE is comming!' ;
}) ;

element.addEventListener('click', () => {
  element.style.backgroundColor = 'green' ;
  element.style.color = 'white' ;
}) ;

-----------------------  DOUBLE CLICK triggered  -----------------------
const element = document.getElementById('first') ;


element.addEventListener('dblclick', () => {
  element.textContent = 'DOUBLE CLICK triggered!' ;
  element.style.backgroundColor = 'red' ;
  element.style.color = 'white' ;
}) ;

-----------------------  SAME addEventListener on multiple element  -----------------------
const parent = document.getElementById('parent') ;
// console.log(parent.children) ;

for(let child of parent.children) {
  child.addEventListener('click', () => {
    child.textContent = 'CLICKED' ;
  })
}

-----------------------  CAPTURE, TARGET, BUBBLING  -----------------------
const grandParent = document.getElementById('grandparent') ;
const parent = document.getElementById('parent') ;
const child = document.getElementById('child') ;

// ---->>> CAPTURE PHASE (by default 'false'), on 'true' reverse the order of event listener
grandParent.addEventListener('click', () => {
  console.log('GRANDPARENT is clicked!') ;
}, false) ;

parent.addEventListener('click', () => {
  console.log('PARENT is clicked!') ;
}, false) ;

child.addEventListener('click', () => {
  console.log('CHILD is clicked!') ;
}, false) ;

1. CAPTURE PHASE  = grandparent --> parent --> child
2. TARGET PHASE   = stops at 'target'
3. BUBBLING PHASE = child --> parent --> grandparent
---->>> CAPTURE PHASE OFF --> 'false'
---->>> child.addEventListener() ----bubbling-->> parent.addEventListener() -----bubbling--->>grandparent.addEventListener()---bubbling---> body[X]
OUTPUT -- 'CHILD IS CLICKED'
          'PARENT IS CLICKED'
          'GRANDPARENT IS CLICKED'

... and vice versa


-----------  event.stopPropagation() event.stopImmediatePropagation()  --------------------
---->>> prevent eventListener Propagation


--------------------- CAPTURE PHASE, exact clicked Element(event.target) --------------------
const grandParent = document.getElementById('grandparent') ;
const parent = document.getElementById('parent') ;
const child = document.getElementById('child') ;

// ---->>> by default 'false', on 'true' reverse the order of event listener
// grandParent.addEventListener('click', (event) => {
//   console.log(event.target) ;
//   // console.log('GRANDPARENT is clicked!') ;
// }, true) ;

grandParent.addEventListener('click', (event) => {
  console.log(event.target) ;
  // console.log('GRANDPARENT is clicked!') ;
}, true) ;

// parent.addEventListener('click', (event) => {
//   console.log(event) ;
//   event.stopPropagation() ;
//   console.log('PARENT is clicked!') ;
// }, true) ;

// child.addEventListener('click', (event) => {
//   console.log(event) ;
// event.stopPropagation() ;
//   console.log('CHILD is clicked!') ;
// }, true) ;


---------------------- removeEventListener() -------------------------------
const grandParent = document.getElementById('grandparent') ;

const handleClick = (event) => {
  console.log(event.target) ;
  console.log('GRANDPARENT is clicked!') ;
} ;

grandParent.addEventListener('click', handleClick ) ;
grandParent.removeEventListener('click', handleClick ) ;

-------------------------------------------------------------------------
const grandParent = document.getElementById('grandparent') ;

const handleClick = (event) => {
  console.log(event.target) ;
  console.log('GRANDPARENT is clicked!') ;

  grandParent.removeEventListener('click', handleClick ) ; // runs only one time
} ;

grandParent.addEventListener('click', handleClick ) ;
// grandParent.removeEventListener('click', handleClick ) ;

*/



// const grandParent = document.getElementById('grandparent') ;

// const handleClick = (event) => {
//   console.log(event.target) ;
//   console.log('GRANDPARENT is clicked!') ;

//   grandParent.removeEventListener('click', handleClick ) ; // runs only one time
// } ;

// grandParent.addEventListener('click', handleClick ) ;
// // grandParent.removeEventListener('click', handleClick ) ;


