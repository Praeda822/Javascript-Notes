'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Here I've created a sort-of "Object Builder" for orders
  // The function takes an Object as an argument
  // But I can actually destructure the argument since it's still an object
  // Now I have a function that takes in ONE argument (one object), and creates an order object that doesn't care about the sequential order, nor the exact names, of the index items, which is really useful to specify my arguments
  // I can even add DEFAULT VALUES to my functions arguments, so I don't even need to specify the time or mainIndex for the second orderDelivery call
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Your order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} has been received! Your order will be delivered to ${address} at ${time}.`
    );
  },

  // This method takes 3 prompt inputs, that are stored in an array called ingredients, from a user and spits out a template literal of what those ingredients are
  // I'm able to pass in all three ing arguments at once to the function by using the spread operator (...ingredients) as an argument
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta, made from ${ing1}, ${ing2}, ${ing3}`
    );
  },

  // Using **REST Parameters** as my arguments, or **REST Arguments**, **my first argument is stored in the *mainIngredients* variable, with **all other ingredients being stored inside of my *otherIngredients* variable as an array**
  // If I only have *one* argument, for example, then I'll get the first ingredient variable returned as a string, and the second as an **empty array** as there's *nothing to collect*
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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

//========================================
// **Array Destructuring**
//========================================

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

// I can destructure objects and assign the extracted property values to variables with NEW variable names that don't (have to) match the property name
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
// Create an aray that joins both the main menu, and the starter menu, together into ONE array
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

// **Objects**
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
// **REST Pattern and Parameters**
//========================================
//
// We use the **Spread Operator** to **build new arrays or pass *multiple* values into a function**
// In both cases, we use the spread operator to expand arrays into their individual elements
// The **REST Pattern** uses the exact same syntax, only backwards, however it collects multiple elements and condenses them into an array
// ERGO:
// **Spread is to unpack an array**
// **REST** is to pack an array

// **Spread Operator: Building Arrays**
//========================================
//
// I know in the code here that I am using the spread operator because I am using it on the **RIGHT HAND SIDE OF THE ASSIGNMENT OPERATOR ( = )**

const spreadArr = [1, 2, ...[3, 4]];

// But I can *also* use it on the left hand side of the assignment operator ( = ) by using destructuring
// Using it on the **LEFT HAND SIDE** makes it **REST**
// So I'm using the **REST Pattern** to select the numbers I didn't assign to a specific letter variable
// THUS THE NAME
const [aa, ab, ...others] = [1, 2, 3, 4, 5];
console.log(aa, ab, others);

// Again, I'm using the **REST Pattern** (*... on left-hand side of assignment operator*)
// I then create three new variables pizza, risotto, and otherFood
// I access the restaurant object using the spread operator to iterate over the entire object
// Then I assign pizza and risotto to their exact same string names in the manMenu nested object by "skipping" over 'Pasta'
// Then I use the **REST Pattern** (*because I'm still on the left-hand side of the assignment operator = *) to *pack* the variable otherFood with *everything* inside of the nested starterMenu object

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// When using the **REST Pattern**, it **MUST ALWAYS BE LAST IN THE DESTRUCTURING ASSIGNMENT**
// Otherwise, Javascript can't tell when to collect *the rest* of the unselected elements
// For the same reason, **there can only ever be *ONE* REST Pattern in a destructuring assignment** (*again, on the fucken LEFT OF THE ASSIGNMENT*)

// **Spread Operator: Building Objects**
//========================================
//
// I can, again, use the **REST Pattern* to build objects
// In this case I want to create a new object splitting up the weekdays and weekend into their own respective categories
// So I declare my new object with two variables sat, and then my second variable, which will encompass *literally* the rest of the days
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//
//
// **Spread Operator: Passing Multiple Arguments into a Function**
//========================================
//
// The *second* usecase for the **Spread Operator** is to **pass multiple arguments into a function all at the same time**
// Just like I did with my ingredients array with the prompts in the *Real-World Usecase Example*:
//
//========================================
//
// const ingredients = [
//   prompt("Let's make some pasta! What is your first ingredient?"),
//   prompt('And how about your second?'),
//   prompt('And finally, your third ingredient?'),
// ];
// console.log(ingredients);

// orderPasta: function (ing1, ing2, ing3) {
//   console.log(
//     `Here is your delicious Pasta, made from ${ing1}, ${ing2}, ${ing3}`
//   );
// },

// restaurant.orderPasta(...ingredients);
//
//========================================
//
// I'm able to pass in **all three *ing* arguments at once** using the spread operator on my ingredients array, which is made up entirely of whatever is input into the 3 prompts, respectively

// Here I want to take an arbitrary amount of arguments and simply add all of them together
// But first, I can demonstrate how the **Rest Pattern** works (*LEFT OF THE ASSIGNMENT OPERATOR BRO*) by passing it in the argument
// Using the **REST Pattern**, or **REST Parameter** in this case, means that I am taking all of the numbers as arguments, and **unpacking them into a new array**
// SPREAD = EXPAND/UNPACK
// REST = COMPRESS/PACK
// Without having to create entire *new variables*, such as an *array*, or an *object*, I can use the **REST Parameter** to pass in all the values at once, *effeciently*

// I understood how to write the function out, but got toally lost at HOW to actually add the logic for not only all the fucking numbers to be summed together, but I also forgot to declare my loop to iterate over the fucking length of the arguments give, AS WELL as forgetting the whole "+=" bullshit AND not even remotely having the faintest idea to start at the first array integer of the numbers argument..
// FML

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

// OK, so what if I had a variable that held an array of numbers; how would I pass *that* as an argument into my function??
const ac = [23, 5, 7];

// It's even easier than your dumbass could have thought, my friend: **SPREAD OPERATOR**
add(...ac); // 35
//
//
//========================================
// **Short Circuiting (&& and ||)**
//========================================
//
// **Short-Circuiting** means that if the *first returned value* is a **truthy** value, then **it will immediately return that first value
// Just like what I was doing with the functions homework I gave myself before

// **Short-Circuiting: The || (*or*) Operator**
//========================================
//
// Logical operators can *use* **ANY DATA TYPE**
// Logical operators can *return* **ANY DATA TYPE**
// Logical operators can **SHORT-CIRCUIT**
// Here I compare two values that are *not* **boolean**, and I return a value that is **not a boolean**
// So if the *first* operand is **truthy** here, then the *other operand* will **not even be evaluated whatsoever**, hence the term **Short-circuiting**

console.log(3 || 'Pat'); // 3
console.log('' || 'Pat'); // Pat
console.log(true || 0); // true
console.log(undefined || null); // null

console.log('------- OR -------');
// Short-circuiting the entire evaluation here as the operand returns true as soon as it hits the hello string, fuck the rest of it
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// Same shit here as before with those ternary operators and the functions, mate
// the variable guests1 is declared with a value equal to whether or not the numGuests object exists or not on my restaurant object
// If it doesn't exist, then I set a *default value* of 10
//
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 - no such object, bruz
//
// Again, numGuests doesn't exist and so is a **falsy** value, therefore the **or** operator evaluates the **truthy** value of *10*
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------- AND -------');
//
//
// **Short-Circuiting: The && (*and*) Operator**
//========================================
//
// The **&& (*and*) Operator** works in the exact *opposite* way to the **|| (*or*) Operator**
// So the **&& (*and*) Operator** looks for the **first *falsy* value and returns it**, fuck the second operand
// **||** = *Short-circuits* when **true**
// **&&** = *Short-circuits* when **false**
//
console.log(0 && 'Pat'); // 0
//
// However, **when all the values are truthy, only the *last* value is returned**
//
console.log(7 && 'Pat'); // Pat
//
// So I get a short-circuit here at *null* since it's the **first falsy value**, so the **&&** operand returns *true*
//
console.log('Hello' && 29 && null && 'Pat');
//
// Here I'm checking if a method exists, and if itn does, I want to call it
//
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//
// This code does exactly the same as the code above, only I'm using the **&&** operand to *short-circuit* the evaluation
//
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//
// false && anything → Short-circuits and returns false because the first operand is falsy.
// true && false → Returns false because the second operand is falsy.
// true && 'Hello' → Returns 'Hello' because both operands are truthy, so it returns the last value.
//
//
//========================================
// **The Nullish Coalescing (*??*) Operator**
//========================================
//
// **The Nullish Coalescing (*??*) Operator** works with the idea of **nullish values*, instead of *falsy values*
// **Nullish Values** are **Null** and **undefined** (*NOT 0 OR ''*)
// So since numGuests isn't defined at all, I get 10
const guestCorrect = restaurant.numGuests ?? 10; // 10
console.log(guestCorrect);
//
//
//========================================
// **Logical Assignment Operators**
//========================================
//
//
// **Logical *or ||* Assignment Operator**
//========================================
// The **Logical *or ||* Assignment Operator** assigns a value to a variable **if it is currently falsy**
// This approach *can* get a bit dodgy when I initialise variables with **0**, since **0** *is a falsy value*, and I'll end up with a value of *10*
//
//
const rest1 = {
  name: 'Capri',
  totalGuests: 0,
};

const rest2 = {
  name: 'la Patricko',
  owner: 'Patrick Bibadababidi',
};

// Here I'm returning the total number of guests (*if it does exist*), otherwise, *10* will be returned
// but I'm instead using the **|| or Operator** to add the totalGuests to the rest2 object since totalGuests doesn't exist in the first place thanks to **Short-circuiting**
// Since I'm returning this falsy value first, it's simply added to the object
// rest1.totalGuests = rest1.totalGuests || 10;
// rest2.totalGuests = rest2.totalGuests || 10; // 20
//========================================
// The code here does the same as above, just neater
// rest1.totalGuests ||= 10;
// rest2.totalGuests ||= 10;

// **Logical *Nullish* Assignment Operator**
//========================================
// The **Logical *nullish ??* Assignment Operator** assigns a value to a variable **if it is currently null or undefined**
//
//
//
rest1.totalGuests ??= 10;
rest2.totalGuests ??= 10;
//
//
// **Logical *and &&* Assignment Operator**
//========================================
// The **Logical *and &&* Assignment Operator** assigns a value to a variable **if it is currently truthy**
//
// What if I want to anonymize the owners of the restaurant (if present)?
// This works because && is looking for the first *falsy* value and will return it if it *is* falsy
// Since there IS an owner property on the rest2 object, it becomes *truthy* and evaluates the <ANONYMOUS> (*second part*)
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// But since rest1 **doesn't** have the owner object, it returns the first *falsy* value, which is rest1.owner
// And since rest1owner doesn't exist, it returns *undefined*, because I'm returning **null/undefined** values, since I'm using the **&&** Operator
// rest1.owner = rest1.owner && '<ANOYMOUS>';

// I can fix that, though, by using a **logical Assignment Operator**:
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest2);
// name: 'la Patricko', owner: '<ANONYMOUS>', totalGuests: 10}
console.log(rest1);
//
//
//
//========================================
// **Looping Arrays: The *for-of* Loop**
//========================================
//
//
const patMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// This loop will loop over the entire specified array and, in *each iteration*, it will **give us access to the *current* array element**, in this case **item**
// the *item* variable **is always the current element in each iteration**
// I don't need a huge if/else codeblock since I only have the one statement to execute
for (const item of patMenu) console.log(item);

// With for of loops, I can *continue* **and** *break* them, unlike other abstractions
// But what if I need the *index value* and not the **current element**?
// Instead of just *item* **of** *patMenu*, i would have to pass the .entries method to the array
// And each item is consequently now an array with the index value in the array element itself
// Since menu.entries creates an array, I can hence destructure it within the for of loop!
for (const [i, el] of patMenu.entries()) {
  // by using a nice template literal, I get a well ordered and neat menu
  // But the code below is the *old* way of doing things
  // console.log(`${item[0] + 1}: ${item[1]}`);
  // The better way is to use destructuring:
  console.log(`${i + 1}: ${el}`);
}

// So, menu.entries() gives me an array, with a new array, for each respective element item contained within, nested in each position within *that* array
//
//
//
//========================================
// **Enhanced Object Literals**
//========================================
//
//
// My restaurant object has been written in the **Object-Literal Syntax**, as I have *literally* written in what the object is, and contains
// I don't have to include the *function* word in an object's function methods
// Just the parentheses is explicit enough
// I can use **Enhanced Object Literals** to compute new values, like replacing hard coded values of weekdays with destructured array elements

const weekdaysArr = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const tradingHours = {
  [weekdaysArr[3]]: {
    open: 12,
    close: 22,
  },
  [weekdaysArr[4]]: {
    open: 11,
    close: 23,
  },

  [weekdaysArr[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
    // I can also use **Enhanced Object Literals** to *compute* new values
  },
};

//========================================
// **Optional Chaining (*?.*)**
//========================================
// **Optional Chaining (*?.*)** can be used in any situation where you're unsure if a property exists in an object
// **Optional Chaining (*?.*)** is basically like a checkpoint to see whether if an object, or property, is even present at all, and if it is, THEN it will execute the logic to the right hand side of it
// But if it *doesn't**, it will *immediately* return **undefined**

// I can use **Optional Chaining (*?.*)** when working with *Web APIs*
// For instance, I have no idea whether my restaurant opens on monday, or even whether the API has an object called openingHours
// console.log(restaurant.openingHours.mon.open) retuens an **ERROR** because i'm essentially extrapolating *undefined*
// Howver, I *can* do it with an if statement:
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11
// So, if openingHours.fri exists, log it to the console

// But how would I even know if restaurant exists?
// How can I chceck for both??
// But obviously this not only *looks fucked*, it can get *even more fucked*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//
//
// **WITH Optional Chaining**
//========================================
// Sort of like a pedantic ternary operator, but for working with Web APIs in particular
// Since mon doesn't exist, it returns *undefined*
console.log(restaurant.openingHours.mon?.open);
//
//The syntax is obj?.prop, which means access the property prop of obj if obj exists, otherwise, return *undefined*

// **Real-world example of Optional Chaining**
//========================================
// Lets say I want to see what days the store is open
// I can use a *for of loop* to loop over the array
// I log each individual day to the console stored as variable, *day*
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  // I need to wrap my **variable name** in brackets to pass it as a **property name**
  // Then, using **Optional Chaining (*?.*)**, I can check if open exists on each of the day array's index values, and if they *do* exist, log them to the console, otherwise return *undefined*
  // Then I can use the *Nullish Coalescing Operator* to return "closed" instead of undefined
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
//
// **Optional Chaining on Methods**
//========================================
// I can use **Optional Chaining (*?.*)** to check if a method exists before I call it:
// Since **Optional Chaining (*?.*)** will return *undefined* if something doesn't exist, I should use the **Nullish Coalescing Operator**
//
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // (2) ['Focaccia', 'Pasta']
// But since orderRisotto doesn't exist, it *immediately* returns **undefined**, which means my entire statement returns *undefined*, therefore my nullish coalescing operator kicks in and immediatel;y returns my string
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist
//
//
// **Optional Chaining on Arrays**
//========================================
// Usually I'll be using optional chaining on Arrays to check if they're *empty*
// So here I'm declaring, only if the users array exists, * users[0]?.* then return the name property
// Otherwise, again through the use of *nullish Coalescing Operator* which checks for undefined values to return *??*
// Return the string, 'User array empty'
const users = [{ name: 'Pat', email: 'hello@pat.io' }];
console.log(users[0]?.name ?? 'User array empty');
// Pat
// Without **Optional Chaining (*?.*)**, I'd have to type out entire if blocks checking for greater/less than and/or equals to, etc.

//
//
//
//========================================
// **Looping Objects: Keys, Values and Entries**
//========================================
//
// **Property Names**
// ========================================
// I can loop over Objects, even though they aren't iterables, in an *indirect* way:
//
// First I use the **Object.keys** method to get an array of the object's own property names
// In this case, I'm getting the *keys* of the **openingHours** object
// Then I store those key values in a variable (now an array) named properties
const properties = Object.keys(openingHours);
console.log(properties);

// Next I initialize a string, **openStr** with a *template literal* that includes the **length of the properties array**, which represents the number of *days* the business is open.
let openStr = `We are open on ${properties.length} days: `;

// Now I use a *for of* loop to iterate over **each element in the *properties* array**
// In each iteration, the current property name (*which represents a day*) is appended to the openStr string, followed by a comma and a space
// Finally, the updated string will contain a message about the number of days the business is open, followed by a list of those days.
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
//
// **Property Values**
// ========================================
// But what if I want the object's **values**, and not the *keys*?
// // First I use the **Object.values** method to get an array of the object's own **property values**
// In this case, I'm getting the *keys* of the **openingHours** object
const values = Object.values(openingHours);
console.log(values);
//
// **Entire Object**
// ========================================
// But in order to loop over the entire object, I really need to use the **entries()** method, which is **names** + **values** *combined together*
const entries = Object.entries(openingHours);
console.log(entries);

// NOW I have an **array of arrays**, or *2D Array*, **which is inclusive of both a key and its respective value pair stored inside a nested array
// So *now* I can use a *for of* loop to loop through the *new* **entries array of arrays**
// Which ultimately gives me, both, **each key and each value**
// So I've essentially just added *another layer of abstraction* ontop of the entries array because.....I'm going to **destructure** the *values* object, which is really an *array* but is still *technically* an Object in Javascript since **arrays are objects** lol
//
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
