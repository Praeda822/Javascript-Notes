'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//========================================
//========================================
// Implementing Smooth Scrolling
//========================================
//

// Button Scrolling
//========================================
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.scrollX, scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //
  // (old-school) Scrolling Implementation
  //========================================
  //
  // Now I can use the coordinates I've got to tell javascript exactly where to scroll to
  // I accomplish this by defining my s1coords variable to be equal to the rectangle size of the client's viewport by using the button click event as the center of it all
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  //
  // (old-school) Smooth-Scrolling Implementation
  //========================================
  //
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   // American spelling.....
  //   behavior: 'smooth',
  // });

  // But there's an even BETTER, more MODERN way of accomplishing all of the aforementioned:
  // (I still need to pass in the object, however)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
//========================================

// document.querySelectorAll('.nav__link').forEach(function (element, index) {
//   element.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add the event listener to the common parent element
// 2. Determine the element that originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//
//
//========================================
// Selecting Elements
//========================================

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));
//
//
//========================================
// Creating and inserting elements
//========================================
//
// A quick and easy way to add elements to the DOM:
// .insertAdjacentHTML

const msg = document.createElement('div');
msg.classList.add('cookie-msg');
// msg.textContent = 'We use cookies for improved functionality and analytics';
msg.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// The msg in my header is a live element in the DOM, so it can only appear once
// But I can still use prepend/append to move the element around the DOM
// header.prepend(msg);
header.append(msg);
// If I want to add multiple elements to the DOM:
// header.append(msg.cloneNode(true));
// Here it's BEFORE my header, right at the top:
header.before(msg);
// And here it's right at the END of the header:
// header.after(msg);
//
//========================================
// Deleting elements
//========================================
//
// Here I can use basic DOM manipulation to delete elements:
// By clicking the button, with my event listener attached, the entire element is dynamically removed
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    msg.remove();
  });
//
//
//========================================
// Styles, Attributes, and Classes
//========================================
//
//
// Styles
//========================================
//
// Styles that are set directly in the DOM are INLINE
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
// Using inline styles and DOM manipulation I can rip the colors from a website using the console
// This doesn't work for colors nested within CSS classes, only the inline styles I define
console.log(msg.style.backgroundColor);
// I can still however get the style definitions using getComputedStyle and defining what style I want to
console.log(getComputedStyle(msg).color);
// I need to convert the string back into a number using Number.parseFloat()
msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';
// I can easily change the stytle of my page by setting a property: the name, and the value
document.documentElement.style.setProperty('--color-primary', 'orangered');
//
//
// Attributes
//========================================
//
// Standard:
// I can also use DOM manipulation to extract the values of element attributes:

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist Logo

console.log(logo.className); // nav__logo
//
// Non-Standard:

// Just like how I can READ attributes
// I can also set them:
logo.alt = 'beautiful minimalist logo';
logo.setAttribute('company', 'bankist');

console.log(logo.src); // localhost/img/logo.png
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
//
//
// Data Attributes
//========================================
//
// I'm going to tend to use data ttributes a lot when working with UI/UX design, especially when I need to STORE DATA in the user interface
// I can also get the special attribute of dataSet:
console.log(logo.dataset.versionNumber);
//
//
// Classes
//========================================
//
// I really only need to know the following four methods for mucking around with my classes:
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // NOT INCLUDES

// I SHOULD NOT use this one as it will override any classes I have on the element and override them with whatever I've specified
// That's why the bankist logo looks like hot garbage now
// logo.className = 'Patrick';
//
//
//
//
//========================================
// Types of Events and Event Handlers
//========================================
//
// I can do more than just listen for clicks with my event handlers
// In this case, I'm listening for mouseenter, which works just like CSS :hover
// So whenever the mouse cursor enters a certain area, in this case when my mouse hovers over the h1, I'll fire an alert off automatically
//
// const h1 = document.querySelector('h1');

//
// THIS is the old-school way of doing it:
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Brilliant, mate, you are reading the heading!');
// };
// .addEventListener is much better to use as it allows me to add MULTIPLE event listeners to my object
// But the biggest reason why .addEventListener is more useful is because I can actually REMOVE an event handler if I don't need it
// To do that, first I need to export the event handler function to a named function:
//
// const alertH1 = function (e) {
//   alert('addEventListener: Brilliant, mate, you are reading the heading!');
//   // Then right after it's fired ONCE, I can remove it:
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// // But I can remove the event listener outside of the function if I want:
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// //
// //
// //========================================
// // Event Propagation: Bubbling & Capturing
// //========================================
// //
// // Event propagation is the concept used to describe how events spread through the Document Object Model (DOM) after they are triggered by an interaction, like a mouse click
// // I can think of it like dropping a stone in a pond: the stone hits the water (the event happens), and ripples spread outwards (the event travels through the DOM)

// // Event bubbling is a specific type of event propagation
// // Event bubbling (basically) means that when an event is fired off, the event is essentially also fired off on the PARENT ELEMENT(s) as well
// // Imagining for a second, that I've stacked several transparent bowls of differing sizes one inside the other:
// // If I were to drop a small ball (the EVENT) into the smallest bowl (an ELEMENT on a webpage), it will not only hit the smallest bowl (ELEMENT) but also fall into and hit each of the larger bowls beneath it as it goes
// // SO, bubbling means that when an event happens, it starts at the most specific target and flows upwards to the least specific target, eventually reaching the document object itself, unless stopped
// // This is useful because it allows you to set up a single event listener on a parent element to catch events from its children, rather than having to set up listeners on each child individually!!

// // So here I want to generate a random colour using the clever random number generator I coded out in the last section:
// // rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// // here I'm going to use event bubbling to assign event handlers to all of my navigation links:
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // In an event handler, the .this keyword ALWAYS points to the element in which the event handler is attached
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // I can use the stopPropagation() function to essentially "break" the bubbling chain for when I want to be extremely specific about controlling what event fires and where and on what

//   e.stopPropagation();
//   // As a result, now when I click on the features button, only the button itself changes, leaving its parent(s) untouched
//   // In practice, this really isn't the best idea...but it's still good to know
// });

// // Since this is the parent element, ONLY the background colour of the links container changes, since bubbling only goes UP
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// // Same again with bubbling: it only applies to the parent(s)
// // So even though the event, e, is literally the same event across all 3 elements, bubbling allows me to make changes without affecting the children
// // Important to note that the .this keyword applied to currentTarget is also the same
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });
//
// ========================================
// DOM Traversing
// ========================================

const h1 = document.querySelector('h1');

// Going donwards: child
// ========================================
//
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// Now only the first child has its colour set to white
h1.firstElementChild.style.color = 'white';
// Same goes for the last child:
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// ========================================
//
console.log(h1.parentNode);
console.log(h1.parentElement);
// This one is REALLY useful
// Like, REALLY useful
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';
//
// Going sideways: siblings
// ========================================
//
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);
// So I can create an array out of the node list of siblings, then iterate over each item inside it using a forEach loop
[...h1.parentElement.children].forEach(function (element, index) {
  if (element !== h1) element.style.transform = 'scale(0.5)';
});
//
// ========================================
// Tabbed components
// ========================================
//

tabsContainer.addEventListener('click', function (e) {
  // No more SPAN element, since I'm only searching for the operations tab parent
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  // The return statement breaks out of the loop if there is no 'clicked', and also ensures that my event handler's logic doesn't get assigned to my content box, so no more error, but I still get null
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(element => element.classList.remove('operations__tab--active'));
  tabsContent.forEach(element =>
    element.classList.remove('operations__content--active')
  );

  // Activate Tab
  clicked.classList.add('operations__tab--active');

  // Active content area
  // I can define tab selection using dataset, since i've assigned it as a property on the element
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ========================================
// Passing Arguments to Event Handlers
// ========================================
//
// Menu fade animation
// ========================================
//
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) element.style.opacity = opacity;
    });
    logo.style.oapcity = opacity;
  }
};

// 'mouseenter' doesn't bubble up, so I'm using mouseover instead
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
