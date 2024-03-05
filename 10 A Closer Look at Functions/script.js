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

// const flight = 'LH234';
// const patrick = {
//   name: 'Patrick Kelly',
//   passport: 12334567890,
// };

// const checkIn = function (flightNumb, passenger) {
//   flightNumb = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 12334567890) {
//     alert('Check In');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, patrick);
// console.log(flight);
// console.log(patrick);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 6969696969);
// };

// newPassport(patrick);
// checkIn(flight, patrick);
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

// const high5 = function () {
//   console.log('What da fu-');
// };
// document.body.addEventListener('click', high5);

// Same principle of callback functions on arrays
// ['Patrick', 'Martha', 'Adam'].forEach(high5);

//
//
//========================================
// Functions Returning Functions
//========================================
//
//
// The newGreet function is a higher-order function, which is a function that returns another function. It takes one argument, greeting, which is a string that will be used as the greeting in the returned function

// The function that newGreet returns is an anonymous function that takes one argument, name. This function logs a message to the console that combines the greeting and name parameters using a template literal. Template literals are string literals that allow embedded expressions, which are enclosed by the ${} syntax

// The greeterGday constant is assigned the function returned by calling newGreet with the argument 'Gday'. This means that greeterGday is a function that takes a name parameter and logs the message 'Gday, ' + name to the console

// greeterGday is then called twice with the arguments 'Patrick' and 'Smelly'. These calls log the messages 'Gday, Patrick' and 'Gday, Smelly' to the console, respectively

// The line newGreet('Gday')('Patrick') demonstrates function currying, which is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each with a single argument. Here, newGreet('Gday') returns a function that is immediately called with the argument 'Patrick', resulting in the message 'Gday, Patrick' being logged to the console. This is equivalent to the previous call to greeterGday('Patrick')

// The greetArr constant is assigned an arrow function that takes a greeting parameter and returns another arrow function that takes a name parameter. This second function logs the message 'greeting, name' to the console. Arrow functions provide a more concise syntax for writing function expressions. They are especially useful when working with higher-order functions or when you need to preserve the lexical value of this.

// Finally, greetArr('Hello')('Patrick') demonstrates function currying with arrow functions. This line is equivalent to the previous call to newGreet('Gday')('Patrick'), but uses the greetArr function instead of newGreet.
//

const newGreet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterGday = newGreet('Gday');
greeterGday('Patrick');
greeterGday('Smelly');

newGreet('Gday')('Patrick');

// Challenge:
//========================================
// Convert the aforementioned code to arrow functions
const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('Hello')('Patrick');
//
//
//
//========================================
// The call Method
//========================================
//
//
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // Improved way of writing function methods
  book(newFlightNum, newPassengerName) {
    // this keyword goes up looking to its parent thanks to hoisting
    console.log(
      `${newPassengerName} booked a seat on ${this.airline} flight ${this.iataCode}${newFlightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${newFlightNum}`,
      newPassengerName,
    });
  },
};

lufthansa.book(239, 'Patrick Kelly');
lufthansa.book(635, 'John Citizen');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
//
// Store my function method into a new variable called book
// But now the this keyword is broken because it's just a regular function call now
const book = lufthansa.book;
// book(23, 'Smelly McGee');

// But how can I explicitly tell Javascript where I want the this keyword to point to?
// There are three function methods to accomplish this:
// call, apply, and bind
// Since a function is just an object, and objects have methods, too, and the call method is one of them
// The first argument of the call method is exactly what I want the this keyword to point to
// All the arguments after are just the arguments of the original function
// So here I've called the call method
// Then the call method calls the book function with the this keyword set to the eurowings object
book.call(eurowings, 23, 'Patrick Kelly');
console.log(eurowings);

// Same principle again with the call() method
book.call(lufthansa, 2393, 'Smelly Mcgee');
console.log(lufthansa);
//
//
//
//========================================
// The apply Method
//========================================
//
// the apply method does exactly the same thing
// The apply method does NOT receive a list of arguments after the this keyword has been specified
// Instead, the apply method takes an array of the other arguments after the first
const flightData = [583, 'George Washington'];
book.apply(eurowings, flightData);
console.log(eurowings);

// But... the apply method isn't really used anymore in Javascript since I have a much better way of accomplishing the same task:
// THE SPREAD OPERATOR
//
book.call(eurowings, ...flightData);
//
//
//========================================
// The bind Method
//========================================
//
// The bind Method allows me to manually define the this keyword for any function call
// The catch is that the bind Method does NOT immediately call the function, instead it returns a new function where the this keyword is set to whatever value I passed into the bind method
//
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Patty Kelly');

// bookEW23 is a partial application
// a Partial Application refers to a function that has a part of its arguments already applied by an/the original function
// So bookEW23 is essentially the book function, but with 23 already defined
//
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Patrick Kelly'); // Patrick Kelly booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23
//
//
// With Event Listeners
//========================================
//
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('Click', lufthansa.buyPlane.bind(lufthansa));
//
//
// Partial Application
//========================================
//
// Partial Application just means I can preset parameters
//
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29
//
// Challenge:
//========================================
// Take the code above and instead create a new function that does exactly the same, only this new function achieves the same result by calling a function within itself
//
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
//
//
//========================================
// CODING CHALLENGE 1:
//========================================
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
//

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

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
