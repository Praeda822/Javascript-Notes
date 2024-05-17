'use strict';
// ========================================
// Object-oriented Programming
// ========================================

// Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.
// We use Objects to model (describe) real-world and/or abstract features of it
// Objects may contain data (properties) and code methods
// By using objects, we pack data and that data's corresponding behaviour into one block, which makes it easy to interact with the data
// And "blocks" is exactly what objects are supposed to be: self-contained pieces, or blocks, of code, that can be used, literally, as building blocks of a software application: by making these objects (of information) interact with one another (just like the digital form of lego)
// These interactions happen through a Public Interface, or API: these are methods that the code OUTSDIE of the object can access and use to communicate with the object

// Up until now I haven't really used my objects for anything...specific (other than the remake of the slider function), and I haven't made any of my objects talk to one another - i've simply just been reorganising and manipulating existing datasets
// Well, in OOP, objects are typically programmatically generated, and this is done using "Classes", and classes as basically like the site plans for code: a blueprint

// ========================================
// The 4 Fundamental Principles of OOP
// ========================================
//
// Abstraction
// ========================================
//
// Abstraction means to ignore, or hide, the details that don't matter
// To simplify this, I can think of the addEventListener() method: I don't completely understand it, but because I don't have to worry about the low-level details, I can still utilise the method as a tool by abstarcting away the things I don't need to know.
//
// Encapsulation
// ========================================
//
// Encapsulation is the process in which properpties and methods within a class are kept PRIVATE, meaning not accessible from outside the class, from exterior/outside blocks of code.
// AKA, preventing external code from "accidentally" manipulating the internal properties and/or state of code (IMPORTANT IN BIG TEAMS OF DEVS!!!)
// This is important, security wise, as some methods can be exposed as a public interface (API), which means they can/could be interacted with

//
// Inheritance
// ========================================
//
// In OOP, when I have two classes that are closely related, I can have one class inherit it's properties from another - so a parent, and a child class, with that respective child class being an extension of its parent (thinking back to BEM...)
// For example, let's say I have three classes: User, Admin, and Author, and all three of these classes have their own respective method for logging in, login(password){}
// But both the Admin & Author classes have another property, named "permissions", as well as their own identical method for logging in
// So designing my classes to have ALL the same properties & methods becomes not only a huge ballache, but I'll run into BIIIIG problems
// Well I can structure my code in a way where the both the Admin & Author classes become child classes of User, respectively, so Admin/Author are both technically users, but extended users
//

// Polymorphism
// ========================================
//
// Polymorphism's etymology is Greek, and it means "(to come in) many shapes"
// In OOP, Polymorphism however is the process in which a child class can overwrite a method it has inherited from its respective parent class
// Going back to the three aforementioned classes, what if the Admin and Author users have their own special way of logging in?
// Well, by utilising/understanding Polymorphism, I can enforce the rule that these respective classes will have their own working logins, despite them having the same logic, as the child classes login overwrites its parents
//
//
// ========================================
// OOP in Javascript
// ========================================
//
// As I know, a "class" is basically like site plans but for code
// In Javascript, classes can be used to create actual objects (object generation, remember?)called INSTANCES
// This process, where Objects are created (generated) from a class, is called INSTANTIATION
// And, as I also know, all objects in Javascript are: PROTOTYPES.
// Remember the Data Science bullshit bonanza from Section 9 that you wanted to headbutt a wall doing after 3 rounds of it?
// What's an Array (REALLY)? Well, it's technically speaking, an object that I am amble to pass methods() to
// Remember, PASS the methods to, meaning it's the PROTOTYPE (Blueprint brooo) that ACTUALLY contains the methods, and the Objects themselves are BUILT FROM the site plans!! (what a fuck around trifecta)
// Technically speaking, this is called

// PROTYPAL INHERITANCE:
// ========================================
//
// The prototype contains the methods (behaviours) that are ACCESSIBLE to all objects linked to that prototype
// Remember though, man, this is the INVERSE version of how it's all MEANT to work with classes in Javascript: where classes instantiate (generate) the instances, and the parent>child classes being a CLASS->CLASS inheritance, respectively
// Prototypal Inheritance is where an instance inherits from the class, which is again, inverse
// The process of the behaviour of the methods linked to a prototype object is known as DELEGATION
//
// In classic OOP, the behaviour are actually copied from the classes to the objects themselves respectively
//
// If I look up arrays on the mdn, it's always formatted as Array.prototype.method()
// For example, again using ARRAYS because who doesnt love arrays:
const myNum = [1, 2, 3];
myNum.map(v => v * 2);
console.log(myNum);
// So since Array.prototype is the original site plans (PROTOTYPE) of ALL array objects I create in Javascript, ALL arrays have access to the map method, where they are originally defined
// So now myNum is linked to the prototype, and it inherits, or iS DELEGATED, all of the array methods
// Finally, reiterating the importance that the map method is NOT defined on the numArray itself, but built from its prototype
//
//
// ========================================
// Implementing OOP in Javascript
// ========================================
//
// So with that headache behind us, how can I actually create prototypes then?
// How do I even link my objects TO my prototypes in the first place?
// How can I even create new objects without having any classes to define them, or instantiate them, in the first place???? WTF
// That's easy, my man, we can do it using:
//
// 1. Constructor functions
// ========================================
//
// This is a programming tecnique where I can create objects from a function!
// This is also how built-in objects like Arrays, Maps, and/or Sets are actually implemented in Javascript
// In JS, my constructor functions ALWAYS start with a capital, and I can only use function declarations and function expressions for my constructors as well
// I need to remember that an arrow function here will NOT WORK as it doesn't have it's own .this keyword and I'd need that for my arrow functions to wrok

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  //   this.CalcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// and I can create as many objects as I want, with as many different names as I want, so long as they abide by my defined parameters:
const jack = new Person('Jack', 1980);
const jess = new Person('Jess', 1945);

const patrick = new Person('Patrick', 1994);
console.log(patrick, jack, jess);
// What's the "new" operator, you ask?
// Well, that's how I call my constructor functions:
// So, first an empty object is created
// Next, the function is called, the .this keyword now points to my new empty object
// Third, this new object is now linked to a prototype
// Finally, this object is now automatically returned from my constructor function
// With all that considered, now I can define the .this keyword in my constructor function
// So I can ultimately create a variable with my name, that will automatically assign other values alongside of it, like hypothetical birthyear, hair colour, eye colour, etc.
// I'm only limited by how many parameters or properties I want and/or need
//
//
// 2. ES6 Classes
// ========================================
//
// These are the modern alternative to using the constructor function syntax
// It's, in all truth, really "Syntactic Sugar"
// Aka, it works, but it's unnecessarily showy
// yes, good for you, your dick is huge,and then everybody clapped, etc.
// In reality, though, we all know that ES6 classes don't behave like classes in traditional OOP: they're subject to the prototypal inheritance system
// Where it's a prototype that contains all the methods, and that then delegates those methods out to the LINKED objects
//
//
// 3. Object.create()
// ========================================
//
// This is the easiest and most straightforward way of linking an object to a prototype object
//
//
