'use strict';

//========================================
// What *is* Javascript?
//========================================

// High-level
//========================================

// Garbage Collection
//========================================
// Javascript has in-built "Garbage Collection" which is an algorithm inside the Javascript engine that automatically old, unused objects from the computer's memory

// Interpreted or Just-in-time compiled
//========================================
// Javascript is an interpreted or "just-in-time compiled" language

// Multi-paradigm
//========================================
// Javascript is a multi-paradigm language
// In programming, a **Paradigm** is an approach and mindset of structuring code, which will direct your coding style and technique
// Three different programming paradigms are:
//      1. Proecedural programming
//      2. Object-oriented programming (OOP)
//      3. Functional programming (FP)
// Procedural programming is what I've been doing so far, just organising the code in a very linear way with some functions in between
// We can also define many paradigms as **Imperative** vs. **Declarative**

// Prototype-based object-oriented
//========================================
// The Javascript language is a Prototype-based object-oriented approach to programming
// That means that *almost* **everything** in Javascript is an **object**, *except* for **primitive** values such as **numbers**, **strings**, **etc.*
// Arrays, for instance, are objects we can pass methods to because they are built from a blueprint, beginning with a **Prototype**. This prototype contains all of the **array methods**.
// Then, the arrays I create in my code **inherit** the methods *from* that blueprint so that they are able to be used on the array(s).

// First-class functions
//========================================
// In a language with first-class functions, **functions are simply treated as variables**
// This means I am able **to pass them into other functions, and return them from other functions**.
// An example of a first-class function is when I coded the modal window and **passed the closeModal function, responsible for adding classes to elements, into another function as an *argument***.

// Dynamic
//========================================
// Javascript is a dynamic language, which means ***Dynamically Typed***.
// This means with Javascript, **I don't assign data types to variables**.
// Instead, **they only become known at runtime**, when the Javascript engine executes my code
// Also, the types of variables are able to be easily changed as I reassign variables, kind of like "automatic updating", and this is what *dyanamically typed* means
// **MOST OTHER LANGUAGES DO NOT HAAVE THIS | I MUST ASSIGN DATA TYPES TO MY VARIABLES - C, JAVA, RUBY**.

// Single-threaded
// &
// Non-blocking event loop (concurrency model)
//========================================
// A **Concurrency Model** is how the Javascript engine handles multiple tasks happening at the same time
// I *need* this for Javascript, because the language only runs in *one* **Single Thread**, *which means it can **only do one thing at a time***.
// Obviously this sounds counter-intuitive when you take into consideration *long-running tasks* clogging up the entire thread like a fresh poo in an under-sized 65mm pipe
//  However, by using an **event loop** I can take said long-running task, *execute them in the background*, and then **put them back in the main thread once they are finished**.
// This in, in a nutshell, Javascript's **Non-blocking Concurrency Model with a Single Thread**.
// Keep in mind this *is* a **HUGE** over-simplification.

//========================================
// The Javascript Engine
//========================================
