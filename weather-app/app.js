const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Urdaneta', (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log('Error', error);
    console.log('Forecast Data: ', data);
  });
});
