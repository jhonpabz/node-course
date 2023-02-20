const path = require('path');
const express = require('express');

const app = express();
const port = 3000;
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.send('<h1>zxcv</h1>');
});

app.get('/help', (req, res) => {
  res.send({
    name: 'Jhon',
    age: 26,
  });
});

app.get('/about', (req, res) => {
  res.send('<h2>About us Page</h2>');
});

app.get('/weather', (req, res) => {
  res.send({
    temp: '36 deg',
    feelslike: '37 deg',
    location: 'Quezon City',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
