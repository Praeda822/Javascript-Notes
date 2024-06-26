'use strict';

// ========================================
// Modern Javascript Development
// ========================================
//
// The first step of a build process in modern javascsript is known as the "Bundling" process, in which all my modules and/or 3rd party packages are bundled into one big file
// This is a pretty complicated process, but it can eleminate unused code and compress our code as well
// This step is important for TWO big reasons:
// 1. Older browsers don't support Modules at all, so any code in a module can not be executed by any older browser
//2 . It's significantly better for performance to limit the amount of files sent to the browser, and that the bundling step compresses our code

// The second step of the build process in modern javascript is known as Transpiling/Polyfilling
// Transpiling/Polyfilling is a process in where all modern javascript & features are converted BACK into ES5 syntax, so that even older browser can read our code without breaking
// THIS is done using a tool known as...Babel!!

// After these two steps, I'll end up with the final javascript bundle ready to be deployed on a server for production
// I DON'T do this process myself, and should instead be using a modern javascript bundler, such as "webpack" or "parcel"
// Javascript Bundlers, such as Webpack & Parcel, take my raw code and transform it into a javascript bundle
// Between Webpack and Parcel, Webpack is the more popular of the two javascript bundlers, but it's a fucker to configure whereas Parcel simply just works out of the box (no set-up code)

//
//
// ========================================
// An Overview of Modules
// ========================================
//
// A module is a reusable pice of code that encapsualtes implementation details of an app
// A module is, usually, a standalone file, and includes "imports" and "exports"
// Any code blocks, such as functions, that I export from a module are known as Public APIs
// In the case of modules, however, this Public API is consumed by importing values into a module
// These imported modules are then called dependencies of the imported module, since it relies on it's parent code
// I can think of modules as small building blocks that I can then put together to build really complex applications, and there are a few advantages of using modules to compose my software
// The idea of modules is that it allows me to isolate my codeblocks without them interfering with the entire codebase - rather they're structured in a way that sort of "attaches" them
// Modules are also used to abstract code complexity, and implement low level code and then-for sake of functionality, accessibility, AND compatibility-I can import these abstractions into other modules
// The use of Modules also naturally lead s to a more structured, and organised codebase since modules allow me to easily reuse code, even across multiple projects I may have

// Native Jvascript (ES6) Modules
// ========================================
//
// ES6 modules are stored in files,
// EXACTLY. ONE. MODULE. PER. FILE.
// But there are big differences between my ES6 modules and my scripts:
//
// 1. The top-level variables in ES6 Modules are SCOPED TO THE MODULE by default, which means the variables are PRIVATE to the module by default, with the only way an outside module can access a value that's inside a module is by EXPORTING that value
// 1,5. In scripts, however, all top-level variables are GLOBAL, which can lead to problems like in my Mapty project where I polluted the fuck out of the global namespace, with private variables & proper encapsulation being presented to me as the solution for the problem of colliding variables fighting over the same names
//
// 2. All ES6 modules are ALWAYS executed in strict mode by default, so I don't need to declare strict mode
// 2,5. Scripts, however are executed in "sloppy mode" by default
//
// 3. In ES6 Modules, the .this keyword is always "undefined" at the top level
// 3,5. In Scripts, the .this keyword will point to the window() object
//
// 4. A special feature of ES6 modules, as well as overall code reusability, is the ability to use the Export/Import syntax
// 4,5. In regular Scripts, exporting/importing values is nooooo bueno, but, regarding imports/exports, it's important for me to remember that they can only happen at the top level, so outside of any function or if block, and ALL my imports are hoisted to the top of the file since importing always occurs first in modules
//
// 5. In order to link an ES6 module to my HTML, I need to use the script tag with a type declaration of "module"": <script type="module">
// 5,5. Regular 'ol script tag: <script>
//
// 6. Es6 modules are downloaded & retrieved in an ASYNCHRONOUS WAY, so they'll be handled by the/an WebAPI
// 6,5. Regular scripts are downloaded by default in a blocking, synchronous way, UNLESS I use the async/defer attributes on my scriptt ag
//
//
// How ES6 Modules Are Imported!
// ========================================
//
// index.js
// import { rand } from '.math.js';
// import { showDice } from '.dom.js';
// const dice = rand(1, 6, 2);
// showDice(dice);

// Here I'm importing two values called "rend" and "showDice" from both the math.js & dom.js modules, respectively

// Now as soon as Javascript code is executed, the first step is that the code is PARSED, which means that the code is simply being read by the Runtime but not yet executed, and this is also the moment where the imports are hoisted to the top of the file, with this ENTIRE module importing process occurring before the code executes

// So first of all the index.js file imports both of the math.js and dom.js modules in a SYNCHRONOUS way, which means that only AFTER all imported modules have been downloaded and executed will the main index.js module be executed as well
// This process is only possible due to top-level ("static") imports, which make imports known before the engine's runtime execution
// So by knowing all of the module dependencies between my modules before execution, bundlers like webpack and Parcel can then join multiple modules together and eliminate that code and this is why I can only import and export outside of any code that needs to be executed, such as afunction or an if block

// After the parsing process has digured out which modules it needs to import, these modules are then downloaded from the web-server in an ASYNCHRONOUS way - remember that SYNCHRONOUS is importing
// After a module arrives, it's then parsed and then the modules EXPORTS are linked to the module's IMPORTS in index.js
// In the example above, the math.js module is eporting a module called { rand }, and this export is consequently connected, or linked, to the { rand } object in my index.js module
// This link, or connection, is what's known as a "Live Connection", which means exported values are not copied to imports
// Instead, the import is essentially just a reference to the exported value, like a pointer, so when the value changes in the exported module, then the same value also changes in the importing module
// Finally, the imported modules are executed, with the subsequent execution of the index.js module being last, as it encapsulates all of my modules in the runtime
//
//
// ========================================
// Exporting/Importing in ES6 Modules
// ========================================
//
// Named Exports
// ========================================
//
// Import statements to the TOP of the file
// I can also reassign the values to variables declaratively by using the "as" keyword
// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';
// console.log('importing module');
// console.log(shippingCost);

// addToCart('bread', 5);
// 5 bread was added to the cart

// console.log(price, quantity);
// 237, 23

// Import all the exports of a module at once into one singular object
// import shoppingCart, * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

// Holy fuck that's sick
// I shortened all the shit commented out above by essentially importing the data in shoppingCart.js module as a new Javascript object containing shoppingCart's exported values
// Then I call the addToCart method on the object and pass in my arguments
// So I'm basically exporting a Public API, like a class, as if ShoppingCart was a class with it's own built-in method | SIIIIIICK

// Now by exporting the default, which is the module's function VALUE, I can import that same module for re use:
// I can even mix-match named defaults and named exports, but best-practice dictates that I should never do dumb shit like writing messy code
// The preferred style is to use ONE DEFAULT EXPORT PER MODULE and the IMPORT that module just like I have with my code here, but that's not a hard & rigid rule
// HOWEVER: DO NOT MIX NAMED AND DEFAULT EXPORTS
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('milk', 1);
add('apples', 3);
// An example of mixing and matching...
// I eport the empty cart array, and now I can create a new object that contains an object of arrays filled with the values provided above
// and I can manipulate the arrays to muck around with the data however I see fit FUCK ME that's actually sick
// This also proves that the imported value is NOT an empty object, nor a simply copy of the exported empty cart array, but instead a NEW object full of arrays created by use of the add function and populated with the values given
// So, even though they are technically the exact same copy of the exact same object behind the scenes, IMPORTS ARE NOT 1:1 COPIES OF THEIR RESPECTIVE EXPORTS
// THIS IS KNOWN AS A LIVE CONNECTION, meaning that they point to the same place in the memory (pointer)
console.log(cart);

//
//
// ========================================
// Top-Level Await
// ========================================
//
// From ES 2022, I can now use the await keyword OUTSIDE of asynchronous functions, at least within modules
//
// async function x(){}
// console.log('Start fetching..');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// Whilst it's all well-and-good for me to use top-level await, but now I've actually blockeed the entire execution of the module now

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // Get very last element of an array
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Calling an asynchronous function will ALWAYS return a promise!!!

const lastPost = getLastPost();
console.log(lastPost); // Pending Promise

// So I can actually use the promise as an object and call my .then() method on it to get access to the promise data, and console.log it

// lastPost.then(last => console.log(last));

// BUT above is a disgusting way of doing it
// Instead, I can use top-level await for this:
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// Important to remember!!!
// If one module imports a module which has a top-level await inside of it, then that importing module will wait for the imported module to finish the blocking code

// So, a top-level await, an await OUTSIDE of any asynchronous function, will block both its own entire module as well as the module importing it!!

//
//
// ========================================
// The Module Pattern
// ========================================
//
// The main goal of the Module Pattern is to encapsulate functionality, implement private data, and expose a public API.
// The best way to achieve all of this is by using a function, since functions provide private data by default and allow us to return a value from the function, which can serve as our public API.
// The ONLY PURPOSE of this function is to create a new scope and return data from that scope.
// We use an IIFE (Immediately Invoked Function Expression) to ensure the function runs once and doesn't pollute the global scope.

const ShoppingCart2 = (function () {
  // Private variables and functions
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // All the data in this IIFE is PRIVATE, as it's limited to the function scope.
  // To "expose" the Public API, we simply return an object with the elements we want to make public.

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// Using the public API
ShoppingCart2.addToCart('cucumber', 2);
ShoppingCart2.addToCart('broccoli', 5);
console.log(ShoppingCart2);

// This is all possible thanks to CLOSURES.
// Closures allow a function to access all the variables that were present when it was created.
// Since our functions are all scoped together, they never lose their "connection". For instance, the addToCart function can still access the cart variable within the ShoppingCart2 object.
// The only problem is that if I wanted one module per file, like I have with ES6 modules, then I have to create lots of different scripts and link them ALL back to the HTML file.
// I need to be very careful in which order they are declared within the HTML, and I would have all my variables living in the GLOBAL scope.
// I also wouldn't be able to bundle them all together using a module bundler.

//
// ========================================
// CommonJS Modules
// ========================================
//
// ========================================
// Introduction to NPM
// ========================================
// //
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// New browser API for deep copy, structureClone:

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'cheese', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = structuredClone(state);
state.user.loggedIn = false;
console.log(stateClone); // false
// State's logged in variable will stay true, but the copy will be changed to false
// Using new API:
console.log(stateDeepClone);

//
//
// ========================================
// Building With Parcel & NPM Scripts
// ========================================
//
// npx parcel index.html

// Hot Module Reloading
// ========================================
//
// Hot Module Reloading means that whenever I change something in one of the modules, it will then AUTOMATICALLY trigger a rebuild, with that new modified bundle also automatically being included by being injected into the browser
// This is AMAZING for testing state whenever I'm testing something out

if (module.hot) {
  module.hot.accept();
}

// Now I can npm run start, since I've declared the start script to be parcel index.html

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const patrick = new Person('Patrick');
console.log('Patrick' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// Polyfilling async functions
import 'regenerator-runtime/runtime';

//
//
// ========================================
// Review: Modern & Clean Javascript Code
// ========================================
//
// Readable Code
// ========================================
//
// I should write my code not only in a way that others can understand it, but that I can also understand it if I was to come back a year later and read it
// I should also avoid being too clever, or overly verbose, and I should be using descriptive variable names (what the variable contains) as well as descriptive function names (what the function does)
//
//
// General Code
// ========================================
// I should ALWAYS use the DRY principle whenever I refactor my code
// I should NOT pollute the global namespace with shitty variable names and garbage
// I should use strong types checks, like === and !==, and i shouldn't use shit like var
//
//
// Functions
// ========================================
//
// I generally, and should always strive for, want my functions to do ONLY ONE THING
// I shouldn't use more than 3 function parameters if I can help it, and I should use default parameters wherever possible (like element, index, array)
//
//
// OOP
// ========================================
//
// I should get in the habit of using ES6 classes to properly encapsulate my data, so I DON'T MUTATE IT from outside the class (and, ideally, can't)
// I should implement method chaining, like with my promise .then() returns, and I should NOT use arrow functions as my methods (in regular objects) as then I won't have access to the .this keyword
//
//
// Avoid Nested Code
// ========================================
//
// I should implement early returns, or guard clauses, for my code, and I should use the ternary (conditional) or logical operators instead of if blocks
// And instead of if/else-if blocks, I should just use multiple ifs in my code, for readabiltiy and reusabiltiy
// I should also try avoid using for loops, including for of and foreach loops, and instead should strive to use _ideally) built-in array methods instead
// I should also avoid using callback-based asynchronous APIS, instead opting for Async/Await or .then() to handle asynchronous code
//
//
// Asynchronous Code
// ========================================
//
// I should consume promises with async await for best readability
// Whenever possible, I should run my promises in parallel by using the Promise.all() method
