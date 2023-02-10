require('dotenv').config();
const request = require('postman-request');

const weatherApiKey = process.env.WEATHERSTACK_API_KEY;
const url =
  'https://api.weatherstack.com/current?access_key=' +
  weatherApiKey +
  '&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  console.log(response, 'response');
});
