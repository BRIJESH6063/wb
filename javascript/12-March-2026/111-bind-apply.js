/*
const userDetail1 = {
  name: "john robert" ,
  age: 123 ,
  printUserDetail: function () {
    console.log(this) ;
  }
}

userDetail1.printUserDetail() ;

const userDetail2 = {
  name: "michel jhopdeewala" ,
  age: 200 ,
}

// function borrowing --
userDetail1.printUserDetail.call(userDetail2) ;
*/


/*
Arrow Functions Do NOT Have Their Own this
Arrow functions do not create their own this.
Instead they use lexical this (the this of the surrounding scope).
In browser global scope:
this === window

*/

/*
const userDetail1 = {
  name: "john robert" ,
  age: 123 ,
}

const userDetail2 = {
  name: "michel jhopdeewala" ,
  age: 200 ,
}

const printUserDetail = function (state, country) {
  console.log(this.name+` FROM ${state} ${country}`) ;
}

// indivisual arguments need to be passed seprately
// printUserDetail.call(userDetail1, "delhi", "india") ;
// printUserDetail.call(userDetail2, "delhi", "india") ;

// apply -- just give arraylist as argument and it works
printUserDetail.apply(userDetail1, ["delhi", "india"]) ;
printUserDetail.apply(userDetail2, ["delhi", "india"]) ;


// bind -- for future use
const pdbf1 = printUserDetail.bind(userDetail1, ["delhi", "india"]) ;
const pdbf2 = printUserDetail.bind(userDetail2, ["delhi", "india"]) ;
console.log(pdbf1) ;
console.log(pdbf2) ;
*/

const companies = [
  {name: "Google",   category: "Product based", start: 1984, end: 2004},
  {name: "Amazon",   category: "Product based", start: 1992, end: 2008},
  {name: "Paytm",    category: "Product based", start: 1999, end: 2007},
  {name: "Coforge",  category: "Service based", start: 1989, end: 2010},
  {name: "Mindtree", category: "Service based", start: 1989, end: 2010}
  
]

// // companies.forEach((company, index) => console.log(company)) ;
// const cpb = companies.filter((c, i) => c.category=='Product based') ;
// console.log(cpb) ;

// const ages = [33, 12, 20, 2, 34, 16, 29, 28, 54, 21, 22] ;
// const agesAbove18 = ages.filter((age, index) => (age>=18)) ;
// console.log(agesAbove18) ;

const cnc = companies.map((c, i) => `${c.name} -->  ${c.category}`) ;
// console.log(cnc) ;

const sorted = companies.sort((c1, c2) => ((c1.start>c2.start) ? 1 : -1)) ;
// console.log(sorted) ;


const newElement = document.createElement("h3") ;
newElement.textContent = "h3 element add kiya h bey lawdey!!" ;
document.body.append(newElement) ;
// console.log(document.url)