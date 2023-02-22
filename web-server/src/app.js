const path = require('path');
const express = require('express');

const app = express();
const port = 8000;
const publicDirPath = path.join(__dirname, '../public/');

app.set('view engine', 'hbs');
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
// app.use('/help', express.static(path.join(__dirname, '../public/help.html')));

// app.use('/about', express.static(path.join(__dirname, '../public/about.html')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
