require('dotenv').config();
const request = require('postman-request');

const WEATHER_KEY = process.env.WEATHERSTACK_API_KEY;
const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=' +
    WEATHER_KEY +
    '&query=' +
    latitude +
    ',' +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.length === 0) {
      callback(response.body.error?.info, undefined);
    } else {
      callback(undefined, {
        temp: response.body.current.temperature,
        feelsLikeTemp: response.body.current.feelslike,
        weatherDesc: response.body.current.weather_descriptions[0],
        location: response.body.location.name,
        region: response.body.location.region,
        country: response.body.location.country,
      });
    }
  });
};

module.exports = forecast;
