/*
console.log(a) ;
var a = "ajay" ;
console.log(a) ;

((obj!==undefined || obj!==null) ? obj.name : "")
*/

/*
const obj1 = {
  name: "ajay suneja" ,
  getName : function () {
    return this.name ;
  },
  getRollNo: function() {
    return this.rollNo ;
  }
}

const obj2 = {
  rollNo: 121 ,
  name: "rajesh gunjan",
  __proto__: obj1 
}

const obj3 = {
  education: "b.tech" ,
  __proto__: obj2
} 


// create your own prototype function in predefined objects..
Array.prototype.show = function () {
  return this ;
}
const arr = ["shibam", "dubey"] ;
// console.log(arr.show()) ;

Array.prototype.convertIntoObject = function() {
  const obj = {} ;
  this.forEach((i) => {
    obj[i] = i ;
  }) ;
  return obj ;
}

const ob = arr.convertIntoObject() ;
// console.log(ob) ;

function myPrototype (name) {
  this.name = name ;
}
myPrototype.prototype = obj3 ;
const mp = new myPrototype("priyanka") ;
*/





