var APIKey = 9dbe76981e248581151f53806ee2f190;
var city;
// url = api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)