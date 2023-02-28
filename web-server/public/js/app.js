// const { response } = require("express");
console.log('Client side js file');

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch('http://localhost:3000/weather?address=makati').then((response) => {
  response.json().then((data) => {
    console.log('weather', data);
  });
  // .catch((err) => {
  //   console.log('error', err);
  // });
});
