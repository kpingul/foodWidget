/* Google Map Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('mapService', function(){

				var lat 	= 0,
					lng 	= 0,
					url 	= "",
					tags 	= []

			  	function setMap(lat, lng, url, location){
			  	
					this.lat = lat;
					this.lng = lng;
					this.url =  decodeURI(url);
					this.location = location;
			


			 	}

		
	  			function initialize() {

					var myLatlng = new google.maps.LatLng(this.lat, this.lng);

			        var mapOptions = {

			          center: myLatlng,

			          zoom: 14
			        };

			        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


			
					var icon = {
					    url:  this.url, // url
					    scaledSize: new google.maps.Size(60, 60), // scaled size
					    origin: new google.maps.Point(0,0), // origin
					    anchor: new google.maps.Point(0, 0) // anchor
					};

		

				    var marker = new google.maps.Marker({
				       position: myLatlng,
				       map: map,
				       animation: google.maps.Animation.DROP,
					   icon: icon

					});

					var infowindow = new google.maps.InfoWindow({
					  content: this.location
					  });

					infowindow.open(map,marker);


					 google.maps.event.addListener(marker, 'click', toggleBounce);
					 
				}

				function toggleBounce() {

					  if (marker.getAnimation() != null) {

					    marker.setAnimation(null);

					  } else {


					    marker.setAnimation(google.maps.Animation.BOUNCE);

					  }

				}

			  return {

			  	setMap: setMap,

			  	getMap: initialize

					  
			   };

		  });


}());