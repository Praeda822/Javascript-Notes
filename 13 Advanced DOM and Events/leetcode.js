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
