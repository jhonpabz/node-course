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

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.length === 0) {
      callback(body.error?.info, undefined);
    } else {
      callback(undefined, {
        temp: body.current.temperature,
        feelsLikeTemp: body.current.feelslike,
        weatherDesc: body.current.weather_descriptions[0],
        location: body.location.name,
        region: body.location.region,
        country: body.location.country,
      });
    }
  });
};

module.exports = forecast;
