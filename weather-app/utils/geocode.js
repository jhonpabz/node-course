require('dotenv').config();
const request = require('postman-request');

const POSITIONS_KEY = process.env.POSITIONSTACK_API_KEY;

const geocode = (address, callback) => {
  const geocodeURL =
    'http://api.positionstack.com/v1/forward?access_key=' +
    POSITIONS_KEY +
    '&query=' +
    encodeURIComponent(address);

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.error) {
      callback(
        'Unable to connect to location services. Try another search.',
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        location: response.body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
