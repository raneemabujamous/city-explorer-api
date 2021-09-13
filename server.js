'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;

// app.get('/raneem', (req, res) => {
//     res.status(200).send("hello baby");
// })

app.get('/weather', (req, res) => {
    let lat = Number(req.query.lat);
    let lon  = Number(req.query.lon);
    
    let result 
    if(lat && lon){

       result =   weatherData.find(element=>element.lat === lat && element.lon === lon)
        console.log(result)

  let forcase = result.data.map(item =>{
   return(
          new Forcaset (item.datetime ,item.weather.description)
   )
      
  })
  console.log(forcase)
  res.status(200).json(forcase)
    }else{
       res.status(400).send('error 404')
   }

})
app.listen(PORT, () => {
    console.log(`from listen ${PORT}`);
})

class Forcaset {
    constructor(
        date , description
    ) {
this.date =date,
this.description=description
    
}}