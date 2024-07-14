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
// To simplify this, I can think of the addEventListener() method: I don't completely understand it, but because I don't have to worry about the low-level details, I can still utilise the method as a tool by abstracting away the things I don't need to know.
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
// So designing my classes to have ALL the same properties & methods becomes not only a huge ballache, but I'll run into some problems
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
// In Javascript, classes can be used to create actual objects (object generation, remember?) called INSTANCES
// This process, where Objects are created (generated) from a class, is called INSTANTIATION
// And, as I also know, all objects in Javascript are: PROTOTYPES.
// What's an Array (REALLY)? Well, it's technically speaking, an object that I am able to pass methods() to
// Remember, PASS the methods to, meaning it's the PROTOTYPE (Blueprint brooo) that ACTUALLY contains the methods, and the Objects themselves are BUILT FROM the site plans!!
// Technically speaking, this is called: PROTOTYPAL INHERITANCE

// PROTOTYPAL INHERITANCE:
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
// For example, again using ARRAYS because who doesn't love arrays:
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

// Classes are, in truth, just a special kind of function and they can be programmed one of two ways:
// As a Class Expression, or as a Class Declaration

// Class expression
// const PersonClExp = class {};

// Class declaration
// I need to use the constructor method!!!
// Then I need to declare what my PROPERTIES are
class PersonClDec {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Next I need to define my methods
  // I can confirm this by looking at the object and inspecting the prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  // No commas are needed to seperate my methods
  greet() {
    console.log(`Hey, ${this.firstName}!`);
  }
}

const jessica = new PersonClDec('Jessica', 1994);
console.log(jessica);
jessica.calcAge(); // 43

// And a final confirmation:
console.log(jessica.__proto__ === PersonClDec.prototype); // true

// I can also just add the below method into the constructor itself
// PersonClDec.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}!`);
// };
jessica.greet();

// So with this syntax, I don't have to manually muck around with the prototype property, only write my methods inside my class but OUTSIDE my constructor
// And then they (the methods) will automatically be added to the .prototype property

// Some important things to remember:
// 1. Classes are NOT hoisted, so it cannot be used before it is declared (unlike function declarations)
// 2. Classes are first-class citizens, which means I can both pass them INTO functions and return them FROM functions
// 3. Classes are always executed in strict mode!!
//
//
// 3. Object.create()
// ========================================
//
// There are NO prototype properties, no constructor functions, and no new operator available/involved when using Object.create()
// Instead I can use Object.create() to manually set the prototype of an object to any other object that I want
// This is the easiest and most straightforward way of linking an object to its prototype properties
// So here I'm going to set the prototype of ALL the person objects:
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // This LOOKS like a constructor, but it isn't, since I'm NOT using the new operator
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Now all I need to do is to create a new person object with the above object as its prototype:
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

// This is just to represent prototypes and their respective prototype chain(s), as ideally I would want to implement a programmatic way of creating objects and assigning their properties
// In the real world, though, this is the LEAST used way of implementing prototypal inehritance
// But it's STILL extremely important to know how it works, such as implementing inheritance between my classes, for instance

// I can double-check this by logging the first link in the inheritance chain to the console:
console.log(steven.__proto__); // THIS is PersonProto

const sarah = Object.create(PersonProto);
// So now I'm able to programmatically create a new person object, assign it's prototype, declare the inheritance chain, and I'm able to point the .this keyword to sarah by explicitly calling init() on sarah
// This is, ultimately, just a manual way of initializing my objects, and is essentially how Object.create() works:
// Object.create() creates a NEW object with the prototype of that object being the object that I pass in
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58
// ========================================
// Prototypes
// ========================================
//
console.log(Person.prototype);
// Each and every one of my functions in Javascript all automatically have a prototype, which is essentially like the site plans, and it's that prototype that contains all the methods - constructor functions work the same!
// So every object that is created by a certain constructor function, will get access to all of the methods and properties that we define on the constructor's prototype property:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

patrick.calcAge(); // 43
jack.calcAge(); // 57

Person.prototype.species = 'Homo Sapiens';
console.log(patrick.species, jack.species);

console.log(patrick.hasOwnProperty('firstName'));
console.log(patrick.hasOwnProperty('species'));

// ========================================
// Prototypal Inheritance / Delegation
// ========================================
//
//
// The new Operator
// ========================================
//
// First, an empty object is created
// Next, the .this keyword in the constructor function call is set to the new object
// Then, the new object is linked (__proto__property) to the constructor function's prototype property
// Finally, the new object is automatically returned from the constructor function call
// This is also how the process works with both function constructors AND ES6 classes, but NOT the Object.Create() method
// So instead of having a shitload of objects all carrying around different functions and bogging down overall application performance, they can ALL call their function(s) from the object's prototype
// The whole process of looking up methods and properties in a Prototype is called a PROTOTYPE CHAIN
//
//
// ========================================
// Prototypal Inheritance on Built-in Objects
// ========================================
//
// Object.prototype is (usually) the top of my scope-chain/prototype chain:

// First prototype-chain (the inner scope)
console.log(patrick.__proto__);
// Second prototype-chain (the inner scope's outer scope & also my constructor)
console.log(patrick.__proto__.__proto__);
// Final prototype-chain (the inner scope's outer scope's outer scope, which is NULL)
console.log(patrick.__proto__.__proto__.__proto__);

// Points back to person
console.dir(Person.prototype.constructor);

// This is actually SICK
// I can essentially look up all the prototypal methods available to arrays in javascript:
const arr = [3, 6, 6, 5, 9, 9, 8]; // new Array === []
// The above shorthand way is the same as using Javascript's in-built constructors to create an array
console.log(arr.__proto__);
console.log(arr.__proto__) === Array.prototype;
// And by going further UP the prototype chain, now I can see all the prototype methods of the array constructor:
// Important to remember that my methods live INSIDE of the prototypes (blueprints), and the prototypes DELEGATE those methods out to their respective linked objects
console.log(arr.__proto__.__proto__);

// So since, in Javascript, an Array is TECHNICALLY an object, then that means any array will inherit all of its methods from its respective prototype
// Therefore I can use that knoweldge to extend the functionality of my arrays
// In this case, I'll make a new method that returns all of the unique elements of an array to my prototype to be inherited by ALL arrays:
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [3, 6, 5, 9, 8]
// To reiterate: I've added a NEW mthod to the array prototype constructor, and now all arrays will inherit this method, and I can call this method on any array I want
// HOWEVER, first, this is generally NOT a good idea as the next version of Javascript may add a new method that is identical to my "new" method, and as a result, it will break my code(base)
// And secondly, if I'm working on a team of developers, this will be a shit idea as not only would my cohorts not know what my method does, but if we were to implement the SAME idea, then we end up with conflicting code and SO many bugs that it's really not worth doing - great in theory, shit in practice

// So, here I'm mainly interested in the prototype of my h1 element: HTMLHeadingElement(), which means the constructor prototype for h1 elements is HTMLHeadingElement
// And HTMLHeadingElement is a child of HTMLElement, and HTMLElement is a child of Element, and Element is a child of Node, so the prototype ultimately is Node
// So clearly the prototype chain here is very, very long
const h1 = document.querySelector('h1');
console.dir(h1);
// So my function is, again technically, an Object, which means it is linked to its own prototype, and thus the prototype then contains all the methods I've been using previously on my functions up until now: apply(), bind(), and call()
// This is, again, the reason why I can call methods on functtions: because they are OBJECTS, and OBJECTS HAVE PROTOTYPES, in this case, the function prototype
console.dir(x => x + 1);
//
//
// ========================================
// CHALLENGE #1
// ========================================
//
// DATA SETS:
// Car 1: 'BMW' going at 120km/h
// Car 2: 'Mercedces' going at 95km/h
// 1. Create a constructor function to implement a Car. The car has a make, as well as a speed, property. The speed property is the curent speed of the car in km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// I need to store my speed as a NUMBER, not a string
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

// Instead of using +, I need to use +=
// += means take the current value of this variable and add something to it, then store that result back in the same variable
Car.prototype.accelerate = function () {
  this.speed += 10;
  // Instead of RETURNING the value, or using a dodgy console.log, I should use a template literal to add the km/h string value to the end
  console.log(
    `The ${this.make} accelerates, and is now travelling at ${this.speed} km/h`
  );
};

car1.accelerate();
car2.accelerate();

// 3. Implement a 'brake' method that will decrease the car's speed by 5km/h, and log the new speed to the console

Car.prototype.brake = function () {
  this.speed -= 5;
  // And instead of RETURNING, or a shitty console.log, I should use a template literal to add the km/h string value to the end
  console.log(
    `The ${this.make} decelerates, and is now travelling at ${this.speed} km/h`
  );
};

car1.brake(); // 125 km/h
car2.brake(); // 100 km/h

// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

const car3 = new Car('Toyota', 80);
const car4 = new Car('Hyundai', 50);

car3.accelerate(); // 90 km/h
car4.brake(); // 45 km/h

// OOP really is like using objects as building blocks..
//
//
// ========================================
// Setters and Getters
// ========================================
//
const account = {
  owner: 'Patrick',
  transactions: [200, 530, 120, 300],

  // New method to get the latest transaction
  get latest() {
    return this.transactions.slice(-1).pop();
  },
  // It is NOT mandatory to use a setter if I use a getter
  set latest(transaction) {
    this.transactions.push(transaction);
  },
};
//
// Using the getter
// ========================================
//
// Now I can use the method as if it was just a property
// This is really useful if I just want to read a property, but only after doing some calculations beforehand
console.log(account.latest); // 300
//
// Using the setter
// ========================================
//
// Same as before, I'm still using latest as a property and not as a method
// And so my original transactions array is returned with '50' appended to it
account.latest = 50;
console.log(account.transactions);
//
// Using Getters and Setters with Classes
// ========================================
//
// MAXIMUM CALL STACK EXCEEDED - INFINITE RECURSION:
// I need to denote fullName with an underscore since both my constructor function AND my setter are trying to fight over who gets to set the fullName property
class Man {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods to be added to the .prototype property
  // These are also known as Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}!`);
  }
  // This returns the same as the calc age function: 1994
  get age() {
    return 2024 - this.birthYear;
  }

  // And some input validation that will check if the name has a space, to see if it's a full name
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }
  // Getter to return the computed full name stored in the new _fullName variable
  get fullName() {
    return this._fullName;
  }
  // Add a static method
  static hey() {
    console.log('Gday, mate💪');
    // Whatever object is calling the method, will be the .this keyword inside of that function
    // Therefore here the .this keyword points to the entire constructor
    console.log(this);
  }
}

const jake = new Man('Jake Smith', 1994);
console.log(jake);
jake.calcAge();
jake.greet();

// This triggers my alert
// const walter = new Man('Walter', 1965);
//
//
// ========================================
// Static Methods
// ========================================
//
// the from method is a static, built-in Javascript method that is attached to an array constructor
// THis means, I CAN'T use the from method on an array itself, since the from method is attached to the entire array constructor, and NOT the prototype property of that constructor
// This means, all the arrays do NOT inherit this method as from is not assigned to their prototype
console.log(Array.from(document.querySelectorAll('h1')));
// [1, 2, 3].from();

// The same applies to the parseFloat method for instance, as parseFloat is assigned to the Number constructor, and not the prototype property of numbers themselves
console.log(Number.parseFloat(12));

// I would typically use these static methods as "helpers" that should be related to a certain constructor
Man.hey();
//
//
// ========================================
// CHALLENGE #2
// ========================================
//
// 1. Re-create challenge #1 but this time using an ES6 class

class Truck {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // Getter for speed in mp/h
  get speedUS() {
    return this.speed / 1.6;
  }
  // Setter for speed in mp/h
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
  // Accelerate
  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} accelerates to ${this.speed} km/h.`);
  }

  // Brake
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} decelerates to ${this.speed} km/h.`);
  }
}

const truck1 = new Truck('Ford', 100);
const truck2 = new Truck('Holden', 80);

console.log(truck1, truck2);
truck1.accelerate(); // ..accelrates to 110 km/h
truck2.brake(); // ..decelerates to 75 km/h

// Use getter to convert the speed to freedoms per assault rifle
console.log(`The ${truck1.make} is travelling at ${truck1.speedUS} mp/h.`); // 68.75 mp/h
console.log(`The ${truck2.make} is travelling at ${truck2.speedUS} mp/h.`); // 46.87 mp/h

// Use the setter to set a new speed
truck1.speedUS = 120; // Converts from mp/h to km/h
truck2.speedUS = 100; // Converts from mp/h to km/h

// The truck objects still retain their original km/h speed properties, but now converted from mp/h
console.log(truck1, truck2); // 192km/h & 160km/h

// Display my new speed in mp/h
console.log('====NEW SPEEDS====');
console.log(`The ${truck1.make} is now travelling at ${truck1.speedUS} mp/h.`); // 120 mp/h
console.log(`The ${truck2.make} is now travelling at ${truck2.speedUS} mp/h.`); // 100 mp/h
//
//
// ========================================
// Inheritance Between "Classes":
//      Constructor Functions
// ========================================
//
const Student = function (firstName, birthYear, course) {
  // DRY RULE!!!
  // If the person changes, then that change will NOT be reflected in the student
  // So instead of having the duplicate code, I can pass in the Person constructor, but also provide the call() function to it in order to manually allocate the .this keyword TO THAT FUNCTION
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Using object.create() to link student to person
// IMPORTANT THAT THE CODE GOES EXACTLY HERE
// The reason Object.create() needs to go here is because if I had placed it after the introduce method I made, it would overwrite the method I added to the Prototype object

Student.prototype = Object.create(Person.prototype);
// Now the student object INHERITS FROM PERSON
// But I still need to link them together, because as it stands, Object.create() will create an empty object

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

// So far I've created the student constructor function and it's prototype property
// The mike object is LINKED to its prototype, and that prototype is the constructor function's prototype property
// I created this link between the instance and prototype automatically by creating the mike object with the new operator
// But the Student is also a Person, so I want my student & person to be CONNECTED, with the student becoming a/the child class, inheriting its properties from the person class, with the person class functioning as the parent class
// This way, the Student class gets access to to the person class' methods, like calcAge(), through the prototypal inheritance chain
// So ultimately I want to make Person.prototype the prototype of Student.prototype
// In other words, I want to set the .__proto__ property of Student.prototype to Person.prototype, and I'll need to link this connection manually
// Which is a great use-case for Object.create()!!
mike.calcAge(); //17
// So logging next prototype up the inheritance chain, which is the Person prototype
console.log(mike.__proto__);
// Next up in the chain is the calcAge() function
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
//
//
// ========================================
// CHALLENGE #3
// ========================================
//
// DATA SET
// 'Tesla' going at 120km/h, with a charge of 23%

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property)

const EV = function (make, speed, charge) {
  // Calls constructor and assigns .this keyword
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link EV prototype as child of Car just like before or I'll get errors...
EV.prototype = Object.create(Car.prototype);

// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1. Then, log a message like this: 'Tesla going at 140km/h, with a charge of 22%'

// OK so this overwrites my original accelerate method's template literal
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The ${this.make} is travelling at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// Point my EV object's constructor to EV (like we did with Student)
EV.prototype.constructor = EV;
// Check to see if my constructor reference points to the correct constructor..
console.dir(EV.prototype.constructor);
// EV(make, speed, charge) || yay..

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake', and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(`The ${tesla.make} has been charged to ${tesla.charge}% capacity`);
// Everytime I accelerate my charge goes down
tesla.accelerate(); // 155 km/h, 89%
tesla.accelerate(); // 175 km/h, 88%
tesla.brake(); // ..decelerates to 170 km/h
//
//
// ========================================
// Inheritance between "Classes": ES6 Classes
// ========================================
//
// Classes are, essentially, just a layer of abstraction over Constructor Functions since they hide a lot of what's going on behind the scenes
// Keep in mind that implementing inheritance like this is a reallyyyyy dodgy way of working with classes

class People {
  constructor(fullname, birthYear) {
    this.fullName = fullname;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey, ${this.fullName}!!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is NOT a full name, bro!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('hey there maaaan');
  }
}

// To implement inheritance between two ES6 classes I need two ingredients:
// The 'extend' keyword & the 'super' function
// So, to make the Plumber class inherit from my People class, and link the Prototypes all I need to do is:
class Tradie extends People {
  // I still need a constructor, though
  // I'll also have the same arguments as the parent class, plus some additional (extending)
  constructor(fullName, birthYear, start) {
    // Don't need to call my People function & assign the .this keyword
    // But I still need to pass in the same paramaters as the parent class
    // super ALWAYS HAPPENS FIRST!!!
    super(fullName, birthYear);
    this.start = start;
  }

  introduce() {
    console.log(
      `Gday, I'm ${this.fullName}, and in my trade we start ${this.start} in the morning. `
    );
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

const plumber = new Tradie('Pat Kelly', 1980, 'real fuckin early');
plumber.introduce();
plumber.calcAge(); // 44

//   Tradie.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// }; // 44, but can clean it up

plumber.calcAge(); // originally 57

//
//
// ========================================
// Inheritance between "Classes": Object.create()
// ========================================
//
// Finally, I'll use Object.create() to implement a complex prototypal chain

const PeopleProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Inner sanctum
const davo = Object.create(PeopleProto);

// Now I want to implement another prototype in my chain, between PeopleProto and my linked object
// So I'm making Tradie inherit from People
// Keeping in mind that Object.create() always creates empty objects
const TradieProto = Object.create(PeopleProto);

// And I'll add an init method to PeopleProto so it's tradie children can inherit it
TradieProto.init = function (firstName, birthYear, start) {
  // In Object.create() I need to remember to use the call() method on my dad object, assigning the .this keyword and passing the SAME arguments
  PeopleProto.init.call(this, firstName, birthYear);
  // And I need to assign the unique argument
  this.start = start;
};

// AND i'll add the introduce method
TradieProto.introduce = function () {
  console.log(
    `Gday, I'm ${this.firstName}, and in my trade we start ${this.start} in the morning. `
  );
};

// And now I'll use the TradieProto to create my tradies
// Fuck me that's an easy way to do it
const chippy = Object.create(TradieProto);
chippy.init('Jacko', 1972, 'whenever we fuckin want to');
chippy.introduce();
chippy.calcAge(); // 65

// Object.create() is rad because I'm not just faking classes, all I'm doing is linking my objects together where some of those objects serve as the prototype(s) of OTHER objects
// It's really important I get this shit right because in reality, and as much as I love doing it this way...
// ES6 classes and constructor functions are how it's done in the real world and especially modern javascript (FUCK)
// Nothing worth understanding would ever be easy
//
//
// ========================================
// More Class Examples
// ========================================
//
// WHYYYY have I been writing these FUCKING LOOOOONG OBJECTS
class Account {
  // 1. Adding public fields (instances)
  locale = navigator.language;
  // _transactions = [];

  // 2. Adding private fields (instances)
  #transactions = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    // I could pass the empty array but that's shit since EVERY account would have that empty array
    // But I can set this TO the empty array!
    // this._transactions = [];
    // And getting the locale from the navigator?
    // this.locale = navigator.language;
    // And a non-policy violating greeting whenever a user makes a new account (lol)
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. Public Methods

  // Public Interface
  // These methods are basically the INTERFACE to my objects, AKA: API's

  getTransactions() {
    return this.#transactions;
  }

  deposit(val) {
    this.#transactions.push(val);
    return this;
  }
  // I can also call other methods from within another method, but I stil need to specify the .this keyword
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  // And to get the balance
  // I can use an arrow function here because of the lexical scoping of the .this keyword (I don't need it)
  // 0 is my initial accumulator starting value
  getBalance() {
    return this.#transactions.reduce(
      (accumulator, element) => accumulator + element,
      0
    );
  }
  // Protect this for internal use (da b4nk)

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  // 4. Private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Patrick', 'AUD', 111);

// To add to my transactions I can just (almighty)push
// acc1._transactions.push(250);
// To sub from my transactions I can just push a neggy value
// acc1._transactions.push(-250);

// But this is a BAD IDEA and BAD PRACTICE
// It's MUCH better to create METHODS that interact with the properties themselves
// ESPECIALLY for important properties
// ESPECIALLY to avoid lots of bugs whens scaling
acc1.deposit(250);
acc1.withdraw(100);
console.log(acc1);
// Get total balance
console.log(
  `Hello, ${acc1.owner}, your current balance is: ${acc1.getBalance()} ${
    acc1.currency
  }`
);
// console.log(acc1.#pin);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
// This is why DATA ENCAPSULATION is so important!!!
//
//
// ========================================
// Encapsulation: Protected Properties & Methods
// ========================================
//
// Sadly, modern javascript doesn't really have any built-in data encapsulation shit for us to work with...
// And so, there are two big reasons why I need both data encapsulation and data privacy:

// 1.
// It is to prevent code from outside of a class from (accidentally) manipulating my data
// This is why I implement technologies like a public interface with methods to interact with my data's properties

// 2.
// When I expose only a small interface (a small public API consisting of only a few methods), then I can change all the other INTERRNAL methods with more confidence
// In that, I mean external code does not reply on my built-in private methods, so (ideally) my code won't shit the bed when I make internal changes

// I can denote my propeties with underscores to (kind of) make it private
// But TRUE privacy means I can assign the protected property, similar to how CSS has !important

//
//
// ========================================
// Encapsulation: Private Class Fields & Methods
// ========================================
//
// Now I'll implement TRULY private class fields and methods, keeping in mind these are for a future(?) proposal for the language, known as Class Fields
// They're known as "Class Fields" as in traditional OOP languages, class properties are known as "fields"
// I can think of a "field" as a property that is on all instances
// In this proposal there are (technically 8) FOUR of the follwing methods:

// 1. Public Fields
// ========================================
// I can, again, think of a field as a property taht will be  on all instances, hence the name Public Instance Field
// In my Account constructor, my two Public Instance Fields would be both the transactions and locale, as they will be on ALL the account objects I create with this class
// And that's because I DON'T pass any of the values into the constructor, so the array and navigator will always be set for all the instances
// So by essentially defining them, I'm ensuring that they will be present on the CLASS, but NOT the PROTOTYPE, unlike my METHODS
// Another key feature of public instances is that they are referencable by the .this keyword

// 2. Private Fields
// ========================================
// Using Private Fields, I can ensure that my object properties are truly NOT accessible from the outside
// I accomplish this by, literally, removing the underscore and replacing it with a hash
// console.log(acc1.#transactions); // BIG ERROR
// Of course, I can still access my transactions via the public API, getTransactions()
console.log(acc1.getTransactions());
// These are also only available on the instances themselves, and NOT on the prototype(s)

// 3. Public Methods
// ========================================
// All the methods I've been using so far have been public methods
// Which means public methods are essentially the public interactable interface of my class(es)

// 4. Private Methods
// ========================================
// Private methods are extremely useful to hide my implementation details of my web app(s) from external code
// I already made my approve loan method protected by prepending it with an underscore
// The synatx for private methods is exactly the same as with prviate fields, so with a hash
// The biggest issue with private methods however is...no browser supports it lol. Lmao, even.

// Besides the aforementioned four, there are an additional four methods as well (so 8 total)
// And these other 4 are basically exactly the same, but denoted with the static keyword
// Usually, I'd use these for my helper functions, as by defining a static method I am ripping the method from it's prototype and reassigning it to the class instance
//
//
//
// ========================================
// Chaining Methods
// ========================================
//
// Remember using filter, map, and reduce and manipulating an array with one entire line of code?
// I can do the same thing with chaining methods in the methods of my class(es)
// To accomplish this all I need to do is return the object itself at the END of the method I want to chainable
// The code below returns undefined because I'm not explicitly returning anything in ym deposit method
// And then I immediately try to call deposit on undefined right after
// So literally all I need to is add the return keyword to my methods!!!

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getBalance()); // 22915
//
//
// ========================================
// ES6 Classes Summary
// ========================================
//
// When making child classes, the extends keyword automatically sets inheritance between its classes (parent>child), but also automatically sets the prototype

// When making a regular class, I MUST use a constructor method to be called by my new operator when using extend, but I can (possibly) ommit this in a child class

// The super keyword ALWAYS COMES AFTER THE CONSTRUCTOR, and takes the parent prototype's arguments followed by defining the .this keyword for the new arguments

// Private methods can be denoted by prepending the property with a hash, but "since this kind of encapsulation isn't available on (most) browsers, I can "fake" it with an underscore

// A getter method is basically a tool I can use to extract an object's value by simply providing a property instead of writing a method

// A setter method is basically a tool I can use to simply define a value by setting it to whatever value I desire instead of calling a method
// I need to keep in mind that if I have a setter for a property that is ALREADY defined in my constructor, then I need to create, essentially, a new property prepended with an underscore, as per modern convention
// Then in the getter with the same name, I also need to RETURN that new property!!

// Static methods are methods that are only available on the CLASS, and not the prototype, which means the static method CAN NOT access instance properties or methods, only static ones

// ES6 Classes are, really just syntatic sugar over constructor functions (they make them look nicer)
// ES6 Classes are also NOT hoisted, since they are first-class citizens, and the class body is ALWAYS executed in strict mode.

class Corpo extends People {
  // Public Field
  company = 'Globohomo';
  // Private fields
  #branch;
  #hoursWorked = 0;
  static numColleagues = 10;

  // Mandatory constructor
  constructor(fullName, birthYear, startYear, branch) {
    // Super always comes first
    // Add parent args, assign this for new
    super(fullName, birthYear);
    // Instance properties on OBJECT
    this.startYear = startYear;
    this.#branch = branch;
  }

  // Public Method
  introduce() {
    console.log(`Hello, I am ${this.fullName}, and I work at ${this.company}.`);
  }

  // References to private field(s)
  work(h) {
    this.#bludge();
    this.#hoursWorked += h;
  }

  // Private method
  #bludge() {
    return 'Yeah I could not be fucked, honestly, mate.';
  }

  // Getter method
  get randomTestResult() {
    // Return the new property per name valid.
    return this._randomTestResult;
  }

  // Setter Method

  set randomTestResult(outcome) {
    // Using _ to set property with same name as the method, and also add getter
    this._randomTestResult = outcome >= 50 ? outcome : 'YOU ARE FIRED';
  }

  static printOHSBooklet() {
    console.log(
      `Please ensure full compliance and obedience whilst internned at Globohomo. Please assume the position.`
    );
  }
}

const terry = new Corpo('Terrence Jones', 1989, 2037, 'Globohomo Pty Ltd.');
terry.introduce();
terry.work(8);
terry.spreadsheetResult = 45;
console.log(terry.randomTestResult); // YOU ARE FIRED
Corpo.printOHSBooklet();
