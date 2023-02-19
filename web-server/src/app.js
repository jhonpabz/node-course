const express = require('express');

const app = express();
const port = 3000;

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
  res.send('About page');
});

app.get('/weather', (req, res) => {
  res.send('Weather app page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
