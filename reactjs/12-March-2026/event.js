/*
Event bubbling(child-->parent) and Capturing(parent---->child, d.addEventListener('click', fun, true)) 
d.addEventListener("click", ()=> console.log(d) , true) ;
---- multiple event listener can b e added -------------

Stop propagation, Immediate propagation and Prevent Default
*/


/*
document.addEventListener("DOMContentLoaded", () => {
  const divNodeList = document.querySelectorAll("div");
  const buttonNodeList = document.querySelectorAll("button");
  const aNodeList = document.querySelectorAll("a");
  const d=divNodeList[0] ;
  const b=buttonNodeList[0] ;
  const a=aNodeList[0] ;
  // for(const d of div) {
  //   d.addEventListener("click", ()=> {
  //     console.log(d) ;
  //   }) ;
  // }

  d.addEventListener("click", ()=> {
    console.log(d) ;
  }) ;

  b.addEventListener("click", (event)=> {
    event.stopPropagation() ;
    console.log(b, "first event listener") ;
  }) ;
  //---- multiple event listener [first--->Second--->Third] ------
  b.addEventListener("click", (event)=> {
    event.stopImmediatePropagation() ; 
    // no further event listener on button will be entertained
    console.log(b, "second event listener") ;
  }) ;
  b.addEventListener("click", (event)=> {
    console.log(b, "third event listener") ;
  }) ;

  a.addEventListener("click", (event)=>{
    event.preventDefault() ;
    console.log(a) ;
  }) ;

});
*/

