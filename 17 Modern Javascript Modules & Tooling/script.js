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
// I DON'T do this process myself, and should instead be using a modern javascriptk bundler, such as "webpack" or "parcel"
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
// 4,5. In regular Scripts, exporting/importing values is nooooo bueno, but, regarding imports/exports, it's important for me to remember that they can only happen at the top level, so outsie of any function or if block, and ALL my imports are hoisted to the top of the file since importing always occurs first in modules
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
// Importing module
import './shoppingCart';
console.log('Importing Module');
