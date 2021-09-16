'use strict';

require('dotenv').config();;
const express = require('express');
const cors = require('cors');
const axios = require("axios");
const app = express();

app.use(cors());

const weather = require('./weather.js');

app.get('/weather', weatherHandler);

async function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  await weather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!')
    });
}

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));


