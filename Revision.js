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
  return fruit * 4;
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

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// Next, create an array called bills containing the test data below.
// TEST DATA: 125, 555, 44

// Create an array called tips containing the tip value for each bill, calculated from the calcTip function.
//MY SOLUTION:
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(125));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals);

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

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark >= BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else john.bmi > mark.bmi;
console.log(
  `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
);

// I used .this to store the caluclated values of john and mark
// in a NEW variable called "bmi", so after I've called the calcBMI method on each of the objects,
// I can then ACCESS that NEW STORED VARIABLE I USED .this FOR and OUTPUT it in as a string in a TEMPLATE literal!!

//========================================
// Loops!
//========================================
console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 4");

//for loop will keep running whilst the condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//========================================
// Looping through Arrays
//========================================
const pat = [
  "Pat",
  "Kelly",
  2024 - 1994,
  "Plumber",
  ["Michael", "Steven", "Peter"],
];
const types = [];

// I can use the for loop to loop through the array
// [i] is the first index value of the array (position 0)
// i < pat.length is the condition that the loop will keep running whilst i is less than the length of the array
// i++ is the incrementor that will increase the value of i by 1 each time the loop runs
// I can then use the console.log function to output the value of the array at each index position
// I can also use the typeof operator to output the data type of the value at each index position
for (let i = 0; i < pat.length; i++) {
  console.log(pat[i], typeof pat[i]);

  // Filling a types array with the data types of the values in the pat array
  // types[i] = typeof pat[i];
  types.push(typeof pat[i]);
}
console.log(types);

//========================================
// Declare my years array and fill it with random years
// Declare an empty array called agesArray
const years = [1991, 2007, 1969, 2020];
const agesArray = [];

// Loop through the years array and calculate the age of each year starting from 2037
for (let i = 0; i < years.length; i++) {
  agesArray.push(2037 - years[i]);
}
console.log(agesArray);

//========================================
// Looping backwards and nested loops
//========================================

// I loop through the full length of my pat array
// I start at the last index of the array (pat.length - 1)
// I keep looping whilst i is greater than or equal to 0
for (let i = pat.length - 1; i >= 0; i--) {
  // logging both the index and the value at the index
  console.log(i, pat[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
}

//========================================
// While Loop
//========================================
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

// Is the die different from 6?
// This while loop will roll for a random number ad infinitum until we roll a 6
// Once we roll a 6, the loop will end
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Snake eyes! Loop is about to end...");
}

//========================================
// CHALLENGE 4
//========================================
const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];

// now iterate through the entire billsArray with a for loop
for (let i = 0; i < billsArray.length; i++) {
  // calculate the tip for each bill item in the bills array
  // store value in new variable, tip
  const tip = calcTip(billsArray[i]);
  // push each calculated value to the empty tips array
  tipsArray.push(tip);
  // now fill the empty totals array
  // so I push each of the bills index items from the start of the array
  // and sum it with the tip
  totalsArray.push(billsArray[i] + tip);
}

console.log(billsArray, tipsArray, totalsArray);

//========================================
// BONUS CHALLENGE
//========================================
const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcAvg(arr) {
  // init sum variable within function for scope
  let sum = 0;
  // loop over the entire numbers array, arr
  for (let i = 0; i < arr.length; i++) {
    // add each array element to the sum variable
    sum += arr[i];
  }
  //Return mean calc after full loop iteration and OUTSIDE of function
  return sum / arr.length;
}
// now call the function with the totals array
// so "use" the function on the totals array to calculate the total
console.log(calcAvg(totalsArray));
