 'use strict'
 const axios =require('axios');

const Movies = require('../modules/Movie.mod')

const getMovie = async (req, res) => {
    console.log("fewaqr")

    let query = req.query.query
    console.log(query)

    let moviUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}&language=de-DE&region=DE`
    let responsemovie = await axios.get(moviUrl);
    let movieData = responsemovie.data.results

    let movieArray =await movieData.map(i => {

          return(  new Movies (i))
  
    })
    console.log(movieArray,"resgre")

    res.status(200).json(movieArray);
}
module.exports = getMovie