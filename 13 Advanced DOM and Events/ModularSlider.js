// ========================================
// Building a Slider Component
// ========================================
//
// Important to note I can probably re-use this component for sliders in the future!!!

class Slider {
  // The constructor initializes the slider
  constructor({ container, slideClass, btnLeft, btnRight, dotContainer }) {
    // Selecting my elements
    this.container = document.querySelector(container); // Main container
    this.slides = this.container.querySelectorAll(slideClass); // All slides
    this.btnLeft = this.container.querySelector(btnLeft); // Left button
    this.btnRight = this.container.querySelector(btnRight); // Right button
    this.dotContainer = this.container.querySelector(dotContainer); // Holds dots

    // Initial state
    this.curSlide = 0; // Current slide index value
    this.maxSlide = this.slides.length; // Total number of slides

    // Initialize the slider
    this.init(); // Call init method to set up the slider
  }

  // Function to create my navigation dots
  createDots() {
    this.slides.forEach((_, index) => {
      this.dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  }

  // Function to activate current dot
  activateDot(slide) {
    this.dotContainer
      .querySelectorAll('.dots__dot')
      .forEach(element => element.classList.remove('dots__dot--active')); // Removes active from ALL dots

    this.dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active'); // +active to current dot
  }

  // Function to move to a specific slide
  goToSlide(curSlide) {
    this.slides.forEach(
      (element, index) =>
        (element.style.transform = `translateX(${100 * (index - curSlide)}%)`) // Moves each slide
    );
    this.activateDot(curSlide); // Activates corresponding dot
  }

  // Function to move to next slide
  nextSlide() {
    // -1 to make it ZERO based, so it doesn't go one extra slide along
    if (this.curSlide === this.maxSlide - 1) {
      this.curSlide = 0; // Go BACK to first slide if at last slide
    } else {
      this.curSlide++; // Otherwise crack on
    }
    this.goToSlide(this.curSlide); // Updates slider position
  }

  // Function to move to previous slide
  prevSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide - 1; // Go to last slide if at first slide
    } else {
      this.curSlide--; // Otherwise, go to previous slide
    }
    this.goToSlide(this.curSlide); // Updates slider position
  }

  // Method to add all event listeners
  addEventListeners() {
    // Event handlers for my nav buttons
    this.btnRight.addEventListener('click', () => this.nextSlide());
    this.btnLeft.addEventListener('click', () => this.prevSlide());

    // Keybaord arrow key navigation functionality
    document.addEventListener('keydown', e => {
      console.log(e);
      // If/Else block is...ugly (but it works, lol)
      // if (e.key === 'ArrowLeft') prevSlide();
      // if (e.key === 'ArrowRight') nextSlide();
      // Short-circuiting the logic is much more efficient and cleaner
      e.key === 'ArrowRight' && this.nextSlide();
      e.key === 'ArrowLeft' && this.prevSlide();
    });

    // Dot navigation
    this.dotContainer.addEventListener('click', e => {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset; // Destructure to get slide number
        // Log the slide value for debugging purposes
        // Now that I've logged which slide is which I get it...
        console.log(`Clicked dot corresponds to slide ${slide}`);
        this.goToSlide(slide); // Go to clicked dot's respective slide
      }
    });
  }

  // Initialize the slider
  init() {
    // DOTS. MUST. BE. CREATED. FIRST. DICKHEAD.
    this.createDots(); // Calls function to create the dots
    this.goToSlide(0); // Initialize the slider position
    this.activateDot(0); // Activate the first dot
    this.addEventListeners(); // Add all event listeners
  }
}

// Usage example
const slider1 = new Slider({
  container: '.slider', // Main container selector
  slideClass: '.slide', // Slide selector
  btnLeft: '.slider__btn--left', // Left button selector
  btnRight: '.slider__btn--right', // Right button selector
  dotContainer: '.dots', // Dot container selector
});

// ========================================
// Creating an Instance
// ========================================

// const slider1 = new Slider({ ... }) creates a new instance of the Slider class
// My object passed to the constructor contains selectors for the different parts of the slider

// ========================================
// Parameters
// ========================================

// container: Selector for the main container of the slider.
// slideClass: Selector for the individual slides.
// btnLeft: Selector for the left navigation button.
// btnRight: Selector for the right navigation button.
// dotContainer: Selector for the container holding the dots.

// The Constructor Method
// ========================================

// The constructor is a special method for initializing newly created objects
// It's called automatically when an instance of the class is created
// The arguments passed to the constructor are typically used to initialize the object's properties

// Initialization
// ========================================

// When new Slider({...}) is called, the constructor initializes the properties of the slider using the provided selectors
// this.init() is called to set up the slider

// ========================================
// Use Cases
// ========================================

// I can create multiple sliders on one page by creating multiple instances of the Slider class with different container selectors to manage different sliders on the same page
// I can use the Slider class in different projects by simply changing my configuration options to match the HTML structure of each of my projects
// Since my sliders are customizable, I can pass additional configuration options, such as transition speed & autoplay settings, to further customize the behavior of my slider
