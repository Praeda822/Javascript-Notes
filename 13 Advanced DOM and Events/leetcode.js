'use strict';

//========================================
// Write a function that takes an array of numbers and returns the sum of all the numbers.
//========================================

//fuction sum, create two arguments for two numbers to be summed
//return number a + number b

function sum(a, b) {
  return a + b;
}

//========================================
// Write a function that takes a string as an argument and returns the string reversed.
//========================================

//create function, reverseString, create argument to declare the string
//return the str, split method to break it up, reverse method to reverse it backwards, join method to put it all back together

function reverseString(str) {
  return str.split('').reverse('').join('');
}

//========================================
// Write a function that takes a string as an argument and returns the number of vowels in the string.
//========================================

function getVowel(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    //Had an error before by putting a dot (.) after my includes method, which is invalid, as after the includes method I'm expected to provide an argument of what includes needs needs to look at
    //By including that dot, the code was expecting me to pass another method to the vowels object
    //Then I pass another method, toLowerCase, to ensure the vowels being checked for are lower case (as is in my array)
    //Then I increment my vowelsCount variable by one

    if (vowels.includes(str[i].toLowerCase())) {
      vowelsCount++;
    }
  }
  //Lastly, I actually tell my function what to do when it is called, which is to return the number of vowels in any given string passed as ana rgument to my fucntion (str)

  return vowelsCount;
}

//========================================
// Write a function that takes an array of strings and returns a new array with all the strings capitalized.
//========================================

//First array contains 3 strings to be returned in CAPITALS
const strArr = [
  'this is my array containing three seprate strings',
  'I hope this works the way I think it does',
  'only one way to find out, though..',
];

//Second array is empty as I want to push the contents of my first array into it
let newArr = [];

//create my function and pass the strArr array containing my strings as an agrgument to it
function toCapital(strArr) {
  //For Loop to iterate through the entire length of strArr
  for (let i = 0; i < strArr.length; i++) {
    //Push the contents of strArr to the empty array, newArr
    newArr.push(
      //HERE IS WHERE YOU FUCKED UP BRO
      //PASS toUpperCase() method TO EACH FUCKING STRING YOU WANT TO CAPITALIZE, YOU IDIOT
      // strArr[0].toUpperCase(),
      // strArr[1].toUpperCase(),
      // strArr[2].toUpperCase()
      strArr[i].toUpperCase()
    );
  }
  //Return the new value, and contents, of the previously empty array
  //RETURN IT OUTSIDE OF THE FUCKING LOOP IF YOU WANT MULTIPLE ITERATIONS
  return newArr;
}

//when I wrote the first iteration of this, I did the following and it would only push the first string in my original array leaving the others behind:

// newArr.push(strArr[i])

//The above was doing that BECAUSE THE LOOP WOULD EXIT AFTER IT'S FIRST ITERATION SINCE I WAS RETURNING IT INSIDE THE LOOP
//WHENEVER I USE RETURN, IT IMMEDIATELY EXITS THE LOOP AND STOPS ITERATING OVER ITSELF - return STOPS THE LOOP, MAN
