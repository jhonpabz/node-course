require('dotenv').config();
const request = require('postman-request');

const POSITIONS_KEY = process.env.POSITIONSTACK_API_KEY;

const geocode = (address, callback) => {
  const url =
    'http://api.positionstack.com/v1/forward?access_key=' +
    POSITIONS_KEY +
    '&query=' +
    encodeURIComponent(address);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.error) {
      callback(
        'Unable to connect to location services. Try another search.',
        undefined
      );
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
