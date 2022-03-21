let map = L.map('mapid').setView([34.0522, -118.2437], 4);
// An array containing each city's location, state, and population.
// Get data from cities.js
let cityData = cities;
  // Loop through the cities array and create one marker for each city.
  // Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{
        radius:city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
    // L.circleMarker([34.0522, -118.2437], {
    //     radius: 100,
    //     color:'black',
    //     fillColor:'#ffffa1'
    //  }).addTo(map);

// var marker  = L.marker([34.0522, -118.2437]).addTo(map);
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// var marker=L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
streets.addTo(map);