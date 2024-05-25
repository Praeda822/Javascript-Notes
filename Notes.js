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
// JavaScript also uses the event loop to handle **asynchronous operations**, allowing **non-blocking I/O operations**
// Keep in mind this *is* a **HUGE** over-simplification

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
