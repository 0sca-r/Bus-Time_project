//  <!-- GOOGLE MAPS API-->

      var freyberg = {lat:-40.337840, lng:175.627999}
      var square = {lat:-40, lng:175}
      var bus_hub = {lat:-40.355424, lng:175.612901}
      
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: freyberg,
          zoom: 16
        });
          
//          this is how we're going to add shapes and stuff to the map.
        var flightPlanCoordinates = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ];
      var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

  flightPath.setMap(map);
      }
