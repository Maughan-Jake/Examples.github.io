//  s is the wind speed in miles per hour
var s = 5;

// t is the air temperature in Fahrenheit
var t = 89;

// f is the wind chill factor in Fahrenheit
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

var round = Math.round(f*100)/100;

document.getElementById("windchill").innerHTML = round;