/*

Hoisting in JavaScript is the behavior where declarations are moved to the top of their scope during compilation, 
before the code is executed.

Simple definition:

👉 Hoisting means you can use variables or functions before declaring them (but with some rules).

=========== Variable hoisting (VAR) =================
console.log(a); // undefined
var a = 10;

Internally, JavaScript treats it like:

var a;
console.log(a); // undefined
a = 10;

✔ Declaration is hoisted
❌ Initialization is NOT hoisted

================= LET and CONST hoisting =================
console.log(a); // ❌ ReferenceError
let a = 10;

They are also hoisted, but kept in a Temporal Dead Zone (TDZ) until initialization.

================= Function hoisting =================
Function declaration (fully hoisted)
-------------------------------------------------------------
test(); // works
function test() {
  console.log("Hello");
}

✔ Entire function is hoisted
-------------------------------------------------------------
Function expression (not fully hoisted)
test(); // ❌ Error

var test = function() {
  console.log("Hello");
};

Only var test is hoisted (as undefined), not the function.
-------------------------------------------------------------
Final understanding:
  -->> Hoisting = declaration moved to top
  -->> var → hoisted and initialized as undefined
  -->> let/const → hoisted but not accessible (TDZ)
  -->> Function declarations → fully hoisted
  -->> Function expressions → behave like variables


*/