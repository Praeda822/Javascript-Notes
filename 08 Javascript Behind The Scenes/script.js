'use strict';

//========================================
// **Computer Science Notes**
//========================================

// **Compilation vs Interpretation**
//========================================

// **Compilation** is a process where entire code is converted into machine code at once.
// Then the code is written to a binary file that can be executed by a computer in the CPU.

// **Interpretation** is a process where an *Interpreter* runs through the source code and **executes the code line by line**.

// **Just-in-time Compilation** is a process that blends both **Compilation *and* Interpretation**
// We achieve this by **compiling the entire code into machine code at once, then executing it right away**.

//========================================
// **What *is* Javascript?**
//========================================

// **High-level**
//========================================

// **Garbage Collection**
//========================================
// Javascript has in-built "Garbage Collection" which is an algorithm inside the Javascript engine that automatically old, unused objects from the computer's memory

// **Interpreted or Just-in-time compiled**
//========================================
// Javascript is an interpreted or "just-in-time compiled" language

// **Multi-paradigm**
//========================================
// Javascript is a multi-paradigm language
// In programming, a **Paradigm** is an approach and mindset of structuring code, which will direct your coding style and technique
// Three different programming paradigms are:
//      1. Proecedural programming
//      2. Object-oriented programming (OOP)
//      3. Functional programming (FP)
// Procedural programming is what I've been doing so far, just organising the code in a very linear way with some functions in between
// We can also define many paradigms as **Imperative** vs. **Declarative**

// **Prototype-based object-oriented**
//========================================
// The Javascript language is a Prototype-based object-oriented approach to programming
// That means that *almost* **everything** in Javascript is an **object**, *except* for **primitive** values such as **numbers**, **strings**, **etc.*
// Arrays, for instance, are objects we can pass methods to because they are built from a blueprint, beginning with a **Prototype**. This prototype contains all of the **array methods**.
// Then, the arrays I create in my code **inherit** the methods *from* that blueprint so that they are able to be used on the array(s).

// **First-class functions**
//========================================
// In a language with first-class functions, **functions are simply treated as variables**
// This means I am able **to pass them into other functions, and return them from other functions**.
// An example of a first-class function is when I coded the modal window and **passed the closeModal function, responsible for adding classes to elements, into another function as an *argument***.

// **Dynamic**
//========================================
// Javascript is a dynamic language, which means ***Dynamically Typed***.
// This means with Javascript, **I don't assign data types to variables**.
// Instead, **they only become known at runtime**, when the Javascript engine executes my code
// Also, the types of variables are able to be easily changed as I reassign variables, kind of like "automatic updating", and this is what *dyanamically typed* means
// **MOST OTHER LANGUAGES DO NOT HAAVE THIS | I MUST ASSIGN DATA TYPES TO MY VARIABLES - C, JAVA, RUBY**.

// **Single-threaded**
// &
// **Non-blocking event loop (concurrency model)**
//========================================
// A **Concurrency Model** is how the Javascript engine handles multiple tasks happening at the same time
// I *need* this for Javascript, because the language only runs in *one* **Single Thread**, *which means it can **only do one thing at a time***.
// Obviously this sounds counter-intuitive when you take into consideration *long-running tasks* clogging up the entire thread like a fresh poo in an under-sized 65mm pipe
//  However, by using an **event loop** I can take said long-running task, *execute them in the background*, and then **put them back in the main thread once they are finished**.
// This in, in a nutshell, Javascript's **Non-blocking Concurrency Model with a Single Thread**.
// Keep in mind this *is* a **HUGE** over-simplification.

//========================================
// **The Javascript Engine**
//========================================

// Every Javascript engine always contains a **Callstack** and a **Heap**.
// The **callstack is where our code is executed** using something called **Execution Context**
// Then, the **Heap** is an **Unstructured Memory Pool** that **stores all of the objects our application needs in the memory**.
// So when a piece of Javascript code enters the engine, the first step we take is to **PARSE** the code, which means *to read* the code.
// During the *parsing* process, the code is parsed into a *data structure* called the **Abstract Syntax Tree**, or *AST*
// This works by first splitting up each line of code into pieces that ae *meaningful* to the language, **such as the *const* or *function* keywords**, and **then *saving* all of these pieces to the tree in a structured way**.
// This step *also* checks for any syntax errors, **with the resulting tree consequently being used to generate the machine code**.
// Next is **Compilation**. This where we take the *AST* and **compile it into machine code**
// Then, this code is **Executed** in the **Call Stack** right away, as Javascript is a *Just-in-time* compiled language
// During this entire process, our code is being **optimized & recompiled** in the background during the already running programming execution
// This can be done multiple times, and every time the code is *optimized*, the *unoptimized code* is *swept up*, or **Garbage Collected**, without every stopping execution of the application
// All of this *parsing*, *compiling*, *executing*, and *optimizing*, happens in *special threads* that we can't access from the codebase, with different engines implementing this process in different ways.

//========================================
// **The Javascript Runtime**
//========================================

// Imagine a big box, this is the **Runtime**, that contains smaller boxes, denoted with the following:

// **The Javascript engine, the *Heart***.
//========================================
// The *Javascript Engine* contains the **heap** (*an **Unstructured Memory Pool** where my application's objects are stored in memory*) and the **call stack** (*where my code is **executed***).

// **WEB APIs**
//========================================
// **WEB APIs** are **functionalities provided to the engine that are *not* actually part of the Javascript language itself**.
// Javascript has *access* to these APIs through the **global window object**.
// **WEB APIs** contain everything related to the **DOM**, **Timers**, **FetchAPI**, **Console.log()**, **etc.**

// **Callback Queue**
//========================================
// The **Calback Queue** is a *data structure* that **contains all of the *callback functions* that are *ready to be executed***.
// The **Callback Queue** contains things like **'click'**, **'timer'**, **'data'**, **etc.**
// An example of a **Callback Function** is an **Event-handler Function** attached to a *button* in the **DOM**
// These **Event-handler Functions** are also called **Callback Functions**, because *as an (the) event happens*, for example a *click*, the **callback function will be called**.
// Behind the scenes, the **Callback Function** is put into the **Callback Queue*, then, when the **Call Stack** is empty, the **Callback Function** is *passed to the stack so it can be **executed***.
// This is handled by something called the **Event Loop**, and this is also the **Event Loop**'s primary job, as well as being a ***strict requirement*** for Javascript's **Single-Threaded Non-blocking Concurrency Model**, which is again, just a fancy way of saying ***how the Javascript engine handles multiple tasks happening at the same time***
// The ***Node.JS Javascript Runtime*** would look as if the **WebAPIs** box has been removed and replaced instead with **C++ bindings** * a **Thread Pool**.

//========================================
// **What is an Execution Context?**
//========================================
// An **Execution Context** is an *abstract concept* that can be defined as ***an environment in which a piece of Javascript code is executed***
// The **Execution Context** is like **a box that stores all the necessary information for some code to be executed, such as *local variables*, or *arguments passed into a function***
// Javascript code **ALWAYS** runs inside an **Executon Context**
// There is only ever ***ONE* Global Execution Context**, and it is *always* there as the **Default Context**, and the **Default Context** is created for code **that is not inside any function**, again, *AKA **Top-level Code***

//========================================
// **How Javascript is executed in The Callstack**
//========================================

// So our code has been compiled and is **ready to be executed**
// Now a ***Global Execution Context* is created for the *Top-level code***, with "*Top-level code*" simply meaning **code that is *not* inside any function**
// So, again, **ONLY** the code **outside** of functions will be executed, since functions should *only* be executed when they are *called*, like my **number guessing game** and my **init()** function

// Now that the *top-level code* has finished executing, **functions now start to execute** as well
// For each and every function call, a new **Execution Context** will be created that **contains all of the information necessary to run that *exact* function**
// This same rule *also* applies to **methods**, as well, as **methods** are simply *functions that are attached to objects*
// All of these *execution contexts* together make up the **Callstack**
// When *all* the of the **functions** are done executing, the Javascript engine will basically wait around for the **callback functions** to arrive so that it can *execute* them, like a *'click' event*, for example
// Keeping in mind that it is the **Event Loop** responsible for *providing* these new **callback functions**

//========================================
// **What is *inside* an Execution Context?**
//========================================
// The inside of an **Execution Context** is known as a *Variable Environment* and this is where all our variables (***let**, **const**, **var***) and function declarations are stored
// We also have a special object known as the ***Arguments Object***, which contains **all of the arguments that were passed into the function that the *current* execution context belongs to**
// So **since every *function* gets its own *execution context* as soon as the function is called, all of the *variables* that are *declared inside a function* will *end up within its Variable Environment***
// However, functions can access variables outside the function, due to something called the **Scope Chain**, and **Scoping**
// The **Scope Chain** contains **references to variables that are located outside of the current function**, and to keep track of the **Scope Chain** it is **stored within each *Execution Context***
// Finally, each *Execution Context* contains the ***this*** keyword
// *All* of the **Execution Environment**'s contents are generated during the *creation phase*, **right before execution**
// **Arrow Functions** do ***NOT*** get their own ***arguments** object*, and do ***NOT** get their own ***this*** keyword, **instead they can use the *arguments* object from their nearest *regular function parent***

//========================================
// **What *is* the Javascript Callstack?**
//========================================
// The **Javascript Callstack**, together with the **Memory Heap**, make up the **Javascript Engine** itself.
// The **Javascript Callstack** is where *Execution Contexts* get *stacked* ontop of one each other so as to keep traack of where each *Execution Context* is at in the program's *execution*
// So the *Execution Context* that is **ON TOP OF THE STACK** is the one that is *currently running*, and when it is done, it will move to the *bottom of the stack* to make room for the next *Execution Context*

//========================================
// **Scope and the Scope Chain**
//========================================
// Now we know that each **Execution Context** will include its own **Variable Environment**, **Scope Chain**, and **this** keyword
// Scoping can be defined as how our program's variables are **organized** and **accessed**
// Javascript has something called **Lexical Scoping**
// **Lexical Scoping** means that the way variables are organized and accessed is *entirely controlled by the placement of functions and of blocks in the programs* code
// So, again, **variable scoping** is influenced by where exactly we write our *functions and code blocks*
// **SCOPE is the space or environment in which a certain variable is declared**
// There is a **Global** Scope, **Function** Scope, and **Block** Scope
// In the case of *functions*, that is essentially the **Variable Environment** *which is stored in the **function's Execution Context***
// The **Scope of a Variable** is the **region of our code where a certain variable can be accessed**

//========================================
// **The 3 Types of Scope**
//========================================
// There is a **Global** Scope, accessible **EVERYWHERE** as well as outside of **ANY** *function or block*.
// **Function** Scope, where variables are accessible **only inside the function, *NOT* outside**, also called the **Local Scope**
// **Block** Scope, which is everything within the curly *{ }* braces, such as an **if block**, **for loop block**, **etc.**
// **Variables are only accessible *inside the block* (block scoped), HOWEVER**, this *only* applies to **let** and **const** variables!
// *Functions* are **also blocked scoped** (*only in strict mode*)

//========================================
// **The Scope Chain**
//========================================
// The scope chain is the order in which functions are **written in the code**
// The Scope Chain has **nothing** to do with the *order in which the functions were called*!
// The **Callstack** is the order in which the functions were *called*

// myName variable is part of the global scope

const myName = 'Jonas';

// first() is the next function scope

function first() {
  const myAge = 30;

  if (myAge >= 30) {
    //true
    const decade = 3;
    var millenial = true;
  }

  // The nested second() function is my second scope

  function second() {
    const myJob = 'teacher';

    console.log(`${myName} is a ${myAge}-old ${myJob}`);
    // Jonas is a 30 year old teacher
  }
  // I can still access the first scope's variables as **Scope has access to variables from *all outer scopes***
  // This process is called **Variable Lookup**, and thid does **NOT* work the other way around
  // Scopes can only look **UP** to their parents, **never down** to their children
  // *AGAIN*, **let** and **const** are **block-scoped**, whereas **var is function-scoped**
  second();
}

first();

//========================================
// **Notes on Scoping**
//========================================

// Scoping asks the question, *Where do variables live?*, or, *Where can we access a certain variable, and where not?*
// There are **3 types** of scope in Javascript: **Global Scope**, **Scopes defined by functions**, and **Scopes defined by blocks**
// Only **let** and **const** variables are **block-scoped**, whereas Variables declared with **var** *end up in the closest function scope*
// In Javascript, we have **Lexical Scoping**, so the rules of where we can access variables are based on exactly where in the code our functions and blocks are written
// Every scope always has access to all the variables from all of its outer scopes - **THIS IS THE SCOPE CHAIN**
// When a variable is *not* in the *current scope*, the Javascript engine looks up in the scope chain until it finds the variable it's looking for - this is called **Variable Lookup**
// The Scope Chain is a one-way street, in that, a scope will **NEVER** have access to the variables of an inner scope
// The Scope Chain in a certain scope is equal to adding together all the variable environments of all the parent scopes
// The scope chain has nothing to do with the order in which functions are/were called, and it does **NOT** affect the scope chain whatsoever

//========================================
// **Scoping in Practice**
//========================================

function newCalcAge(birthyear) {
  const newAge = 2037 - birthyear;

  function printAge() {
    const output = `You are ${newAge} years old, born in ${birthyear}`;
    console.log(output);
  }
  printAge();

  return newAge;
}

const firstName = 'Patrick';
newCalcAge(1994);

//========================================
// **Variable Environments: Hoisting
//========================================

// **Hoisting** makes some types of variables accessible/usable in the code before they are actually declared
// **Before execution**, code is scanned for variablke declarations, and for each variable, a new property is created in the **variable environment object
// So:
// *Function declarations* are **Hoisted**, have an *initial value* of **Actual Function**, and are **block-scoped**
// *var variables* are **Hoisted**, have an *initial value* of **undefined** and are **function-scoped**
// *let* and *const* variables are **NOT HOISTED**, have an *initial value* of **UNINITIALIZED/TDZ (*Temporal Dead Zone*), and are **block-scoped**

test();

function test() {
  console.log('Hello');
}
// We can call the test() function before it was declared in code; that's the hoisting in practice.
// The JavaScript engine scans the code before executing it and creates a property for each variable or function in the code
// For normal variables, it assigns an undefined value, and for functions it assigns a reference to that function in memory
// That's why we can call a function, but if we try to access a variable, we will get undefined

// function scope() {
//   console.log(var1); // undefined
//   console.log(va1); // undefined

//   var var1 = 'Hello';
//   var var2 = 'Hi';
// }

//========================================
// **Variable Environments: Temporal Dead Zone (TDZ)**
//========================================

// The **Temporal Dead Zone**(*TDZ*) can be defined as a region of code where the variable is defined, but can't be used in any way
// TDZ **makes it easier to avoid and catch errors**, since accessing variables before their declaration is bad practice and should be avoided
// Utilising the TDZ to use functions before their actual declaration, for instance, is essential for some programming techniques such as *Mutual Recursion*

//========================================
// **Hoisting and TDZ in Practice**
//========================================

// Variables
//========================================
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Pat';
// let job = 'Plumber';
// const year = 1994;

// The *var* variable is hoisted as **undefined**
// But the *let* variable is uninitiliazed as it is still in the TDZ, as the TDZ for variables that start with *let/const* start from the **beginning of the current scope** (in this case the *Global Scope*), up until the point of the code were the variable is defined

// Functions
//========================================
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//========================================
// **The *this* Keyword**
//========================================
