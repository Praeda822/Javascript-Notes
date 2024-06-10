'use strict';

///////////////////////////////////////
// ========================================
// Promises, Async/Await, AJAX and APIs
// ========================================
//
// Asynchronous vs Synchronous Code
// ========================================
//
// Most of the code I've been writing is known as Synchronous code
// Synchronous code just means that my code is executed line-by-line by the exact order of execution, with each line of code waiting for the previous line to finish, with long-running operations blocking further code execution

// Asynchronous code is executed AFTER a task that runs in the "background" finishes
// Asynchronous code is NON-BLOCKING, which means the code can execute whilst something else is running in the executon context
// Asynchronous code doesn't wait for an synchronous task to finish its work
// Callback functions on their own DO NOT make code asynchronous!!
// So, asynchronous code is typically found in input/output operations, network requests, and/or fetching data - anything that could take an indiscriminate amount of time
// Most of my APIs will be using a data format known as JSON, and JSON is basically just a javascript object that has been converted to a string
//
// AJAX
// ========================================
//
// AJAX stands for Aynschronous Javascript and XML
// AJAX allows us to communicate with remote web servers in an asynchronous way
// Using AJAX calls I can request data from web servers in a dynamic way
// I'd typically use an AJAX call to make a HTTP request to a web server to interact with that web server's API
// This is known as an "Online" API, and an Online API can be defined as an application that is running on a web server that RECEIVES the requests for data, retrieves that data from somewhere inside a dodgy MySQL database, retrieiving it, and consequently sending back that retrieved data as its response
// I'll be able to, one day, build my OWN web APIs (using something like Node.js) or by the use of 3rd-Party APIs
//
//
// APIs
// ========================================
//
// API stands for Application Programming Interface
// An API is a piece of software that can be used by another software in order to allow applications to talk to one another
// So, an API is essentially a self-contained piece of software that allow other pieces of software to interact with them
// remember making the public methods in our ES6 class lecture, and then I was able to essentially "interact" with my objects I assigned with the methods
//
//
// ========================================
// Using the AJAX Call: The XMLHttp Function
// ========================================

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// The OLD SKOOL Way (Callback Hell)
// ========================================
//
//
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${Object.values(data.flags)[0]}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${
          (+data.population / 1000000).toFixed(1)
          // Our actual pop: 25687041
        }m people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// Function to get country and its neighbour data
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   // Set timeout to 10 seconds
//   request.timeout = 10000;
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     // Set timeout to 10 seconds
//     request2.timeout = 10000;
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [neighbourData] = JSON.parse(this.responseText);
//       renderCountry(neighbourData, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');

// Don't get trapped in CALLBACK HELL
// Callback Hell is when I have a shitload of nested callbacks in order to execute asynchronous tasks sequentially
// This happens for all asynchronous tasks, which are handled by callbacks and not just with AJAX calls
// Callback Hell also makes my code both messy and hard to maintain - no gewd.

//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   // Set timeout to 10 seconds
//   request.timeout = 10000;
//   request.send();
//
//
// ========================================
// Promises
// ========================================
//
// In Javascript, a promise is an object that is used as a placeholder for the future result of an asynchronous operation
// AKA, a promise is a container for an asynchronously delivered value
// AKA, a promise is a container that a future value will be stored within
// By utilising promises, I no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
// And instead of nesting callbacks and producing shitty code, I'm able to chain promises for a sequence of asynchronous operations which are actually necessary to escape callback hell - Dante's Callback LOL

// Render error function
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// Helper function to fetch JSON data
const getJSON = function (url, errorMsg = 'Something went wrong..') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       if (!('borders' in data[0])) {
//         throw new Error('No neighbour found');
//       }

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) {
//         throw new Error('No neighbour found');
//       }

//       // // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       if (err.message === 'No neighbour found') {
//         renderError(`No neighbouring countries found.`);
//       } else {
//         console.error(`${err} 💣`);
//       }
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// Main function to get the country data (lmao)
const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : undefined;
      if (!neighbour) throw new Error('No neighbour found');

      // Fetch neighbour data Country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong, ${err.message}.Try again!`);
    })
    .finally((countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});

//
// The Promise Lifecycle
// ========================================
//
// Before the future value is available, a promise is in the "Pending" state
// DURING THIS TIME, the ansynchronous task is still doing its work in the background, but when that task finally finishes it is considered to be in the "Settled" state
// The state of promises can only be set ONCE (so it will stay that way indefinitely), and there are TWO (2) kinds of "Settled" states:

// FULFILLED Promises, where a promise has successfully resulted in a stored value (like successfully retrieving data from an API)
// REJECTED Promises, where a promise has FAILED in retrieving data from an API, like when you live in Australia and literally have ADSL/2+ so you don't have the speed or bandwidth to connect to already slow APIs (lmao)

// When I get the result of a promise, and consequently use it, this is known as "CONSUMING" the promise
// And a promise can ONLY be consumed when I already have that promise to BE consumed
// When I want to CONSUME that promise I successfully fetched, I can use the .then() method, and I need to pass a callback function that executes as soon as the promise is fulfilled, with the function recieving ONE argument: the resulting value of that fulfilled promise
// Then in order to actually read that retrieved data, I need to call the json() method on that response
// The json() method is a method that is available on ALL responses of the fetch method
// The only issue with the json() method is that it's ALSO an aysnchronous function, which means it will ALSO return a NEW promise, so I'll need to both return the promise, but also handle that new promise
// I do that by, as I said before, chaining methods, in this case I want to chain the .then() method
// Important to note that the .then() method ALWAYS returns a promise, irrespective of whether any data is actually returned or not, but if we DO retujrn a value, then THAT value will become the value of the returned promise
// So, I always want to return a promise, then handle it OUTSIDE of the chain with the .then() method
//
//
// ========================================
// Handling Rejected Promises
// ========================================
//
// I have two ways of handling rejected promises:

// 1. Pass a second callback function INTO the .then() method that handles the returned promise
// Since the .then() method's first callback function is for successful response promise states, and I can denote that with "err"
// VERY IMPORTANT TO REMEMBER: Any error I get in any of the callback functions nested within their respective .then() handlers will immediately TERMINATE that .then() handler, consequently propagating down to my .catch() error handler function
//
//
//
// ========================================
// Review: The Javascript Runtime
// ========================================
//
// The Javascript runtime is basically a container that contains all the bits and pieces necessary to execute javsacript code
// The heart of the Javascript runtime is known as the Engine, and the Engine is where the code is executed, within the Call tack, as well as where my Javascript objects are stored, within the Memory Heap
// Within my Runtime container, I next have the WEB APIs, like the DOM, Timers, Fetch API, GeoLocation API, etc, and these are provided TO the engine
// Next is the Callback Queue, and this is the data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred
// Finally, the Event Loop waits until the Call Stack is empty, then it takes the callbacks from the callback queue and places them into the call stack to be executed
// The Event Loop is the essential piece that makes asynchronous code possible in Javascript, and is the reason why we have non-blocking concurrency model in Javascript, a Concurrency Model meaning just how a language handles multiple tasks happening simultaneously
// But how can I execute asynchronous code in a NON-BLOCKING way when Javscript only has ONE THREAD OF EXECUTION IN THE ENGINE?
// Well, I run my asynchronous code, and ALL my asycnrhonous tasks, in the "background", the background being the Web API environment itself, since the Web API environment isn't actually part of Javascript or the DOM
// That's why, for instance, loading an image should occur in a Web APIs environment
// Each time the Event Loop takes a callback from the callback queue to be executed in the, what was a previously empty, Call Stack we call this an "Event Loop Tick"
// This means, basically, the Event Loop orchestrates the Javascript Runtime
// But PROMISES, like those used in the fetch() function work in a different way, in that they are placed into the Microtasks Queue
// The Microtasks Queue is special because it takes priority OVER the Callback Queue!!
// At the end of an event loop tick, the event loop will check, first for any microtasks waiting in the microtask queue, and if none are there will it only move on to the callback queue
//
//
// ========================================
// The Event Loop in Practice
// ========================================
//
// 1. console logs executed first because they're SYNCHRONOUS code and so are part of the Execution Context's Call Stack.
// 2. Promise gets resolved second since it's ASYNCHRONOUS CODE and is Microtask
// 3. callback timer resolved THIRD since it's ASYNCHRONOUS CODE
// Important to note that both the callback timer and the promise get resolved at exactly the same time

console.log('====Test Start=====');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('=====Test End=====');

//
//

//
// Start by creating a new promise using the Promise constructor, so it's just a js object
// The promise constructor takes only one argument, and that is the "Executor Function"
// The Executor Function will take two arguments, the resolve & reject functions
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('=====LOTTERY DRAW IS STARTING=====');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // resolve marks the promise as fulfilled
      // resolve() takes the fulfilled value of the promise to be consumed with .then()
      resolve('PROMISE RESOLVED. ASSUME THE POSITION');
    } else {
      // reject marks the promise as rejected
      // reject() takes the error message that I later want to be used by the catch()error handler
      // I can also create a new error object to simulate a REAL error
      reject(new Error('PROMISE UNRESOLVED. YOU LOSE, PUNY HUMAN'));
    }
  }, 2000);
});

// Now I need to consume the promised value, by using my lotteryPromise variable as an (the promise) object and calling the .then() method on it
// .then() takes a callback function that will be called with the promise's result value
// FOLLOWED immediately by the catch() method to catch the error if one exists
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// The ABOVE code is how I properly encapsulate my code, aka how to properly abstract functionality away for security, and is a really nice & helpul pattern to remember
// In practice, though, most of the time I'm just going to simply consume promises, and I'll usually only build promises to wrap old, callback-based functions into new Promises
// The process of wrapping old, callback-based functions into new promises is known as Promisifying
// Promisifying means to convert callback-based asynchronous behaviour to promise-based

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// So I call my function and pass seconds as its argument and I handle the returned promise with .then()
wait(2)
  .then(() => {
    console.log(
      'I waited 2 whole seconds and all I got was this lousy console.log'
    );
    // Then I need to return a new promise
    return wait(1);
  })
  // And then handle the new promise
  .then(() => console.log('I waited for 1 second, instead'));

// I can also pass the resolve() method, taking the resolved promise value as an argument, straight on to the promise prototype and chain the handler with the .then() method
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Sucks to suck, hombre!')).catch(x =>
  console.error(x)
);

// ========================================
// Promisifying the GeoLocation API
// ========================================
//
//
// In the last section I was passing a string as my (successful) resolve argument(s), as I knew I was going to get back a JSON String
// But in my code below, I'm declaring my position object AS THE successful resolved value of my requested promise
console.log('Getting position...');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   // Successful promise
    //   position => resolve(position),
    //   // Rejected promise
    //   err => reject(err)
    // );
    // Refactored to demonstrate how I can automatically pass resolve itself as the callback function which will get the current position (361-363)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// I need to handle my promise again..
// Don't need an error block just yet
getPosition().then(pos => console.log(pos));
//
//
// ========================================
// Consuming Promises with Async/Await
// ========================================
//
// I can make async functions by simply prepending the function with the async declarator
// Now this function is asynchronous, which means it will keep running in the background while performing the code inside of it
// Then, when the function is done, it will automatically return a Promise!
// Inside my async function, I can have one, or more, "await" statements, and the await keyword essentially STOPS the code execution at this point of the function until a/the promise has been fulfilled - it's like a dynamic gate valve!
// In this case, until the data has been fetched from the geolocation api
// "Stalling" the code in an asynchronous function is OK since my async operations run in the Web API AND since I'm ALSO waiting for a PROMISE, that means it's only going to go into my MICROTASK QUEUE when the function itself is complete
// Which is a long-winded way of saying that it DOESN'T block my main, and only, thread of execuition - so, my call stack
// That's what's so special about async/await: it makes everything look like it's front-loaded but it's technically two different data streams originating from the same source
// It's important that I remember that async/await is essentially syntactic sugar of using the .then() method in my promises:
// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`
//   ).then(res=>console.log(res))
// It's all the same shit - just a weird flex but ok

const whereAmI = async function (country) {
  const res = await fetch(
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  // Remember, JSON returns a NEW promise - the JSON string containing my country object
  const data = await res.json();
  // Now data contains the country object!!
  console.log(data);
  // Call my render country function on it...
  renderCountry(data[0]);
};
whereAmI('portugal');
