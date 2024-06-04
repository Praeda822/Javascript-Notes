'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
