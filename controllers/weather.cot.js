   'use strict'
    const axios =require('axios');

   const Forcaset = require('../modules/Weather.mod')


    const getWearher = async (req,res)=>{

        let lat = req.query.lat
       let lon = req.query.lon
       let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`
      let response= await axios.get(url);

 let weatherData = response.data
let forcase = await weatherData.data.map(item =>{
     return(
           new Forcaset (item.datetime ,item.weather.description)
    )

    })
   res.status(200).json(forcase);
}

 module.exports = getWearher