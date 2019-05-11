// San Diego CA 32.7174, -117.1628]
var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=32.7174&lon=-117.1628&appid=28af81603ac21f0fe4c75478dad21818&units=imperial";

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    var temp = weatherData.main.temp;

    document.getElementById("sandiego-current-temp").innerHTML = temp;
    console.log(temp);
}
