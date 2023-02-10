require('dotenv').config();
const request = require('postman-request');

const weatherApiKey = process.env.WEATHERSTACK_API_KEY;
const url =
  'http://api.weatherstack.com/current?access_key=' +
  weatherApiKey +
  '&query=New%20York';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});