
(function(){

	'use strict';


	var app = angular.module('myApp', ['ui.router'])

		.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.when('', '/');

			$stateProvider

				.state('home', {

					url: '/',

					templateUrl: 'MainTemplate.tpl.html',

					controller: 'MainCtrl'
				})

				.state('photos', {

					url: '/photos/:id',

					templateUrl: 'PhotoTemplate.tpl.html',

					controller: 'PhotoCtrl'

				})

		}])


		.factory('dataService', ['$http', function($http){



			function getFeed(){

				var url = 'https://api.instagram.com/v1/users/self/feed?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK';
        
       			return $http.jsonp(url); //returns promise

			}

			

			return {

				getFeed: getFeed

			}


		}])

		.factory('mapService', function(){

			var lat =0;
			var lng = 0;
			var url = "";


			  function setMap(lat, lng, url){
			  	
					this.lat = lat;
					this.lng = lng;
					this.url = url;

						   
			  }


	
	  			function initialize() {

					 var myLatlng = new google.maps.LatLng(this.lat, this.lng);

			        var mapOptions = {

			          center: myLatlng,

			          zoom: 15
			        };

			        var map = new google.maps.Map(document.getElementById('map-canvas'),

			         mapOptions);


			
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

			  
			  }

						


		})


		.controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService){

				dataService.getFeed().then(function(data){
					console.log(data.data.data);
					$scope.images = data.data.data;
					$scope.photo = data.data.data[0].user.profile_picture;

					//invokes plugin to work in effect ** place in directive
					$('#da-thumbs > li').hoverdir();
				},function(error){
					console.log(error);
				});





		}])


		
		.controller('PhotoCtrl', ['$scope', '$stateParams', 'mapService', 'dataService', function($scope, $stateParams, mapService,dataService){


				dataService.getFeed().then( function(data){

					$scope.photo = data.data.data[$stateParams.id];
					mapService.setMap($scope.photo.location.latitude,$scope.photo.location.longitude, decodeURIComponent($scope.photo.images.thumbnail.url));

					mapService.getMap();

				}, function(error){
					console.log(error);
				});

		}])

		


}());

