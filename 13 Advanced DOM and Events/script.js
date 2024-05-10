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
