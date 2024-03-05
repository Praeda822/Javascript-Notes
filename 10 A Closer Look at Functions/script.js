'use strict';
//
//========================================
// Default Parameters
//========================================
//

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Old ES5 way of doing it
  //   numPassengers = numPassengers || 1;

  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 850);
createBooking('LH123', 5);
createBooking('LH123', 3);
// Cheeky way of declaring a default Parameter
createBooking('LH123', undefined, 1000);
//
//
// ========================================
// How Passing Arguments Works: Value vs. Reference
// ========================================
//
// In JavaScript, all types of values are passed by value, which means the value is copied and this copy is passed as an argument
// You can modify the copy, and the original value will stay untouched, for example

// function changeValue(a) {
//   a = 5;
//   console.log(a); // 5
// }

// const a = 1;
// changeValue(a);

// console.log(a); // 1

// You can see that the modification of the a argument inside of the function didn't affect the value outside of the function because the value of a was copied, and the change was done on this copy
// Objects are also passed by value, but there is a difference. The value stored in a variable for an object isn't the object itself.
// It's a reference to that object in memory
// So, in case of objects, you're not copying an object, but a reference to that object
// Due to this, if you modify the object inside of a function, this change will be reflected in the object outside of the function, for example

// function changeValue(obj) {
//   obj.newProp = 'Hi';
// }

// const obj = {
//   prop: 'Hello',
// };

// changeValue(obj);

// console.log(obj); // {prop: "Hello", newProp: "Hi"}

const flight = 'LH234';
const patrick = {
  name: 'Patrick Kelly',
  passport: 12334567890,
};

const checkIn = function (flightNumb, passenger) {
  flightNumb = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12334567890) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, patrick);
console.log(flight);
console.log(patrick);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 6969696969);
};

newPassport(patrick);
checkIn(flight, patrick);
//
//
//
//
//========================================
// First-Class Functions vs Higher Order Functions
//========================================
//
// First-Class Functions
//========================================
// First-class functions means that functions are treated as if they were objects, and since functions are values, I can store them in variables or as object properties

const add = (a, b) => a + b;

// I can pass functions as arguments to other functions, like eventlisteners and event handlers regarding DOM objects

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// I can also return functions from another function, and since functions are (technically) objects, I can use methods on them, like array methods'

const greet = () => console.log('Hey, Pk');
// btnClose.addEventListener('Click', greet);

// There are also FUNCTION METHODS, which are methods that can specifically be called on functions:

// counter.inc.bind(someOtherObject);

// Higher-Order Functions
//========================================
// A Higher Order Function is a function that receives another function as an argument that returns a new function or both and this is only possible because of first-class functions
// I'm essentially calling the greet function inside of my EventListener function

const higherorderGreet = () => console.log('Hey, Lord PK');
// btnClose.addEventListener('click', higherorderGreet);

// An event listener is a higher order function because it receives a call back function, and because it receives a new function, it is by definition a Higher-Order function
// Since Higher-Order Functions are functions that receive another function as an argument, and consequently returns a new function, and/or both
// A callback function is called such because it will be called later by the higher order function

// Higher-order Function
function higherorderCount() {
  let counter = 0;
  // Returned function
  return function () {
    counter++;
  };
}

//
//
//========================================
// Functions: Accepting Callback Functions
// ========================================
//
// Generic Functions:
//========================================
//
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//
//
// Higher-Order Functions:
//========================================
//
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

// Callback Functions:
//========================================
//
// the biggest importance of callback functions is that it allows me to create abstractions, or a level of abstraction
// Abstraction means to hide the details of code implementation because "getting bogged down with the details" is unnecessary
// Therefore, this allows me to think about ideas/concepts/problems at a higher, more abstract, level
//

transformer('Javascript is the most CONFUSING shit!', upperFirstWord);

transformer('Javascript is the most CONFUSING shit!', oneWord);

const high5 = function () {
  console.log('What da fu-');
};
document.body.addEventListener('click', high5);

// Same principle of callback functions on arrays
['Patrick', 'Martha', 'Adam'].forEach(high5);

//
//
//========================================
// Functions Returning Functions
//========================================
//
//

//
//========================================
// The call and apply Methods
//========================================
//
//

//
//========================================
// The bind Method
//========================================
//
//

//========================================
// CODING CHALLENGE 1:
//========================================
//
//

//
//========================================
// Immediately Invoked Function Expressions (IIFE)
//========================================
//
//

//
//========================================
// Closures
//========================================
//
//

//
//========================================
// More Closure Exampples
//========================================
//
//

//

//========================================
// CODING CHALLENGE 2:
//========================================
//
//
