function myMap() {
  var myCenter = new google.maps.LatLng(49.674840,20.055930);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "Słoneczko Jak u Mamy!"
  });
  infowindow.open(map,marker);
}

src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8LQPqDI8Xzg64ABVmSlTaVrjuOotSZ58&callback=myMap";