

/*
Objects in JavaScript are the most important data type and form the building blocks for modern JavaScript. 
Unlike primitive data types (Number, String, Boolean, null, undefined, and symbol), which hold a single value, 
objects can hold multiple values as properties.
This allows us to group related data and functions together, making our code more organised and easier to understand.

Note:- Object()  can be called with or without new. Both create a new object.
       new Object(value)
       Object(value)


const o = new Object() ;
console.log(o) ;
o.foo = 5336523 ;
console.log(o) ;

## An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object.
let school = {
    name: "Vivekananda School",
    location : "Delhi",
    established: 1978,
    displayInfo: () => {
        console.log(`
            name        : ${school.name}
            location    : ${school.location},
            established : ${school.established}
        `) ;
    }
}
school.displayInfo(); 
console.log(`${school.name.split(' ')[0]}`)

objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. 
These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.



Inherited Properties
Inherited properties are those that come from the object’s prototype rather than being defined directly on the object. 
To check if a property is an object’s own property, use the hasOwnProperty method.

let school = {
    "name": "Vivekananda School",
}
console.log(school.hasOwnProperty("name")) // True


Property Attributes
Data properties in JavaScript have four attributes:

1. value: The property’s value.
2. writable: When true, the property’s value can be changed
3. enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
4. configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.

let person = {
    name: "John"
}
Object.defineProperty(person, 'name',{
    writable: false,
    enumerable: true,
    configurable: false
} )
person.name = "ajkkjasd" ;
console.log(person)
## output-- { name: 'John' }


###   Bracket Notation
Syntax:  objectName["memberName"]


Iterating Over All Keys of an Object
To iterate over all existing enumerable keys of an object, we may use the for…in construct.



let person = {
    gender: "male"
}
let person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
    console.log(`${key} : ${person1[key]}`);
}

name : Adam
age : 45
nationality : Australian
gender : male




Deleting Properties
To delete a property of an object, use the delete operator. 
Note that you cannot delete inherited properties or non-configurable properties.
let person = {
    name: "kuchh bhi",
    age : 1234 
}
console.log(person.name) 
delete person.name
console.log(person.name) // undefined




###   The object can be created in two ways in JavaScript:
1. Object Literal
2. Object Constructor



Example: Using an Object Literal.
let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',
 
    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);




*/

