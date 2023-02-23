const path = require('path');
const express = require('express');

const app = express();
const port = 8000;

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Jhon Pabz',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Jhon Pabz',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  });
});
// app.use('/help', express.static(path.join(__dirname, '../public/help.html')));

// app.use('/about', express.static(path.join(__dirname, '../public/about.html')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
