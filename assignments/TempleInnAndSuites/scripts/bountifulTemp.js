
// Bountiful UT [40.8895, -111.8805]
var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.8895&lon=-111.8805&appid=28af81603ac21f0fe4c75478dad21818&units=imperial";

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var temp = weatherData.main.temp;

    document.getElementById("bountiful-current-temp").innerHTML = temp;
    console.log(temp);
}
