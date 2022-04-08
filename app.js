const http = require('http');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 9999;

const compression = require('compression');

app.use(compression());



// Stel ejs in als template engine
app.set('view engine', 'ejs');
app.set('views', 'views');


// Stel een static map in
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


// Ophalen van API data
app.get('/', (req, res) => {
  const rijksAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=SOmD5CX7&ps&imgonly=true';
  fetch(rijksAPI)
    .then(async response => {
      const collection = await response.json();
      res.render('index', {
        pageTitle: 'Art Museum',
        data: collection.artObjects
      });
    })
    .catch(err => res.send(err))
})


// Zoekfunctie
app.get('/search', (req, res) => {
  const rijksAPI = `https://www.rijksmuseum.nl/api/nl/collection?key=SOmD5CX7&q=${req.query.q}&ps&imgonly=true`;
  fetch(rijksAPI)
    .then(async response => {
      const collection = await response.json();
      res.render('index', {
        pageTitle: 'Art Museum',
        data: collection.artObjects
      });
    })
    .catch(err => res.send(err))
})
