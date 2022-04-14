
//Create base map
var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)

// Store our API endpoint as link
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(link).then(function (data) {
    L.geoJSON(data,{
       pointToLayer: function (feature, latlng) {
          
               
           var color = "";
         if (feature.geometry.coordinates[2] < 5) {
           color = "blue";
           cblue=cblue++
         }
         else if (feature.geometry.coordinates[2] <10) {
           color = "green";
           cblue=cgreen++
         }
         else if (feature.geometry.coordinates[2]  < 20) {
           color = "yellow";
           cblue=cyellow++
         }
         else if (feature.geometry.coordinates[2]  < 30) {
            color = "orange";
            cblue=corange++
          }
         else {
           color = "red";
           cblue=cred++}
           var geojsonMarkerOptions = {
            radius: feature.properties.mag*10,
            fillColor: color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8} 
                      
           return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: onEachFeature,       
    }) .addTo(myMap);
    console.log(data.features)
    var cblue=0
    var cgreen=0
    var cyellow=0
    var corange=0
    var cred=0

            
        
         

});      
    
 

function onEachFeature(feature, layer) {
    // 
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>
    <hr><p>Magnatude was ${feature.properties.mag}</p><hr><p>Depth was ${feature.geometry.coordinates[2]}</p>`);
}

// /*Legend specific*/
 var legend = L.control({ position: "bottomright" });
 legend.onAdd = function(map) {
       var div = L.DomUtil.create("div", "legend");
       div.innerHTML += "<h4>Earthquake Depth</h4>";
          div.innerHTML += '<i style="background: red"></i><span>Depth > 30 miles</span><br>';
          div.innerHTML += '<i style="background: orange"></i><span>Depth < 30 and > 20 miles</span><br>';
          div.innerHTML += '<i style="background: yellow"></i><span>Depth < 20 and > 10 miles</span><br>';
          div.innerHTML += '<i style="background: green"></i><span>Depth < 10 and > 5 miles</span><br>';
          div.innerHTML += '<i style="background: blue"></i><span>Depth < 5 miles</span><br>';
          

    return div;
 };
legend.addTo(myMap);