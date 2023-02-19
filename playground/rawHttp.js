// require('dotenv').config();
const http = require('node:http');

// paste key here
const WEATHER_KEY = '';
const latitude = 45;
const longitude = -75;

const url =
  'http://api.weatherstack.com/current?access_key=' +
  WEATHER_KEY +
  '&query=' +
  latitude +
  ',' +
  longitude;

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.end();
