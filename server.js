"use strict";

const express = require("express");
const axios = require("axios");

const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT;



app.get('/raneem', (req, res) => {
    res.status(200).send("hello baby");
})


//    let getWearher = async (req,res)=>{

//        let lat = req.query.lat
//        let lon = req.query.lon
//        let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`
//        let response= await axios.get(url);

// let weatherData = response.data
// let forcase = weatherData.data.map(item =>{
//     return(
//            new Forcaset (item.datetime ,item.weather.description)
//     )

//    })
//    res.status(200).json(forcase);
// }


let getMovie = async (req, res) => {
   


    let query = req.query.query

    let moviUrl = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_API_KEY}&query=${query}`
    let responsemovie = await axios.get(moviUrl);

    let movieData = responsemovie.data
    console.log(movieData.overview)
    let movieArray = movieData.map(i => {
      
          return(  new Movies (i.title,i.overview,i.average_votes,i.total_votes,i.image_url,i.popularity,i.released_on))
  
       
    })

    res.status(200).json(movieArray);
}
// .results

// app.get('/weather', getWearher)
app.get('/movies', getMovie)



app.listen(PORT, () => {
    console.log(`from listen ${PORT}`);

})


class Movies {
    constructor(title,overview,average_votes,total_votes,image_url,popularity,released_on) {
        this.title = title,
            this.overview = overview,
            this.average_votes = average_votes,
            this.total_votes = total_votes,
            this.image_url = image_url,
            this.popularity = popularity,
            this.released_on = released_on

    }
}
// class Forcaset {
//     constructor(
//         date , description
//     ) {
// this.date =date,
// this.description=description

// }}