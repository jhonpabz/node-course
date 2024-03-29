const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = 3000;

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Jhon Pabz',
  });
});

app.get('/weather', (req, res) => {
  const queryAddress = req.query.address;

  if (!queryAddress) {
    return res.send({
      error: 'Address is required!',
    });
  }

  geocode(queryAddress, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }

    forecast(
      latitude,
      longitude,
      (
        error,
        { temp, feelsLikeTemp, location: forecastLocation, weatherDesc } = {}
      ) => {
        if (error) {
          return res.send({
            error: error,
          });
        }

        res.send({
          feelsLikeTemp: feelsLikeTemp,
          location: location,
          weatherDesc: weatherDesc,
          temp: temp,
          forecastLocation: forecastLocation,
        });
      }
    );
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Jhon Pabz',
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Jhon Pabz',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Jhon Pabz',
    errorMessage: 'Sorry, help article not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Jhon Pabz',
    errorMessage: `Sorry, we couldn't find
    this page.`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
