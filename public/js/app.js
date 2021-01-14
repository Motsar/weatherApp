const getForecast =async()=>{
    document.getElementById("result1").innerHTML= "";
    document.getElementById("result2").innerHTML= "";
    document.getElementById("error").innerHTML= "";
    let address = document.getElementById("search").value;
    fetch('http://localhost:3000/weather?location='+ address +'!').then((response)=>{
        response.json().then((data)=>{
            if(!data.error){
                console.log(data.location+ " \n"+ data.forecast );
                document.getElementById("result1").innerHTML= data.location;
                document.getElementById("result2").innerHTML= data.forecast;
            }else{
                console.log(data);
                document.getElementById("error").innerHTML= data.error;
            }
            
        })
    })    
}


