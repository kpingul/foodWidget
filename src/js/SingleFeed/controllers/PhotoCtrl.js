/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

			.controller('PhotoCtrl', ['$scope', '$stateParams', 'mapService', 'dataService', '$timeout', function($scope, $stateParams, mapService,dataService, $timeout){


				dataService.getFeed().then( function(data){

					$scope.photo = data.data.data[$stateParams.id];

					//cache values for better readability
					mapService.setMap($scope.photo.location.latitude,$scope.photo.location.longitude, $scope.photo.images.thumbnail.url, $scope.photo.location.name);

					//gets map and initializes it to be viewed 
					$timeout(function(){
						//delay to fully load map
						mapService.getMap();

					}, 1000);

				}, function(error){

					console.log(error);

				});

		}]);


}());