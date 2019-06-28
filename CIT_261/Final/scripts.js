function storeZip(zip) {
    localStorage.setItem("userZip", zip);
 }
 
 function deleteUser() {
    localStorage.clear();
    location.reload(true);
 }

 function getData() {
    weatherSummary(localStorage.getItem("userZip"));
    sevenDayForecast(localStorage.getItem("userZip"));
 }

function weatherSummary(zip) {
    // Ajax calls to the openweathermap api
    var weatherRequest = new XMLHttpRequest();

    // uses the zip enterd by the user to pull data on the correct location
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&APPID=28af81603ac21f0fe4c75478dad21818&units=imperial';
    // console.log(apiURL);
    // if it loads correctly and there are no errors
    if (this.readyState == 4 && this.status == 200) {
        // Stringify
        var apiData = this.response;
        // store to local storage
        localStorage.setItem("userWeather", apiData);
        displayWeather(); // changes the CSS
        console.log("weather is up to date");
    }

    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();

    weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var temp = weatherData.main.temp;
    var humidity = weatherData.main.humidity;
    var windSpeed = weatherData.wind.speed;
    var cityName = weatherData.name;
    //var icon = weatherData['weather'][0]['icon'];

    document.getElementById("current-temp").innerHTML = temp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById("cityName").innerHTML = cityName;
    //document.getElementById('icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
    }
}

function sevenDayForecast(zip) {
    var forecastRequest = new XMLHttpRequest();
    var apiURL = 'https://api.openweathermap.org/data/2.5/forecast/?zip=' + zip + '&APPID=28af81603ac21f0fe4c75478dad21818&units=imperial';
    forecastRequest.open('Get', apiURL , true);
    // console.log(apiURL);
    forecastRequest.send();

    forecastRequest.onload = function () {
        var forecastData = JSON.parse(forecastRequest.responseText);

        var dayTemp0 = forecastData['list'][0]['main']['temp'];
        var dayTemp1 = forecastData['list'][1]['main']['temp'];
        var dayTemp2 = forecastData['list'][2]['main']['temp'];
        var dayTemp3 = forecastData['list'][3]['main']['temp'];
        var dayTemp4 = forecastData['list'][4]['main']['temp'];
        var dayTemp4 = forecastData['list'][5]['main']['temp'];

        document.getElementById("dayTemp0").innerHTML = dayTemp0;
        document.getElementById("dayTemp1").innerHTML = dayTemp1;
        document.getElementById("dayTemp2").innerHTML = dayTemp2;
        document.getElementById("dayTemp3").innerHTML = dayTemp3;
        document.getElementById("dayTemp4").innerHTML = dayTemp4;

        // console.log(forecastData);
    }

}