
const url = 'https://api.weatherapi.com/v1/current.json?key=ae6ced511c1f4e57a2d91603253006&aqi=no&q='
const search = document.querySelector("#location")
const button = document.querySelector(".search button")

const checkweather = async(city)=>{
  try{
    const response = await fetch(url + city)
    const data = await response.json()
   if(response.status == 400){
    document.querySelector("#error").style.display = "flex"
   }
   if(response.status == "(failed)net::ERR_NAME_NOT_RESOLVED"){
    document.querySelector("#error").style.display = "flex"
   }

    document.querySelector(".location").innerHTML = data.location.name
    document.querySelector(".temperature").innerHTML = data.current.temp_c+"°c"
    document.querySelector(".humidity").innerHTML = data.current.humidity+"%"
    document.querySelector(".wind").innerHTML = data.current.wind_kph+" km/h"

    const pic = document.querySelector(".main img")
    const code = data.current.condition.code;

if (code === 1000) {
  pic.src = "./photos/clear.png";
}
else if (code >= 1003 && code <= 1009) {
  pic.src = "./photos/clouds.png";
}
else if (code === 1030 || code === 1135 || code === 1147) {
  pic.src = "./photos/humidity.png";
}
else if (code >= 1087 && code <= 1117) {
  pic.src = "./photos/moist.png";
}
else if (code >= 1114 && code <= 1147) {
  pic.src = "./photos/wind.png";
}
else if (code >= 1150 && code <= 1171) {
  pic.src = "./photos/drizzle.png";
}
else if (code >= 1180 && code <= 1201) {
  pic.src = "./photos/rain.png";
}
else if (code >= 1204 && code <= 1237) {
  pic.src = "./photos/snow.png";
}
else if (code >= 1240 && code <= 1258) {
  pic.src = "./photos/snow.png";
}
else if (code >= 1261 && code <= 1264) {
  pic.src = "./photos/snow.png";
}
else if (code >= 1273 && code <= 1282) {
  pic.src = "./photos/rain.png";
}
else {
  pic.src = "./photos/clear.png"; // Fallback
}

 document.querySelector(" .main").style.display="flex"
  document.querySelector("footer").style.display="flex"
  
}
 catch(err){
  if(err.message.includes('Failed to fetch')){
    alert("Please connect to the internet")
  }
 }
}



button.addEventListener("click", (event)=>{
  const  newdata = search.value;
    checkweather(newdata)
})

//next sprint is to add city not found if user searches on a wrong city