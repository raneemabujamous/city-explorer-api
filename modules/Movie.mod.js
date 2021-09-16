'use strict'

class Movies {
    constructor(data) {
        this.title = data.title,
            this.overview = data.overview,
            this.vote_average = data.vote_average,
            this.vote_count = data.vote_count,
            this.poster_path =`https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            this.popularity = data.popularity ,
            this.released_on = data.released_on

    }
}

module.exports = Movies