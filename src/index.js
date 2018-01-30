'use strict';

const buildMarker = require('./marker');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoibnJsYXVyZWFubyIsImEiOiJjamQxd3I4cnMxanJrMndvNGRjd3VmaTA1In0.wYY43rmW7JCnuTg_t0HBXA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);







// const markerDomElNY = document.createElement("div"); // Create a new, detached DIV
// markerDomElNY.style.width = "32px";
// markerDomElNY.style.height = "39px";
// markerDomElNY.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const markerDomElCHI = document.createElement("div"); // Create a new, detached DIV
// markerDomElCHI.style.width = "32px";
// markerDomElCHI.style.height = "39px";
// markerDomElCHI.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


// new mapboxgl.Marker(markerDomElNY).setLngLat([-74.009151, 40.705086]).addTo(map);

// new mapboxgl.Marker(markerDomElCHI).setLngLat([-87.6354, 41.8885]).addTo(map);
