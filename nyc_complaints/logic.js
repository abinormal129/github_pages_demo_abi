// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// City markers

// Add code to create a marker for each of the following cities and to add it to the map.

// newyork;
// chicago;
// houston;
// la;
// omaha;

L.marker([40.712, -74.006]).bindPopup("New York City").addTo(myMap);
L.marker([34.0522, -118.2437]).bindPopup("Los Angeles").addTo(myMap);
L.marker([41.8781, -87.6298]).bindPopup("Chicago").addTo(myMap);
L.marker([29.7604, -95.3698]).bindPopup("Houston").addTo(myMap);
L.marker([41.25, -95.93]).bindPopup("Omaha").addTo(myMap);
