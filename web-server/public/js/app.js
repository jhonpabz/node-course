// const { response } = require("express");
console.log('Client side js file');

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('p1');
const messageTwo = document.getElementById('p2');
const messageThree = document.getElementById('p3');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  messageThree.textContent = '';
  fetch('http://localhost:3000/weather?address=' + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          console.log('weather', data);
          messageOne.textContent = 'Weather: ' + data.weatherDesc;
          messageTwo.textContent = 'Temperature: ' + data.temp + ' °';
          messageThree.textContent = 'Location: ' + data.location;
        }
      });
    }
  );
});
