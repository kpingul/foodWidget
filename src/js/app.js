
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

				.state('user', {

					url: '/:img/:userimg/:location/:lng/:lat',

					templateUrl: 'PhotoTemplate.tpl.html',

					controller: 'PhotoCtrl'



				});

		}])

		.factory('dataService', ['$http', function($http){

			var data = {};

			data.getFeed = function(){

				var url = 'https://api.instagram.com/v1/users/self/feed?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK';
        
       			return $http.jsonp(url);


			}

			

			return data;


		}])


		.controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService){

				dataService.getFeed().then(function(data){
					console.log(data.data.data);
					$scope.images = data.data.data;
				},function(error){
					console.log(error);
				});


		}])


		
		.controller('PhotoCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
				$scope.image = decodeURIComponent($stateParams.img);
				$scope.userImg = decodeURIComponent($stateParams.userimg);
				
		}])

		


}());


  // function initialize(lat, long) {

	 // var myLatlng = new google.maps.LatLng(lat, long);
  //       var mapOptions = {

  //         center: { lat: lat, lng: long},

  //         zoom: 17
  //       };

  //       var map = new google.maps.Map(document.getElementById('map-canvas'),

  //        mapOptions);

	 //    var marker = new google.maps.Marker({
	 //      position: myLatlng,
	 //      map: map,
	 //  });
        
  // }

		// 	google.maps.event.addDomListener(window, 'load', initialize(lat, lng));