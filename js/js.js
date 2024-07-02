
// // today data 

var todayName=document.getElementById("todayName");
var todayNumber=document.getElementById("todayNumber");
var todayMonth=document.getElementById("todayMonth");
var cityName=document.getElementById("cityName");
var todayTemp=document.getElementById("temperature");
var todayTempImg=document.getElementById("todayTempImg");
var todayTempText=document.getElementById("todayTempText");
var todayHumidity=document.getElementById("Humidity");
var todayWind=document.getElementById("Wind");
var todayCompass=document.getElementById("Compass");

// // next day data 

var nextDayName=document.getElementById("nextDayName");

var nextDayImg=document.getElementById("nextDayImg");
var maxTemp=document.getElementById("max-temperature-tomorrow");
var minTemp=document.getElementById("min-temperature-tomorrow");
var nextDayTempText=document.getElementById("weather-tomorrow");

// // third day data

var thirdDayName=document.getElementById("thirdDayName");

var thirdDayImg=document.getElementById("thirdDayImg");
var thirdMaxTemp=document.getElementById("max-temperature-after-tomorrow");
var thirdMinTemp=document.getElementById("min-temperature-after-tomorrow");
var thirdDayTempText=document.getElementById("weather-after-tomorrow");


var input =document.getElementById("Location")
var btn =document.getElementById("btn")

btn.addEventListener("click",function () {
  console.log(input.value)
  getData(input.value)
})

 
var dataList=[];

getData('cairo')

async function getData(city) {

var weatherData= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3dd52ff010ce473d96984510242806&q=${city}&days=3
`);

var weatherResponse = await weatherData.json();

dataList= weatherResponse;


displayTodayData()
displayTomorrowData()
displayAfterTomorrowData()
  
}



function displayTodayData() {
  var todayDate = new Date ()
  todayName.innerHTML=todayDate.toLocaleDateString("en-US", {weekday:"long"});
  todayMonth.innerHTML=todayDate.toLocaleDateString("en-US", {month:"long"});
  todayNumber.innerHTML=todayDate.getDate();
    cityName.innerHTML=dataList.location.name;
    todayTemp.innerHTML=dataList.current.temp_c + " " +"C";
    // todayTempImg.setAttribute("src",dataList.current.condition.icon);
    todayTempText.innerHTML=dataList.current.condition.text;
    todayHumidity.innerHTML=dataList.current.humidity +"%";
    todayWind.innerHTML=dataList.current.wind_kph  +"km/h";
    todayCompass.innerHTML=dataList.current.wind_dir;

}

function displayTomorrowData(){
  var forecastData = dataList.forecast.forecastday;

  for (var i = 0; i < 2; i++) {
    var tomorrowDate = new Date (forecastData[i+1].date)
    thirdDayName.innerHTML= tomorrowDate.toLocaleDateString("en-US", {weekday:"long"});
    thirdDayImg.setAttribute("src",forecastData.day.condition.icon);
    thirdMaxTemp.innerHTML=forecastData.day.maxtemp_c;
    thirdMinTemp.innerHTML=forecastData.day.mintemp_c;
    thirdDayTempText.innerHTML=forecastData.day.condition.text;
  }
}


function displayAfterTomorrowData(){
  var forecastData = dataList.forecast.forecastday;

  for (let i = 0; i < 2; i++) {
    var  afterTomorrowDate = new Date (forecastData[i+2].date)
    thirdDayName.innerHTML =afterTomorrowDate.toLocaleDateString("en-US", {weekday:"long"});
    nextDayName.innerHTML= tomorrowDate.toLocaleDateString("en-US", {weekday:"long"});
    nextDayImg.setAttribute("src",forecastData.day.condition.icon);
    maxTemp.innerHTML=forecastData.day.maxtemp_c;
    minTemp.innerHTML=forecastData.day.mintemp_c;
    nextDayTempText.innerHTML=forecastData.day.condition.text;

  }
}












