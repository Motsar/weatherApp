const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibW90c2FyIiwiYSI6ImNrZXZpZmwzYjQ1NGIyc3BjNmpiN3NqNDUifQ.XuZO9KICq0k09ev8Ie4vQQ&limit=1';

    request({url, json: true},(error, {body}={})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.features.length===0){
            callback('Unable to find location. Try another location!', undefined)
        }else{
            callback(undefined,{
            longitude: body.features[0].center[0],
            latitude: body.features[0].center[1],
            location: body.features[0].place_name
            })
        }
    })
}  

module.exports = geocode;