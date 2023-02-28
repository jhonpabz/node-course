// const { response } = require("express");
console.log('Client side js file');

fetch('https://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
