// Learning JavaScript full course:

// To print the content in javascript we use console.log("Statement") as given in example below

console.log("Hello Java Script");

// variables in javascript: These are the containers use to store the data in javascript.

// variable assignment ke liye phele var keyword likho phir variable ka naam and phir uski value:

// example:

var name="Tanmay Mittal";
var age=20;
console.log(name,age);

// JavaScript is a Dynamically typed language means you don't have to define what you are going to
// enter in the variable whether a String, int, float or boolean. neither the length also.

// example; 

var name="Shoura"
console.log(name)

// Rules for variable defining in javaScripts: Mostly sames everywhere:

/* 
1. Variable names are case sensitive a and A are different in java.
2. Only letters, digits, underscore(_) and $ can be used. Not Even spaces.
3. Only letters, underscore(_) and $ can be used as a first Character.
4. Reserved word cannot be used as a variable name.
*/

/* Three Types of variable in javacript.
1. var: variables can be redeclared and update in javascript
2. let: variables cannot be redeclared but can be update in javascript
3. Constant: variables neither be redeclared nor be updated.
*/

// Note: We will use let for declaration now a days.

// agar koi variable declare kiya but use value nhi di toh vo by default undefined hoga. 
// example:

let a; 
console.log(a) // output: Undefined. 

// if you done the same thing with constants then it will give an error. 

// short idea of block which we wil study afterwards: anything written inside {} is a one block.

{
    let name="Tanmay Mittal"
    console.log(name)
} // this complete is a block. 


/* Data Types in JavaScripts.

1. Primitive dataTypes: Fixed Data Types or fundamental datatypes and there are 7 primitive data
types in javascript. (Number, string, Boolean, Undefined, Null, BigInt, Symbol)

2. Non-Primitive Datatype: the non-fixed datatypes are called non-primitive datatype. like objects,
arrays and functions.
 */

// Objects are the collection of data stored as key: value pair.

let students={
    name: "Tanmay Mittal",
    age: 20,
    address: "A-29, Agra Road"
} // this is called an object.

console.log(students) // output: { name: 'Tanmay Mittal', age: 20, address: 'A-29, Agra Road' }

/* Note: as above we cannot update the constant variable but here in object it will give an error only 
if you change the complete constant object rather then changing a single field of the object.*/

const student={
    fullname:"Tanmay Mittal",
    weight: 80,
    height: 172
}

// now if i change suppose fullname is shoura sharma then it will not give an error. 

student["fullname"]="Shoura Sharma"

console.log(student) // output: { fullname: 'Shoura Sharma', weight: 80, height: 172 }

/* Activity 01: create the object for the information in the image as shown below and use the 
suitable datatype for the information to store.*/

const product={
    name:"Parker Jotter Standard CT Ball Pen( black)",
    Ratting: 5,
    offer: "10%",
    price:300
}

console.log(product) /* output: {name: 'Parker Jotter Standard CT Ball Pen( black)', Ratting: 5, offer: '10%', price: 300}*/

// activity second for you guys.

/* Comments in JavaScripts: The part which does note exicute. it only explain the code, its not
the part of Code.*/ 
