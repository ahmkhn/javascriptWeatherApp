async function fetchData(textInput){
    try{
        const apiReturn = await fetch(`https://api.weatherapi.com/v1/current.json?key=71c9dd68bf5f42af97f94351241102&q=${textInput}&aqi=yes`);
        if(!apiReturn.ok){
            throw new Error("Cant loccate");
        }
        const apiData=await apiReturn.json();// response body
        console.log(apiData);
    }catch(error){
        console.log(error);
    }
}
function submit(){
    const textField = document.getElementById("weatherText");
    const cityName=textField.value.toLowerCase();
    fetchData(cityName);
}