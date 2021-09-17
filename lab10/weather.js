// 'use strict';
// require('dotenv').config();

// let axios = require('axios')
// let cache = require('./cache.js');
// module.exports = getWeather;

// async function getWeather(lat, lon) {
//   const key = 'weather-' + lat + lon;
//   const url = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${process.env.WEATHER_API_KEY}&lang=en&lat=${lat}&lon=${lon}&days=5`;
// let storedata = await axios.get(url)
// console.log(storedata.data)
//   if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
//     console.log('Cache hit');
//   } else {
//     console.log('Cache miss');
//     cache[key] = {};
//     cache[key].timestamp = Date.now();
//     cache[key].data =parseWeather(storedata.data)
    
  
//   }
  
//   return cache[key].data;
// }

// getWeather(31.9515694,35.9239625)
// function parseWeather(weatherData) {
//   try {
//     const weatherSummaries = weatherData.data.map(day => {
      
//       return new Weather(day);
//     });
//     return Promise.resolve(weatherSummaries);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// class Weather {
//   constructor(day) {
//     this.forecast = day.weather.description;
//     this.time = day.datetime;
//   }
// }