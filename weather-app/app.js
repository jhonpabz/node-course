require('dotenv').config();
const request = require('postman-request');

const WEATHER_KEY = process.env.WEATHERSTACK_API_KEY;
const POSITIONS_KEY = process.env.POSITIONSTACK_API_KEY;

// const url =
//   'http://api.weatherstack.com/current?access_key=' +
//   WEATHER_KEY +
//   '&query=New%20York';

// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.current;

//   const temp = data.temperature;
//   const feelsLikeTemp = data.feelslike;
//   const weatherDesc = data.weather_descriptions[0];
//   console.log(
//     weatherDesc +
//       '. It is currently ' +
//       temp +
//       ' degrees out. It feels like ' +
//       feelsLikeTemp +
//       ' degrees out.'
//   );
// });

const geocodeURL =
  'http://api.positionstack.com/v1/forward?access_key=' +
  POSITIONS_KEY +
  '&query=Los%20Angeles';

request({ url: geocodeURL, json: true }, (error, response) => {
  const result = response.body.data;
  // console.log(result, 'result');

  console.log('Latitude: ', result[0].latitude);
  console.log('Longitude: ', result[0].longitude);
});
