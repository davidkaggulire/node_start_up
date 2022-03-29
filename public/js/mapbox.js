console.log('hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGthZ2d1bGlyZSIsImEiOiJjbDE2ZzduNzkxYThmM2pzMGF2ZHl4eGZ6In0.8eX_RNvZaWU_kSpN_NCe0Q';

// Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('YOUR_TOKEN');


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
