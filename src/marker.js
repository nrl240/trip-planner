'use strict';

const mapbox = require('mapbox-gl');

const iconURLs = {
    hotels: 'http://i.imgur.com/D9574Cu.png',
    restaurants: 'http://i.imgur.com/cqR6pUI.png',
    activities: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = (type, coords) => {
  console.log('in buildMarker func');
  // Create marker
  const markerEl = document.createElement("div");
  markerEl.style.width = "32px";
  markerEl.style.height = "39px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  // Add marker to map
  const marker = new mapbox.Marker(markerEl).setLngLat(coords);
  return marker;
};

module.exports = buildMarker;
