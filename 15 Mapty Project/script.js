'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// ========================================
// Using the Geo-location API
// ========================================
//
// This takes two callback functions as an argument:
// 1. To be called on success, so whenever the browser is able to successfully get the coordinates of the current position of the user
// I'll call this function with one argument: the position parameter
// 2. Error callback function, so the one that I'll define when an error occurs

let map, mapEvent;

class App {
  // Private Instance Properties
  #map;
  #mapEvent;
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
    e.preventDefault();
    console.log(this);

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Display my marker
    console.log(this.#mapEvent);
    // Check to ensure this keyword defined
    if (this.#mapEvent) {
      const { lat, lng } = this.#mapEvent.latlng;
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
