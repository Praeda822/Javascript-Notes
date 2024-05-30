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

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com.au/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Leaflet on API
      map.on('click', function (mapEvent) {
        console.log(mapEvent);

        const { lat, lng } = mapEvent.latlng;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup('A pretty CSS popup.<br> Easily customizable.');
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
          .setPopupContent('Workout, bruvva')
          .openPopup();
      });

      console.log(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent('Workout, bruvva')
        .openPopup();
    },
    function () {
      alert('Could not get your current location, bruv');
    }
  );
