// Logan UT [41.74, -111.83]

var weatherRequest = new XMLHttpRequest();
var loganURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.74&lon=-111.83&appid=28af81603ac21f0fe4c75478dad21818&units=imperial";

weatherRequest.open('GET', loganURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var temp = weatherData.main.temp;

    document.getElementById("logan-current-temp").innerHTML = temp;
    console.log(temp);
    
}

