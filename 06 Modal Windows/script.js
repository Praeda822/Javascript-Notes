'use strict';

//=========================================
//Working with Modals & Selecting groups
//=========================================

//Selecting the modal, overlay, and close modal classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Since I have 3 .show-modal classes respectively, I can use querySelectorAll to select all of them
const btnsOpenModal = document.querySelectorAll('.show-modal');

//=========================================
// Working with Classes
//=========================================

// Follow the DRY principle
// I've turned the closeModal & openModal query selector into tidier functions, respectively

const openModal = function () {
  console.log('Opening Modal');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Closing Modal');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// For loop through the btnsOpenModal node list (which works like an array)
for (let i = 0; i < btnsOpenModal.length; i++)
  // I select btnsOpenModal starting from the first index value
  // I assign an event handler to listen for a click
  // ONLY when the click is registered call openModal
  btnsOpenModal[i].addEventListener('click', openModal);

// I'm NOT calling the function
// I want the closeModal function to call ONLY when the click event happens for the modal and overlay, respectively
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//=========================================
// Handling keypress events
//=========================================

// Listening for events EVERYWHERE on the page
// calls function to log specific key to console
// I define explicitly for key type
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // If pressed key is Escape
  // And if the modal does NOT contain the hidden class, close the modal by calling closeModal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
