//Java code.

var map;
function initialize() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 14.64072, lng: -90.51327},
    zoom: 15
  });

  // Search for Google's office in Australia.
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'store'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);











/*function initialize(){
  var latlng =new google.maps.LatLng(-12.110306, -77.014074);
  var myOptions = {
    zoom:50,
    center: latlng,
    mapTypeId : google.maps.mapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);

  var image ='http://www.xn--romaa-rta.pe/pelota.gif';
  var myLatLng = new google.maps.LatLng(-12.109983, -77.014847);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    animation: google.maps.Animation.BOUNCE,
    title:"hola que hace!!..."
  });
}*/
