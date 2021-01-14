const getForecast =async()=>{
    document.getElementById("forecastIMG").style.display = "none";
    document.getElementById("result1").innerHTML= "";
    document.getElementById("result2").innerHTML= "";
    document.getElementById("error").innerHTML= "";
    let address = document.getElementById("search").value;
    fetch('/weather?location='+ address +'!').then((response)=>{
        response.json().then((data)=>{
            if(!data.error){
                console.log(data.location+ " "+ data.forecast );
                document.getElementById("forecastIMG").style.display = "block";
                document.getElementById("forecastIMG").src = data.forecast.weather_icons[0];
                document.getElementById("result1").innerHTML= data.location+ ", " + data.forecast.region + ", " + data.forecast.country;
                document.getElementById("result2").innerHTML= "Weather description: "+ data.forecast.description + "<br>Temperature: " + data.forecast.temperature + " C<br>Feels like: " + data.forecast.feelsLike+ " C<br>Wind direction: " +data.forecast.wind_dir+ "<br>Wind speed: " + parseFloat(0.3048*data.forecast.wind_speed).toFixed(2)+ " m/s";
                
            }else{
                console.log(data);
                document.getElementById("error").innerHTML= data.error;
            }
            
        })
    })    
}


