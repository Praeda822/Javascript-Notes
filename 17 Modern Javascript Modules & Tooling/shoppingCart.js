// No need to declare strict as it's default

// Exporting Module
console.log('Exporting Module');

// Remember variables declared inside a module are scoped TO that module, so the module ist he top level scope
// By default, this means all top-level variables are PRIVATE inside of these variables
const shippingCost = 10;

// In order to use the variables scoped within shoppingCart here I would need to export them, and in ES Modules there are TWO types of exports:
// Named Exports and Default Exports
// Named Imports is the simplest way of exporting from a module since all I have to do is put the export keywrod infront of anything that I might want to export

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
};
const cart = [];

// The main use case of Named Exports is exporting multiple things from a module, inclusive of exporting those things at the same time

const totalPrice = 237;
const totalQuantity = 23;

// and I can export those same variables by wrapping them in curly brackets
export { totalPrice, totalQuantity as qt };
