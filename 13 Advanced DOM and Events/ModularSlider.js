'use strict';

class Slider {
  constructor({ container, slideClass, btnLeft, btnRight, dotContainer }) {
    this.container = document.querySelector(container);
    this.slides = this.container.querySelectorAll(slideClass);
    this.btnLeft = this.container.querySelector(btnLeft);
    this.btnRight = this.container.querySelector(btnRight);
    this.dotContainer = this.container.querySelector(dotContainer);

    this.curSlide = 0;
    this.maxSlide = this.slides.length;

    this.init();
  }

  createDots() {
    this.slides.forEach((_, index) => {
      this.dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  }

  activateDot(slide) {
    this.dotContainer
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    this.dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  goToSlide(slide) {
    this.slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    this.activateDot(slide);
  }

  nextSlide() {
    if (this.curSlide === this.maxSlide - 1) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this.goToSlide(this.curSlide);
  }

  prevSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide - 1;
    } else {
      this.curSlide--;
    }
    this.goToSlide(this.curSlide);
  }

  addEventListeners() {
    this.btnRight.addEventListener('click', () => this.nextSlide());
    this.btnLeft.addEventListener('click', () => this.prevSlide());

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') this.nextSlide();
      if (e.key === 'ArrowLeft') this.prevSlide();
    });

    this.dotContainer.addEventListener('click', e => {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        this.goToSlide(slide);
      }
    });
  }

  init() {
    this.createDots();
    this.goToSlide(0);
    this.addEventListeners();
  }
}

// Usage example
const slider1 = new Slider({
  container: '.slider',
  slideClass: '.slide',
  btnLeft: '.slider__btn--left',
  btnRight: '.slider__btn--right',
  dotContainer: '.dots',
});
