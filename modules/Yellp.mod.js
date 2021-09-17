'use strict'

class Order {
    constructor(data){
        this.name=data.name,
        this.image_url = data.image_url;
        this.price=data.price,
        this.rating=data.rating,
        this.url = data.url

    }
}
module.exports=Order
