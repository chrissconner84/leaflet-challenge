// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  
  // createFeatures(data.features);
  console.log(data)
  console.log(data.features)

  // var geojsonMarkerOptions = {
  //   radius: 8,
  //   fillColor: "#ff7800",
  //   color: "#000",
  //   weight: 1,
  //   opacity: 1,
  //   fillOpacity: 0.8
  // };
  // var earthquakes = L.geoJSON(data, {
  // L.geoJSON(data, {  
  //   onEachFeature(feature, layer) {
  //     layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
})  
  var mydata=L.geoJSON(data).addTo(map)   
    
  
      // pointToLayer: function (latlng) {
      //   return L.circleMarker(latlng, geojsonMarkerOptions);
      


  // Create the base layers.
  var main=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  
  
  // Create a baseMaps object.
  // var baseMaps = {
  //   "Street Map": main};

  // Create an overlay object to hold our overlay.
  // var overlayMaps = {
  //   Earthquakes: earthquakes
  // };

  // Create our map, giving it the main layer to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [main]
    
}).addTo(myMap);

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  //  L.control.layers(baseMaps, overlayMaps, {
  //    collapsed: false
  // }).addTo(myMap);




// /*Setup*/
// var map = L.map("mapid").setView([55.67, 12.57], 7);
// L.tileLayer(
//   "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
// ).addTo(map);

// /*Legend specific*/
// var legend = L.control({ position: "bottomleft" });

// legend.onAdd = function(map) {
//   var div = L.DomUtil.create("div", "legend");
//   div.innerHTML += "<h4>Tegnforklaring</h4>";
//   div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
//   div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
//   div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
//   div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
//   div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
//   div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  

//   return div;
// };

// legend.addTo(map);