"use strict";

//========================================
// function logger() {
//   console.log("My name is Pat");
// }

// logger();

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//========================================

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1994);
// console.log(age1);

// const age2 = calcAge2(1994);

// console.log(age1, age2);

//========================================
// Arrow functions
const calcAge = (birthyear) => 2037 - birthyear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1994, "Pat"));
console.log(yearsUntilRetirement(1958, "Dad"));
// ARROW FUNCTION CAN'T USE 'this' KEYWORD

//========================================

function cutFruitPieces(fruit) {
  return fruit;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// Create a function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//========================================
// Arrays
//========================================
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Arrays start at 0
console.log(friends[0]);
console.log(friends[2]);

// .length gives me the Length of an array
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Arrays are mutable
// I can change the value of an array, ijn this case I change the value of the 3rd element in the array
friends[2] = "Jay";
console.log(friends);

// Arrays can hold different data types
const firstName = "Pat";

const testYears = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(testYears[0]);
const age2 = calcAge(testYears[1]);
const age3 = calcAge(testYears[testYears.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(testYears[0]),
  calcAge(testYears[1]),
  calcAge(testYears[testYears.length - 1]),
];
console.log(ages);

//========================================
// Array Methods
//========================================

// .push adds to the end of the array, and also returns the new length of the array
const newLength = friends.push("Pat");
console.log(friends);
console.log(newLength);

// .unshift adds to the beginning of the array, and also returns the new length of the array
friends.unshift("John");
console.log(friends);

// .pop removes the last element of the array, and also returns the removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);

// .shift removes the first element of the array, and also returns the removed element
friends.shift();
console.log(friends);

// .indexOf returns the index of the element in the array
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// .includes returns a boolean value (true/false) if the element is in the array
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

//========================================
//Objects
//========================================

const patObject = {
  firstName: "Pat",
  lastName: "Kelly",
  birthYear: 1994,
  job: "Plumber",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // I can also add functions to an object
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // I can essentially "store" a function in an object as a property,
  //and call it by invoking the method on the object
  calcAge: function () {
    // I can use the 'this' keyword to store a new property in the object
    // so I calculate the age, and then store it in patObject
    // now I can replace the function call with a request specifically for the age property on patObject
    //This is a good way to store data in an object, and is THE MOST EFFICIENT SOLUTION
    // AS I CAN STORE THE DATA IN THE OBJECT, AND THEN RETRIEVE IT LATER, ONLY CALCULATING THE DATA ONCE
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // Write a method called getSummary and this method should return a string that should summarize the data about patObject that reads as follows:
  // "Pat is a 43-year old plumber, and he has 3 friends, as well as "
  //MY SOLUTION:

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.friends.length} friends, as well as ${
      this.hasDriversLicense ? "his" : "no"
    } driver's license.`;
  },
};

// outputs 43 above the object in console - good shiiiiit maaaaaaaate
// using the 'this' keyword to refer to the object that the method is called on
console.log(patObject.calcAge());
console.log(patObject.getSummary());
console.log(patObject.age);

console.log(patObject);
// Dot Notation to retrieve data from an object
console.log(patObject.lastName);
// Bracket Notation to retrieve data from an object
console.log(patObject["lastName"]);

// nameKey is a variable that holds the string "Name"
const nameKey = "Name";
// I can use the nameKey variable to retrieve the value of the object's key
console.log(patObject["first" + nameKey]);
console.log(patObject["last" + nameKey]);

//I should use dot notation wherenever applicable, and bracket notation when I need to compute the key name

// Declare a function named `prompt` that simulates asking a user for input.
// This function takes a string as an argument, which acts as the question asked to the user.
const question = prompt(
  "Prompt me for age, job, friends, firstname, or lastname."
);

// Use the `console.log` function to output the answer from the user.
// Here, `question` variable holds the user's response to "What's your Job?".
// console.log(question);

// here I output the value of the patObject's key that matches the value of the question variable!!
// console.log(patObject[question]);

//========================================
// So here I'm using the prompt function to ask the user for input, and then I'm using the console.log function to output the answer from the user.
// if the user's response matches the value of the patObject's key, then I output the value of the patObject's key that matches the value of the question variable!!
// Otherwise, I output "WRONG PROMPT"

if (patObject[question]) {
  console.log(patObject[question]);
} else {
  console.log("WRONG PROMPT");
}

//========================================
// Here I'm adding new properties to the object
// I can (and should) use dot notation or bracket notation to add new properties to the object
patObject.location = "Australia";
patObject["twitter"] = "@patkellyAUS";
console.log(patObject);

// Challenge 2 - output the sentence below WITHOUT HARDCODING ANY VALUES
// "Pat has 3 mates and his best mate is called Michael"
// MY SOLUTION:

console.log(
  patObject.firstName +
    " has " +
    patObject.friends.length +
    " mates and his best mate is called " +
    patObject.friends[0]
);

//access patObject and take firstname keyword
//concatenate the string " has " with the total length of the friends array (3)
//concatenate the string " mates and his best mate is called " with the first element of the friends array (Michael)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark  heightMark);
// const BMIJohn = massJohn / (heightJohn  heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark >= BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

//========================================
// Regular Functions vs Arrow Functions
//========================================

// var birthName = 'Pattyboi';

const pkNew = {
  birthName: "Patrick",
  year: 1994,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1:
    //========================================
    // const self = this; // can also be self, that, or debt
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    //========================================
    //
    // Solution 2:
    //========================================
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    //========================================
  },

  // greet: () => console.log(`Hey ${this.birthName}`),
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.birthName}`);
  },
};

pkNew.greet();
pkNew.calcAge();
//
//========================================
// The code above returns undefined because arrow functions do not get their own this keyword
// I get undefined because the parent scope of the  arrow function is the Global Scope
// Since we're accessing the Global Scope, if we're not running strict mode, then the this keyword is accessing the window object (uh oh..)
// If I wanted my global object to have properties, then I would use a globally scoped variable like var
// NEVER EVER USE AN ARROW FUNCTION AS A METHOD
// And in the code above, and also in future projects, the entire shitshow can be avoided by adhering to the rule above of never ever use an arrow function as a method
//
// With the isMillenial function call inside of a method, since it is a regular function call, the this keyword must be undefined
// Which means I end up with an error saying undefined, when in theory it should otherwise work
// BUT RULEZ R RULEZ, BRO
// TRY NOT TO GET CAUGHT OUT BY THIS FUCKERY
// There are TWO solutions to the isMillenial  = undefined problem:
//
// Solution 1. | The self variable
//========================================
//
// The Solution to this problem, is to use an extra variable, usually called self and assign it the value of this
// So I define self outside of the function, as this, and since I'm now outside of the isMillenial() function, the this keyword is still set to pkNew, or the pkNew Object
// Finally, I can change the this keyword inside of my isMillenial() function to self to reflect the change and output true since the boolean condition is met
// So, self is referenced within the isMillenial() function, but since self is not within the function's scope, Javascript goes up the scope chain and into the parent scope, which is calcAge(), which is also the scope where self is defined
//
//
// Solution 2. | The Arrow Function
//========================================
// The second solution to this problem is to use an Arrow Function, since Arrow Functions do not have their own this keyword
// Which means, since I don't have a this keyword, and I'm using an arrow function, I inherit the this keyword from my parent scope, which is still pkNew, or the pkNew Object!!! | how fucken clever is that
// This is an extremely useful usecase for arrow functions
