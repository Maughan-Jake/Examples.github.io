var date = new Date();
var d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = date.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var y = date.getFullYear();

document.getElementById("date").innerHTML = [d[date.getDay()] + ", " + day + " " + months[date.getMonth()] + " " + y];

// Monday, 6 April 2020