// const fun = () => {
//   console.log("anonymous function called!!") ;
// }


/** --------  async await and promises ---------**/
const data = [
  {name: "rajesh", profession: "chhinaar"} ,
  {name: "dinesh", profession: "nallaaa"} ,
  {name: "shivam", profession: "bhikari"} ,
  {name: "harjeet", profession: "chutiya"} ,
] ;


/**
(() => {
  
  setTimeout(()=> {
    console.log("-----started showing data -------") ;
    let output = "<ul>" ;
    data.forEach((value, index)=> {
      output += `<li>${value.name}  the  ${value.profession}</li>` ;
    } )
    output +="</ul>" ;
    document.body.innerHTML = output ;
  }, 5000) ;
})() ;

((newdata) => {
  
  setTimeout(()=> {
    console.log("----- started creating data -------") ;
    data.push(newdata) ;
  }, 3000) ;
})({name: "pankaj", profession : "chappal chor"}) ;
**/

function showData() {
  setTimeout(()=> {
    console.log("----- started showing data --------") ;
    let output = "<ul>" ;
    data.forEach((value, index) => {
      output += `<li>${value.name}  the  ${value.profession}</li>` ;
    } )
    output +="</ul>" ;
    document.body.innerHTML = output ;
  }, 1000)
}

function createData(newdata, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log("----- started creating data -------") ;
      data.push(newdata) ;
      const err = false ;
      if(!err) {
        resolve() ;
      } else reject("bahenchoooddd!! kuchh to gadbad h daya!!") ;
    }, 2000)
  })
  
}


async function start() {
  await createData({ name: "pankaj", profession: "chappal chor" }) ;
  showData() ;
}



// ---------------- :: 1
function mydata () {
    return new Promise((resolve, reject) => {
        const data = {name: "dinesh", size: "2 inches"} ;
        resolve(data) ;
    })
}






document.addEventListener("DOMContentLoaded", () => {

  /**
  createData({ name: "pankaj", profession: "chappal chor" })
  .then(showData)
  .catch(err=> console.log(err)) ; 
  **/
  
  // start() ;


  // ---------------- :: 1
  // mydata()
  //   .then(data => console.log(data))
  //   .catch(err => console.log("kucchhh to fataa h!!")) ;







});

// https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im