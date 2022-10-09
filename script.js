var APIKey = "9dbe76981e248581151f53806ee2f190";
var nameInputEl = document.querySelector("#city");
var url = "api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9dbe76981e248581151f53806ee2f190"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var cityFormEl = document.querySelector("#city-form")

var weatherSearch = function(event) {
    event.preventDefault();
    var city = nameInputEl.value.trim();
    var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=e947ccaee463cee018bbc246f7d89e64";

    fetch(locationURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
    })
    // var coordinatesURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latEl + "&lon=" + lonEl + "&appid=e947ccaee463cee018bbc246f7d89e64";
    //   fetch(coordinatesURL)
    //   .then(function(responseEl) {
    //     return responseEl.json();
    //   })
    //   .then(function(dataEl) {
    //     console.log(dataEl)
    //   })
    };


cityFormEl.addEventListener("submit", weatherSearch)

// fetch("http://api.openweathermap.org/geo/1.0/direct?q=minneapolis&limit=5&appid=e947ccaee463cee018bbc246f7d89e64")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });