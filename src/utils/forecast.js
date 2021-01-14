const request = require('request');

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0fa1cbcb4aba67d2269492dcdb4c3363&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m';

    request({url, json: true},(error, {body}={})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another location!', undefined)
        }else{
            callback(undefined,  {"country": body.location.country,
                                  "region": body.location.region,
                                  "description": body.current.weather_descriptions[0],
                                  "temperature": body.current.temperature,
                                  "feelsLike": body.current.feelslike,
                                  "wind_dir":body.current.wind_dir,
                                  "wind_speed":body.current.wind_speed,
                                  "weather_icons":body.current.weather_icons})
        }

    })
}

module.exports = forecast;