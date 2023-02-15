// require('dotenv').config();
// const request = require('postman-request');
// const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const WEATHER_KEY = process.env.WEATHERSTACK_API_KEY;
// const POSITIONS_KEY = process.env.POSITIONSTACK_API_KEY;

// const url =
//   'http://api.weatherstack.com/current?access_key=' +
//   WEATHER_KEY +
//   '&query=15.980513,120.459830';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (!response.body.success) {
//     console.log(response.body.error.info);
//   } else {
//     const data = response.body.current;
//     const temp = data.temperature;
//     const feelsLikeTemp = data.feelslike;
//     const weatherDesc = data.weather_descriptions[0];

//     console.log(
//       weatherDesc +
//         '. It is currently ' +
//         temp +
//         ' degrees out. It feels like ' +
//         feelsLikeTemp +
//         ' degrees out.'
//     );
//   }
// });

// geocode('Quezon', (error, data) => {
//   console.log('Error: ', error);
//   console.log('Data: ', data);
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(15.980513, 120.45983, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
