'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ========================================
// Using the Geo-location API
// ========================================
//
// This takes two callback functions as an argument:
// 1. To be called on success, so whenever the browser is able to successfully get the coordinates of the current position of the user
// I'll call this function with one argument: the position parameter
// 2. Error callback function, so the one that I'll define when an error occurs

// ALL OBJECTS SHOULD HAVE SOME KIND OF UNIQUE IDENTIFIER (for referencing purposes..)
// Irl, I'll typically be using some kind of library/framework/system to create unique ID's and I most certainly shouldn't be doing it myself

// The Workout Class is assigned the current date and time, and I convert it to a string by concatenating with an empty string (+ '')
// Then I call the slice method on the resulting string, slice(-10)m which extracts only the last 10 characters of that string
// This is a surprisingly simple way to generate a unique identifier for each of my Workout objects

class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // mins/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / this.duration;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // Private Instance Properties
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your current location, bruv');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com.au/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    if (!this.#map) {
      this.#map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.#map);

      // Handling clicks on the map
      // Leaflet on API
      this.#map.on('click', this._showForm.bind(this));
    }
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    // Helper function
    // My validInputs helper function will loop over an entire array, inputs, containing an arbitrary amount of expected values, and in each of them it will check whther the number is finite or not
    const validInputs = (...inputs) =>
      // My every method will ONLY return true if the value is true for ALL elements in the array
      // So if even one of the finite checks is false,then every will return false | unlucky g
      inputs.every(input => Number.isFinite(input));
    const allPositive = (...inputs) => inputs.every(input => input > 0);
    e.preventDefault();

    // Get data from my form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // Check if data is valid
    // Use a GUARD Clause (kinda cool tho)
    // In regards to my helper functions, notice how I'm always inverting the returned values of a method as the conditional for my logic checks??
    // If workout is running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Inputs need to be positive numbers, cmon, man..');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // Validate my running data
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('Inputs need to be positive numbers, cmon, man..');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render my workout on map as a marker
    console.log('Map Debugger', this.#mapEvent);
    // Check to ensure this keyword defined
    if (this.#mapEvent) {
      L.marker([lat, lng]).addTo(this.#map).bindPopup('HELL YEAH, BROTHER');
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
        .setPopupContent('Workout, bruvva')
        .openPopup();
      // Render workout on a list

      // Hide form + clear input fields

      // Clear input fields
      inputDistance.value =
        inputDuration.value =
        inputCadence.value =
        inputElevation.value =
          '';

      // For debugging
      console.log(this);
    }
  }
}
// Creating my objects
const app = new App();
// Getting user's position loads my map
app._getPosition();

// ========================================
// Project Architecture
// ========================================
//
// User Stories
// ========================================
// 1. Log my running workouts with location, distance, time, pace and steps/minute (cadence)

// 2. Log my cycling workouts with location, distance, time, speed, and elevation gain

// So I'll have a Workout Class that will have the following properties (in brackets mean it's a property unique to the class):
//(id), distance, duration, coords, (date)
// Inside of the Workout class I will have a constructor that will be the parent of its two child classes, Running & Cycling,
// My children classes will each have their own constructor, respectively,

// Class Running has the following properties:
// (name), cadence, pace
// And it will inherit the distance, duration, and coords properties from its parent

// Class Cycling has the following properties:
// (name), elevationGain, speed
// And it will inherit the distance, duration, and coords properties from its parent

// Class App has the following properties:
// (workouts), an array for holding all Running or Cycling objects and (map)
//
// The App class will also contain its own constructor, and this constructor will be responsible for loading the page, receive position cloak on map, change layout, and submit form, and so will have the following properties :
// _getPosition(), )loadMap(position), _showForm(), _toggleElevationField()
// It will also contain the Method for creating new workouts to be passed to the workout class constructors, _newWorkout()

// ========================================
// Refactoring for Project Architecture
// ========================================
//
//
