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
  // New function that takes two arguments, starterIndex and mainIndex, and returns the respective array item from the object
  // My .this keyword goes up to its function's parent since it's a regular function
  // So return starterMenu array item at (argument value equivalent to array item value),
  // mainMenu array at (argument value equivalent to array item value)
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Here I've created a sort-of "Object Builder" for orders
  // The function takes an Object as an argument
  // But I can actually destructure the argument since it's still an object
  // Now I have a function that takes in ONE argument (one object), and creates an order object that doesn't care about the sequential order, nor the exact names, of the index items, which is really useful to specify my arguments
  // I can even add DEFAULT VALUES to my functions arguments, so I don't even need to specify the time or mainIndex for the second orderDelivery call
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Your order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} has been received! Your order will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta, made from ${ing1}, ${ing2}, ${ing3}`
    );
  },
};
// So when I call the function on the restaurant object, I end up creating a new object with the NEW values of time, and address
// AS WELL AS the returned property values for mainIndex and starterIndex from invoking the order function
restaurant.orderDelivery({
  time: '22:30',
  address: '123 Sesame Street',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '123 Sesama Street',
  starterIndex: 1,
});

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

// Destructuring Objects is extremely useful when dealing with data retrieved from an API Call, or a web Application, like weather data or data about movies, etc.
// By specifying the exact names of variables I want to extract, I can create 3 new objects each with the respective value found in the restaurant object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// String, Object, Object

// I can destructure objects and assign the extracted property values to variables with NEW variable names (that don't (have to) match the property name)
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//
//
// Default Values
//========================================
// I can also set default values just like I did with arrays
// Again, REALLY useful when we DON'T have hardcoded data (like we do here)
//
const { menu = [], starterMenu: starters = [] } = restaurant;
//
// So I end up with the default value for menu, an empty array
// and the starters empty array is equal to the contents' property values of starterMenu in my restaurant object
//
console.log(menu, starters);
//
//
// Mutating Variables
//========================================
//
let one = 111;
let two = 999;
const obj = { one: 23, two: 7, three: 14 };

// When I'm mutating objects, I can't just start a line of code with curly braces as Javascript expects a block of code to follow it
// Instead, I need to wrap my destructuring assignment in parentheses ()
({ one, two } = obj);
console.log(one, two); // 23 7
//
//
// Nested Objects
//========================================
// Again, I can retrieve the property values of nested objects just like I can with arrays
// All I need to do is match the variable name with the property value I want to extract
// So here I get the open: 11, close: 23 that represents the openingHours nested object, friday's property value
// but I can FURTHER destruct the object by appending my variable with a colon : , which then also allows me to fruther break it down into two seperate variables, 11 and 23
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//
//
//========================================
// **The Spread Operator**
//========================================

// This is the old, shitty way of adding new array elements to an array
const myNewArr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Instead I can use the spread operator to iterate over the shitty array to add all the array contents of myNewArray to newArr in one line
// I'm not INCLUDING the array, since using the spraed operator it's like taking the values out of the original array and adding them to the new one

const newArr = [1, 2, ...myNewArr];
console.log(newArr);

// I can, and should, use the spread opreator whenever I would otherwise need to write multiple values, seperated with commas (like in the first example)
// the spread operator is useful for 2 situations: the first happens whenever I write an **array literal**, which is the myNewArr array
// With the second situation being whenevr I pass arguments into functions

console.log(...myNewArr);
// Again, whener I need the **elements of an array individually**, I can, and should, use the spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Here I'm NOT creating a new array
// I am simply manipulating the data of the restaurant object, accessing the mainMenu array, creating a new string, 'Gnocci', and adding it to main menu, returning the value inside of a NEW array + the new string

// The spread operator takes all the elemnts from an array, but it does **NOT** create new variables, and as a direct consequence, we can only use it where there are values seperated by commas

// Shallow-copying arrays
//========================================

const mainMenuCopy = [...restaurant.mainMenu];

// Joining two arrays together
//========================================
// Create an aray that joins both the man menu, and the starter menu, together into ONE array
const heyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(heyMenu);

// I can also use the spread operator on iterables
// Iterables, in Javascript, are all *arrays*, *strings*, *maps*, or *sets*, but **NOT** *objects*

const str = 'pat';
const letters = [...str, ' ', 'S.'];
// So here I can unpack my string into its individual letters by using the spread operator
console.log(...str);
console.log(letters);

// So here I've created a new array, ingrdients
// ingredients holds 3 prompts which will I will pass as one single argument into my orderPasta function using the spread operator
// Real-world example
//========================================
// const ingredients = [
//   prompt("Let's make some pasta! What is your first ingredient?"),
//   prompt('And how about your second?'),
//   prompt('And finally, your third ingredient?'),
// ];
// console.log(ingredients);

// Again, call the function, use the spread operator to iterate over the entire ingredients array
// restaurant.orderPasta(...ingredients);

// Objects
//========================================
// The spread operator also works on objects, even though objects are NOT iterables
const newRestaurant = { foundedIn: 1994, ...restaurant, founder: 'Patrick' };
console.log(newRestaurant);

// So here I've used the spread operator to iterate over the entire restaurant object and copy it into a new variable, restaurantCopy, WITHOUT changing any of the first objects values
// Then I assign a new name to my new copy and log it to the console to see if it worked (it did)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Pats new Restaurant';
console.log(restaurantCopy);
console.log(restaurant.name);
//
//
//========================================
// Rest Patterns and Parameters
//========================================
