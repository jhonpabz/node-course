require('dotenv').config();
const request = require('postman-request');

const WEATHER_KEY = process.env.WEATHERSTACK_API_KEY;
const POSITIONS_KEY = process.env.POSITIONSTACK_API_KEY;

const url =
  'http://api.weatherstack.com/current?access_key=' +
  WEATHER_KEY +
  '&query=15.980513,120.459830';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (!response.body.success) {
    console.log(response.body.error.info);
  } else {
    const data = response.body.current;
    const temp = data.temperature;
    const feelsLikeTemp = data.feelslike;
    const weatherDesc = data.weather_descriptions[0];

    console.log(
      weatherDesc +
        '. It is currently ' +
        temp +
        ' degrees out. It feels like ' +
        feelsLikeTemp +
        ' degrees out.'
    );
  }
});

const geocodeURL =
  'http://api.positionstack.com/v1/forward?access_key=' +
  POSITIONS_KEY +
  '&query=urdaneta';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Error');
  } else if (response.body.error) {
    const errMessage = response.body.error.message;
    console.log(errMessage, 'errMessage');
  } else {
    const result = response.body.data;

    const latitude = result[0].latitude;
    const longitude = result[0].longitude;

    console.log('Latitude: ', latitude);
    console.log('Longitude: ', longitude);
  }
});
