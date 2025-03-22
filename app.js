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
    const { lat, lon, city } = req.query;
    let weatherData;

    if (lat && lon) {
      weatherData = await getWeather(`${lat},${lon}`);
    } else if (city) {
      weatherData = await getWeather(city);
    } else {
      return res
        .status(400)
        .json({ error: 'Please provide a city or coordinates.' });
    }

    if (!weatherData || weatherData.error) {
      return res.status(404).json({ error: 'Please enter a valid city' });
    }

    res.render('weather', { weatherData });
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'Something went wrong. Try again.' });
  }
});

app.use((req, res) => {
  res.status(404).render('error');
});

module.exports = app;
