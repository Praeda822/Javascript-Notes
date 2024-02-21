'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//========================================
// **Array Destructuring**
//========================================

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // New functioin that takes two arguments, starterIndex and mainIndex, and returns the respective array item from the object
  // My .this keyword goes up to its function's parent since it's a regular function
  // So return starterMenu array item at (argument value equivalent to array item value),
  // mainMenu array at (argument value equivalent to array item value)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

//The second part of the code demonstrates a more efficient way to extract values from an array using destructuring assignment
//The line const [x, y, z] = arr; is equivalent to saying "let x be the first element of arr, y be the second element, and z be the third element"
// This is a much more concise and readable way to extract multiple values from an array, especially when compared to the manual method shown in the first part of the code.

const [x, y, z] = arr;
console.log(x, y, z);

// I can use "holes" to skip over unwanted array elements when destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
//========================================
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// With destructuring, I don't need to fuck around with temporary variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Returns ['Garlic Bread', 'Pizza']
// console.log(restaurant.order(2, 0));

// Receiving 2 return values from a function
//========================================
// Using destructuring, I can assign the returned value of the method into two new variables, starter & mainCourse
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//
//
// Nested Destructuring
//========================================
// So How can I get the 5, 6 out of this array by destructuring?
const nested = [2, 4, [5, 6]];
// I need to create two new variables, i & j, and assign them the value of the nested array
// const [i, , j] = nested;
// console.log(i, j);
//
// Righto, but I want the nested array values out, and as seperate variables, as well!!
// I can destructure within a destructure by declaring a third variable, k
const [i, , [j, k]] = nested;
console.log(i, j, k);
//
//
// Default values
//========================================
// I get undefined when trying to read a third, non-existent variable
// I can, however, assign my variables default values:
// 8 9 1
// This can be particularly useful when we're getting data from an API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//
//
//
//========================================
// **Destructuring Objects**
//========================================
