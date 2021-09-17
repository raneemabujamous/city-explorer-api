'use strict'
const axios = require('axios')
const Orader = require('../modules/Yellp.mod')
let YELP_API_KEY = process.env.YELP_API_KEY


const yellpOrder = async (req,res) =>{
let cityName = req.query.cityName
let url = 'https://api.yelp.com/v3/businesses/search?location=${cityName}'
let response = await axios.create({url,headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
    'Content-type': 'application/json',
  }})

  let dataResp =response.data.businesses
  console.log(dataResp)
  let result = dataResp.map(item => {
    return( new Order(item))
  })
res.status(200).json(result)

}

module.exports=yellpOrder