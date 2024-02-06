"use strict";

// Create a function that takes two parameters (a and b) and returns the sum of the two numbers.

function sum(a, b) {
  return a + b;
}

//========================================
// Create a function that takes an array of numbers as a parameter and returns the largest number in the array.
//========================================

//Create my array of 4 numbers, call it const
const arr = [0, 1, 2, 3];

//create function called numBig, pass it the array stored in my const
function numBig(arr) {
  //output the "Math.max" method to return the highest number in the passed array argument,
  //use the spread operator so the logic checks through the whole operator
  return Math.max(...arr);
  //Should return a 3....
}
//CALL THE FUNCTION, YOU IDIOT
numBig(arr);

//========================================

//========================================
// Create a function that takes a string as a parameter and returns the string in reverse order.
//========================================

//https://www.programiz.com/javascript/examples/reverse-string

function reverseString(str) {
  //str.split will break up the string, declare empty string to be broken ((""))
  //Pass the .reverse method, declare empty string to be reversed ((""))
  //Pass .join method to put it all back together again, delcare empty string (("")) to be joined
  return str.split("").reverse("").join("");
}
reverseString("Put it in REVERSE, Terry!!");
//========================================

//========================================
// Create a function that takes a number as a parameter and creates that number of div elements in the HTML document.
//========================================

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

//Will add my new element whenever I load the page by calling the function when the page is loaded and subsequently puts it into the body
// document.body.onload = makeDiv;

//Created a function to store the logic to generate my element
function makeDiv(n) {
  //Create a for loop and nest it within my function logic to run however many times "n" is specified, be it 5 times or 500
  for (let i = 0; i < n; i++) {
    //Select the document, pass the method to create a new element, delcare it as a div element ("div")
    const newDiv = document.createElement("div");

    //Created a variable called newContent and store the text content to add within
    const newContent = document.createTextNode(
      "Hello, I am the only & only: RATMAN"
    );

    //Declare newDiv as object element, pass it appendChild method to add the new content variable, holding the text content, to it
    newDiv.appendChild(newContent);

    //add the newDiv variable (container) to the page, store it within a new variable called currentDiv
    //Do I even need that variable??
    document.body.append(newDiv);
  }
}

//========================================

//========================================
// Create a function that changes the background color of an HTML element when it is clicked.
//========================================

//Create the selector element for the button using my .test class
//tell it to wait for the click, then create my anonymous function
//nest the same button selector, using .test, and tell it to change the background colour to dog poo brown....
//dab on the haters
document.querySelector(".test").addEventListener("click", function () {
  document.querySelector(".test").style.backgroundColor = "#681A09";
});

//========================================

//========================================
// Create a function that adds a new HTML element to the page when a button is clicked.
//========================================

//Re use my old code....
//Provide logic for the test button and its click event handler + anon function
//pass the makeDiv function I made earlier as an argument, and 2 for 2 new element, for it when it's clicked
//EZ SAUCE

document.querySelector(".test").addEventListener("click", function () {
  makeDiv(2);
});

//========================================
// Create a function that toggles the visibility of an HTML element when a button is clicked.
//========================================

//Create 3 variables to select the lorem main container, and my two buttons
const main = document.querySelector(".main");
const sneaky = document.querySelector(".sneaky");
const not = document.querySelector(".not");

//created a function called hideContent to add my .hidden class to the main lorem container
const hideContent = function () {
  main.classList.add("hidden");
};

//Created a function called showContent to remove the .hidden class from the main lorem container
const showContent = function () {
  main.classList.remove("hidden");
};

//add event listeners to both the .sneaky and .not buttons to listen for a click, and then to call the showContent & hideContent functions, respectively
//dab on the non-believers
sneaky.addEventListener("click", hideContent);
not.addEventListener("click", showContent);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark >= BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Tip 15% if the bill is between 50 and 300
// if it's not between that range, then it's a 20% tip
// create a variable called tip
// no if/else, only ternary operator
// output the string to the console containing the bill value, the tip, and the final value (bill + tip)
// i.e. The Bill was 275, the tip was 41.25, and the total damage was 316.25
// Given data values:
// Bill: 275
// Tip: 40
// Total Damage: 430
// MY SOLUTION:

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value of the feed is ${
    bill + tip
  }`
);
