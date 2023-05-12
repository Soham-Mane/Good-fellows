console.log("hi Soham");
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZ3VuMiIsImEiOiJja21ydjVxankwYnMyMm5wOTV2cmlubDRnIn0.GeOLbgjRunuzVgPu9KRUXw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [72.8777,19.0760]
});

var marker = new mapboxgl.Marker()
.setLngLat([72.821014404,19.044458389])
.addTo(map);