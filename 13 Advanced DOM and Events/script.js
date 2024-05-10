'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
//========================================
// Implementing Smooth Scrolling
//========================================
//
// I can use getBoundingClientRect() to calculate the exact position (x, y | height, width) of my Learn More button from button itself to the top of the viewport
// It's important to note, however, that if I scroll my x & y values change
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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
//
//
//========================================
// Types of Events and Event Handlers
//========================================
//
