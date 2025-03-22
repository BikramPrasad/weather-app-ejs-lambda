const axios = require('axios');

async function getWeather(query) {
  const options = {
    method: 'GET',
    url: 'http://api.weatherstack.com/current',
    params: {
      access_key: process.env.WEATHER_API_KEY,
      query: query,
    },
  };

  try {
    const response = await axios.request(options);

    if (!response.data || !response.data.current) {
      console.error('Invalid weather API response:', response.data);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(
      'Error fetching weather data:',
      error.response?.data || error.message || error
    );
    return null;
  }
}

module.exports = getWeather;
