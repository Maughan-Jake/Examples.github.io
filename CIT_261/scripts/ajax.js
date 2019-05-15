window.onload = function() {

    // -----------------------------------------------For .txt
    var getTxt = document.getElementById("getTxt");
    var content = document.getElementById("content");
    
    // creates a new AJAX object
    var request1 = new XMLHttpRequest();

    // capture the event of clicking the 'grab a .txt file' button
    getTxt.addEventListener("click",function(){
        // after the button is clicked do this
        request1.addEventListener('readystatechange',function(){
            // replace the inner HTML of content to the response text of request.open (this response)
            content.innerHTML = this.responseText + '<br>';
        })
        // trigger the open and send events after the event is triggered
        request1.open("GET","textFile.txt", true);
        request1.send();
    })

    // -----------------------------------------------For JSON
    var getJSON = document.getElementById("getJSON");
    var request2 = new XMLHttpRequest();

    // create AJAX object
    getJSON.addEventListener("click",function(){

        // capture the click event
        request2.addEventListener('readystatechange',function(){
            // if the json is in the complete state (4) and has no errors (200)
            if(this.readyState == 4 && this.status == 200){
                var data = JSON.parse(request2.responseText);

                for(property in data) {
                    content.innerHTML += property + ": " + data[property] + '<br>';
                }
            }
        })
        request2.open("GET", "info.json", true);
        request2.send();
    })

    // -----------------------------------------------For JSON2
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
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("windSpeed").innerHTML = windSpeed;
    }
};