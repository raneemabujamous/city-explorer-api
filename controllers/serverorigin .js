"use strict";

const express = require("express");
const axios = require("axios");

const app = express();
const cors = require("cors");

require("dotenv").config();
const waetherCon = require('./controllers/weather.cot')
const movieCon = require('./controllers/Movie.cot')
app.use(cors());
const PORT = process.env.PORT;


app.get('/raneem', (req, res) => {
    res.status(200).send("hello baby");
})


app.listen(PORT, () => {
    console.log(`from listen ${PORT}`);

})
app.get('/weather',waetherCon)
app.get('/movie',movieCon)



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


// let getMovie = async (req, res) => {
//     console.log("fewaqr")

//     let query = req.query.query
//     console.log(query)

//     let moviUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}&language=de-DE&region=DE`
//     let responsemovie = await axios.get(moviUrl);
//     let movieData = responsemovie.data.results

//     let movieArray =await movieData.map(i => {

//           return(  new Movies (i))
  
//     })
//     console.log(movieArray,"resgre")

//     res.status(200).json(movieArray);
// }

// app.get('/weather', getWearher)
// app.get('/movie', getMovie)




// class Movies {
//     constructor(data) {
//         this.title = data.title,
//             this.overview = data.overview,
//             this.vote_average = data.vote_average,
//             this.vote_count = data.vote_count,
//             this.poster_path =`https://image.tmdb.org/t/p/w500/${data.poster_path}`,
//             this.popularity = data.popularity ,
//             this.released_on = data.released_on

//     }
// }
// class Forcaset {
//     constructor(
//         date , description
//     ) {
// this.date =date,
// this.description=description

// }}


