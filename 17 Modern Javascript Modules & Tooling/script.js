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
