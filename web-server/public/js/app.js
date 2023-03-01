// const { response } = require("express");
console.log('Client side js file');

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch('http://localhost:3000/weather?address=!').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log('Error: ', data.error);
    } else {
      console.log('weather', data);
    }
  });
});
