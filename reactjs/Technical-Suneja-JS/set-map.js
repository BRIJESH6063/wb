"use strict" ;

const st = new Set() ;
st.add(23) ;
st.add(11) ;
st.add("rishabh") ;
st.add({
  x: 23,
  y: ()=> console.log("ye kyaaa chutiyaap h bc")
}) ;

// st.clear() ;
// st.forEach((val, ind) => console.log(val)) ;
// for(const x of st) console.log(x) ;


/* --------- map ---------- */
const mapFirst = new Map([[112, "rajesh"], [111, "shivam"], ["size", 12]]) ;
mapFirst.set(600, ()=> console.log("kyaa suhana mausam hh!!")) ;
// console.log(mapFirst) ;

// console.log(mapFirst.get("size")) ;
// mapFirst.get(600)() ;

// for(const [key, value] of mapFirst) {
//   console.log(`${key} -> ${value}`)
// }

// mapFirst.forEach((key, value) => console.log(`${key} -> ${value}`)) ;


/*------------ weakset ------------*/
const ws = new WeakSet() ;
const ob1 = {name: "shivanshu"} ;
const ob2 = {} ;
ws.add(ob1) ;
ws.add(ob2) ;

// console.log(ws) ;
// if(ws.has(ob1)) console.log("ob1 is present in ws weakset") ;
// ws.delete(ob2) ;
// console.log(ws) ;


/*------------ weakmap ------------*/
const wm = new WeakMap() ;
wm.set(ob1, "private data") ;

