async function fetchData(textInput){
    try{
        const apiReturn = await fetch(`https://api.weatherapi.com/v1/current.json?key=71c9dd68bf5f42af97f94351241102&q=${textInput}&aqi=yes`);
        if(!apiReturn.ok){
            throw new Error("Cant locate");
        }
        const apiData=await apiReturn.json();// response body
        console.log(apiData);
        updateDisplay(apiData);
    }catch(error){
        console.log(error);
        updateDisplay("error");
    }
}
function submit(){
    const textField = document.getElementById("weatherText");
    const cityName=textField.value.toLowerCase();
    fetchData(cityName);
}
function updateDisplay(apidata){ // only call if API call is true
    var displayDiv = document.getElementById("outputJr");
    // api data holds the API response body
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const region = document.getElementById("region");
    const condition = document.getElementById("condition");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const aqi = document.getElementById("aqi");
    if(apidata!="error"){
        country.innerHTML="Country:";
        city.innerHTML="City:";
        region.innerHTML="Region:";
        condition.innerHTML="Condition:";
        temperature.innerHTML="Temperature:";
        humidity.innerHTML="Humidity";
        aqi.innerHTML="AQI:";
        country.textContent=country.textContent+" "+apidata.location.country;
        city.textContent=city.textContent+" "+apidata.location.name;
        region.textContent=region.textContent+" "+apidata.location.region;
        condition.textContent=condition.textContent+" "+apidata.current.condition.text;
        temperature.textContent=temperature.textContent+" "+apidata.current.feelslike_c+" C";
        humidity.textContent=humidity.textContent+" "+apidata.current.humidity+" %";
        aqi.textContent=aqi.textContent+" "+apidata.current.air_quality.o3;
    }else{
        country.innerHTML="";
        city.innerHTML="";
        region.innerHTML="";
        condition.innerHTML="";
        temperature.innerHTML="";
        humidity.innerHTML="";
        aqi.innerHTML="";
        country.innerHTML="Error! City doesn't exist!";
    }
    displayDiv.style.display="block";
    
}
