const request = require('request');

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0fa1cbcb4aba67d2269492dcdb4c3363&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m';

    request({url, json: true},(error, {body}={})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another location!', undefined)
        }else{
            callback(undefined,  body.current.weather_descriptions[0]+ ' currently, ' +body.current.temperature+  ' degrees celsius and it feels like ' +body.current.feelslike+ ' degrees celsius!')
        }

    })
}

module.exports = forecast;