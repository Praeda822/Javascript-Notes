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
// Synchronous code just means that my code is executed line-by-line by the exact order of execution, with each line of code waiting for the previous line to finish, with long-running operations block further code execution

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
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${
          (+data.population / 1000000).toFixed(1)
          // Our actual pop: 25687041
        }m people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )}</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
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

const request = fetch('https://restcountries.com/v3.1/name/australia');
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(function (data) {
      renderCountry(data[0]);

      const neighbour = data.borders?.[0];

      if (!neighbour) return;
    });
};
getCountryData('australia');
// In Javascript, a promise is an object that is used as a placeholder for the future result of an asynchronous operation
// AKA, a promise is a container for an asynchronously delivered value
// AKA, a promise is a container for a future value to be stored within
// By utilising promises, I no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
// And instead of nesting callbacks and producing shitty code, I'm able to chain promises for a sequence of asynchronous operations which are actually necessary to escape callback hell - Dante's Callback LOL
//
// The Promise Lifecycle
// ========================================
//
// Before the future value is available, a promise is in the "Pending" state
// DURING THIS TIME, the ansyynchronous task is still doing its work in the background, but when that task finally finishes it is considered to be in the "Settled" state
// The state of promises can only be set ONCE (so it will stay that way indefinitely), and there are TWO (2) kinds of "Settled" states:

// ========================================
// FULFILLED Promises, where a promise has successfully resulted in a stored value (like successfully retrieving data from an API)
// REJECTED Promises, where a promise has FAILED in retrieving data from an API, like when you live in Australia and literally have ADSL/2+ so I don't have the speed or bandwidth to connect to already slow APIs (lmao)
// ========================================

// When I get the result of a promise, and consequently use it, this is known as "CONSUMING" the promise
// And a promise can ONLY be consumed when I already have that promise to BE consumed
// When I want to CONSUME that promise I successfully fetched, I can use the .then() method, and I need to pass a callback function that executes as soon as the promise is fulfilled, with the function recieving ONE argument: the resulting value of that fulfilled promise
// Then in order to actually read that retrieved data, I need to call the json() method on that response
// The json() method is a method that is available on ALL responses of the fetch method
// The only issue with the json() method is that it's ALSO an aysnchronous function, which means it will ALSO return a NEW promise, so I'll need to both return the promise, but also handle that new promise
// I do that by, as I said before, chaining methods, in this case I want to chain the .then() method
