//Java code.
function initialize(){
  var latlng =new google.maps.LatLng(14.64072,-90.51327);
  var myOptions = {
    zoom:50,
    center: latlng,
    mapTypeId : google.maps.mapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
  var image ='../images/localization.png';
  var myLatLng = new google.maps.LatLng(14.5973001,-90.52634119999999);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map:map,
    icon:image,
    animation:google.maps.Animation.BOUNCE,
    title:"hola que hace!!..."
  });
}







/*
var map;

function initialize() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: -33.8666, lng: 151.1958},
    zoom: 15
  });

  // Search for Google's office in Australia.
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'bar'
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

google.maps.event.addDomListener(window, 'load', initialize);*/