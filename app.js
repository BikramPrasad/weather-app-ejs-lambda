const express = require('express');
const app = express();
const path = require('path');
const getWeather = require('./weather');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/weather', async (req, res) => {
  try {
    let weatherData;
    const { lat, lon, city } = req.query;

    if (lat && lon) {
      const query = `${lat},${lon}`;
      weatherData = await getWeather(query);
    } else if (city) {
      weatherData = await getWeather(city);
    } else {
      return res.render('weather', {
        weatherData: null,
        message: 'Please provide a city name or coordinates.',
      });
    }

    res.render('weather', { weatherData });
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.render('weather', {
      weatherData: null,
      message: 'Something went wrong. Try again.',
    });
  }
});

app.use((req, res) => {
  res.status(404).render('error');
});

module.exports = app;
