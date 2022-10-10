var APIKey = "9dbe76981e248581151f53806ee2f190";
var nameInputEl = document.querySelector("#city");
var cityFormEl = document.querySelector("#city-form");
var todayEl = document.getElementById("todayEl")
var header2 = document.createElement("h2")
var header3 = document.createElement("h3")
var breakEl = document.createElement("br")

var cityWeather = function(event) {
    event.preventDefault();
    var city = nameInputEl.value.trim();
    var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=e947ccaee463cee018bbc246f7d89e64";

    fetch(locationURL)
    .then(function (response) {
      return response.json().then(function(data) {
        weatherSearch(data);
        forcastSearch(data)
      });

    })
    };
    var weatherSearch = function (data) {
      console.log(data[0]);
      var latEl = data[0].lat 
      var lonEl = data[0].lon
      
      var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latEl + "&lon=" + lonEl + "&appid=e947ccaee463cee018bbc246f7d89e64";
      fetch(forcastURL)
      .then(function(forcastEl) {
        return forcastEl.json();
      })
      .then(function(forcastData) {
        console.log(forcastData)
      })
    }
    var forcastSearch = function (data) {
      var latEl = data[0].lat 
      var lonEl = data[0].lon
    var coordinatesURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latEl + "&lon=" + lonEl + "&appid=e947ccaee463cee018bbc246f7d89e64&units=imperial";
      fetch(coordinatesURL)
      .then(function(responseEl) {
        return responseEl.json();
      })
      .then(function(dataEl) {
        console.log(dataEl)
        displayDay(dataEl)
      })
    }
    var displayDay = function(dataEl) {
      var placeEl = dataEl.name
      // var dateEl = 
      var tempEl = dataEl.main.temp
      var windEl = dataEl.wind.speed
      var humidEl = dataEl.main.humidity
      var iconEl = dataEl.weather[0].icon
header2.append(placeEl)
todayEl.append(placeEl)
todayEl.append(breakEl)
header3.append(tempEl)
todayEl.append("temp: " + tempEl)
todayEl.append(breakEl)
header3.append(windEl)
todayEl.append("wind: " + windEl)
todayEl.append(breakEl)
header3.append(humidEl)
todayEl.append("Humidity: " + humidEl)
    }


cityFormEl.addEventListener("submit", cityWeather)

// fetch("http://api.openweathermap.org/geo/1.0/direct?q=minneapolis&limit=5&appid=e947ccaee463cee018bbc246f7d89e64")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });