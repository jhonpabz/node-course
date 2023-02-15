const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Quezon', (error, data) => {
  console.log('Error: ', error);
  console.log('Geocode Data: ', data);

  forecast(data.latitude, data.longitude, (error, data) => {
    console.log('Error', error);
    console.log('Forecast Data: ', data);
  });
});

// forecast(15.980513, 120.45983, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });
