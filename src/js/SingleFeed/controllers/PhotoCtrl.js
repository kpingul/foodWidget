/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

			.controller('PhotoCtrl', PhotoCtrl);

			PhotoCtrl.$inject = ['$scope', '$stateParams', 'mapService', 'dataService', '$timeout'];

			function PhotoCtrl($scope, $stateParams, mapService,dataService, $timeout){ 

	
				var vm = this;
	
				dataService.getFeed().then( function(data){

					vm.photo = data.data.data[$stateParams.id];

					//cache values for better readability
					mapService.setMap(vm.photo.location.latitude,vm.photo.location.longitude, vm.photo.images.thumbnail.url, vm.photo.location.name);

					//gets map and initializes it to be viewed 
					$timeout(function(){
						//delay to fully load map
						mapService.getMap();

					}, 1000);

				}, function(error){

					console.log(error);

				});


					


			}


}());