var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=28af81603ac21f0fe4c75478dad21818&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var temp = weatherData.main.temp;
    var weatherMain = weatherData['weather'][0]['main'];
    var humidity = weatherData.main.humidity;
    var windSpeed = weatherData.wind.speed;
    var icon = weatherData['weather'][0]['icon'];


    document.getElementById("current-temp").innerHTML = temp;
    document.getElementById("weatherMain").innerHTML = weatherMain;
    document.getElementById("weatherMainSummary").innerHTML = weatherMain;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
}

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=28af81603ac21f0fe4c75478dad21818&units=imperial", true);
forecastRequest.send();

forecastRequest.onload = function () {
    var forecastData = JSON.parse(forecastRequest.responseText);
    var dayTemp0 = forecastData['list'][0]['main']['temp'];
    var dayTemp1 = forecastData['list'][1]['main']['temp'];
    var dayTemp2 = forecastData['list'][2]['main']['temp'];
    var dayTemp3 = forecastData['list'][3]['main']['temp'];
    var dayTemp4 = forecastData['list'][4]['main']['temp'];
    
    document.getElementById("dayTemp0").innerHTML = dayTemp0;
    document.getElementById("dayTemp1").innerHTML = dayTemp1;
    document.getElementById("dayTemp2").innerHTML = dayTemp2;
    document.getElementById("dayTemp3").innerHTML = dayTemp3;
    document.getElementById("dayTemp4").innerHTML = dayTemp4;

    console.log(forecastData);
    console.log(dayTemp0);
    console.log(dayTemp1);
    console.log(dayTemp2);
    console.log(dayTemp3);
    console.log(dayTemp4);
}



    // This is for the precipitation that the center cannot find
    // if (!jsonRespObj.hasOwnProperty('rain')) {
    //     document.getElementById('rain').innerHTML = 'no data available';
    // } else {
    //     tempObj = jsonRespObj.rain;
    //     if (!tempObj.hasOwnProperty(["1h"]))
    //         document.getElementById('rain').innerHTML = 'no data available';
    //     else
    //         document.getElementById('rain').innerHTML = jsonRespObj.rain["1h"];
    // }