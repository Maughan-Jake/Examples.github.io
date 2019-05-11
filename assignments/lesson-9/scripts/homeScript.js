var dataRequest = new XMLHttpRequest();
var apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
dataRequest.open('GET', apiURL, true);
dataRequest.send();

dataRequest.onload = function () {
    // Franklin Data
    var townData = JSON.parse(dataRequest.responseText);
    var name = townData['towns'][0]['name'];
    var motto = townData['towns'][0]['motto'];
    var founded = townData['towns'][0]['yearFounded'];
    var population = townData['towns'][0]['currentPopulation'];
    var rainfall = townData['towns'][0]['averageRainfall'];

    document.getElementById("franklinName").innerHTML = name;
    document.getElementById("franklinMotto").innerHTML = motto;
    document.getElementById("franklinFound").innerHTML = founded;
    document.getElementById("franklinPop").innerHTML = population;
    document.getElementById("franklinRain").innerHTML = rainfall;

    // Greenville Data
    var townData = JSON.parse(dataRequest.responseText);
    var name = townData['towns'][2]['name'];
    var motto = townData['towns'][2]['motto'];
    var founded = townData['towns'][2]['yearFounded'];
    var population = townData['towns'][2]['currentPopulation'];
    var rainfall = townData['towns'][2]['averageRainfall'];

    document.getElementById("greenvilleName").innerHTML = name;
    document.getElementById("greenvilleMotto").innerHTML = motto;
    document.getElementById("greenvilleFound").innerHTML = founded;
    document.getElementById("greenvillePop").innerHTML = population;
    document.getElementById("greenvilleRain").innerHTML = rainfall;

    // Springfield Data
    var townData = JSON.parse(dataRequest.responseText);
    var name = townData['towns'][6]['name'];
    var motto = townData['towns'][6]['motto'];
    var founded = townData['towns'][6]['yearFounded'];
    var population = townData['towns'][6]['currentPopulation'];
    var rainfall = townData['towns'][6]['averageRainfall'];

    document.getElementById("springfieldName").innerHTML = name;
    document.getElementById("springfieldMotto").innerHTML = motto;
    document.getElementById("springfieldFound").innerHTML = founded;
    document.getElementById("springfieldPop").innerHTML = population;
    document.getElementById("springfieldRain").innerHTML = rainfall;
}