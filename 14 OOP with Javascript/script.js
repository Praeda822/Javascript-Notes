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
