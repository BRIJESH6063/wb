/*

alert("page chalu!!") ;

console.log(document.getElementsByClassName("para").textContent) ;
var paraElement = document.getElementsByClassName("para") ;
paraElement.textContent = "Hello World!!" ;

paraElement.innerHtml = "hahahahha" ;

console.log(document.getElementsByClassName("para").textContent) ;
document.getElementsByClassName("para").textContent = "chal teri maki chut!!" ;
console.log(document.getElementsByClassName("para").textContent) ;

*/




function changeText() {
  // var pElement = document.getElementsByClassName("para")[0] ;
  // if(pElement) {
  //   pElement.textContent = "Welcome to JavaScript" ; 
  // }

  const paraElements = document.querySelectorAll(".para") ;
  console.log(paraElements) ;
  // for(let i=0; i<paraElements.length; i++) {
  //   paraElements[i].textContent="maaa kiiii chuuuu!!!" ;
  // }

  paraElements.forEach((element) => {
    element.textContent = "Updated text";
  });
}


function hideText() {
  const paraElements = document.querySelectorAll(".para") ;
  // for(let i=0; i<paraElements.length; i++) {
  //   paraElements[i].textContent="" ;
  // }

  paraElements.forEach((element) => {
    element.textContent = "";
  });
}


function inputAge() {
  const age = parseInt(prompt("Enter an integer:", ""), 10);
  const ageElement = document.querySelectorAll(".age") ;
  console.log(age, ageElement) ; 
  if(!isNaN(age)) {
    if(age > 18) {
      ageElement[0].textContent = "You are eligible to fuck around!!.." ;
    } else {
      const ageConfirm = window.confirm("Are you sure your age is less than 18?");
      if(ageConfirm) ageElement[0].textContent = "Chal bey bachche ghar jaa k soo jaa!!" ;
      else ageElement[0].textContent = "You are eligible to fuck around!!.." ;
    }
  }
}



// Creating a class  "foo"
class foo {
    // Creating an overloadable method/function.
    overloadableFunction() {
        // Define three overloaded functions
        let function1 = function (arg1) {
            console.log("Function1 called with"
                    + " arguments : " + arg1);
            return arg1;
        };
        let function2 = function (arg1, arg2) {
            console.log("Function2 called with"
                    + " arguments : " + arg1 
                    + " and " + arg2);
            return arg1 + arg2;
        };
        let function3 = function (arg1) {
            let concatenated__arguments = " ", temp = " "
            // Concatenating all the arguments 
            // and storing them into a string
            for (let i = 0; i < arg1.length; i++) {
                concatenated__arguments = 
                    concatenated__arguments + arg1[i]
            }
            /* Just ignore this loop and temp letiable, 
               we are using this loop to concatenate 
               arguments with a space between them */
            for (let i = 0; i < arg1.length; i++) {
                temp = temp + " " + arg1[i]
            }
            console.log("Function3 called with this"
                + " array as an argument : [" + temp + "]");
            console.log("Output of log is : ")
            // Returns concatenated argument string
            return concatenated__arguments; 
        };
        /* Here with the help of the length of the
           arguments and the type of the argument 
           passed ( in this case an Array ) we 
           determine which function to be executed */
        if (arguments.length === 1 
                && Array.isArray(arguments[0])) {
            return function3(arguments[0]);
        } else if (arguments.length === 2) {
            return function2(arguments[0], arguments[1]);
        } else if (arguments.length === 1 
                && !Array.isArray(arguments[0])) {
            return function1(arguments[0]);
        }
    }
}


/**
// Driver Code

// Instantiate an object of the "foo" class
let object = new foo();

// Call the overloaded functions using the
// function overloadableFunction(...)
// We are passing 1 argument so executes function1
console.log(object.overloadableFunction("Geeks"));

// We are passing two arguments so executes function2
console.log(object.overloadableFunction("Geeks", "for"));

// We are passing an array so executes function3
console.log(object.overloadableFunction(["Geeks", "for", "Geeks"]));
**/

/**--------CLOSURE--------**/
/*

function fun(a) {
  const b = 200 ;
  return function fun2(c) {
    return a+b+c ;
  }
}

const x = fun(100) ;
console.log(x(300)) ;

function fun2(a, b, c) {
  return {
    sumTwo: function () {
      return a+b ;
    },
    sumThree: function() {
      return a+b+c ;
    }
  }
}

const f = fun2(100, 200, 300) ;
console.log(f.sumTwo()) ;
console.log(f.sumThree()) ;


const g = fun2(1000, 2000, 3000) ;
console.log(g.sumTwo()) ;
console.log(g.sumThree()) ;

*/

/*
console.log("starting of promise ---------") ;

setTimeout(()=>{
  console.log("setTimeout called!!") ;
}, 0) ;

Promise.resolve().then(()=> {
  console.log("promise then called!!") ;
})

console.log("ending of promise -----------") ;
*/


/**
async function fetchData() {
  try {
    const response = await Promise.resolve({
      json: () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration"
      })
    })

    const data = await response.json() ;
    console.log(data) ;
  } catch(err) {
    console.log("error occured!! ab kyaa hogaa bc!!") ;
  }
}
**/

/*
async function fetchData () {
  try{
    const response = await fetch('https://dummyjson.com/users') ;
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json() ;
    console.log(data) ;
  } catch(err) {
    console.log("fetching data failed!!") ;
  }
}
*/



// fetchData() ;

// fetch('https://dummyjson.com/users')
//   .then(response => response.json()) 
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error)); 
