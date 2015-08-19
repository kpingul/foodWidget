/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

		.controller('PhotoCtrl', PhotoCtrl);

		PhotoCtrl.$inject = ['$scope','mapService', 'SingleFeed'];

		function PhotoCtrl($scope, mapService, SingleFeed){ 


			var vm = this;

			vm.photo = SingleFeed;
			vm.latitude = SingleFeed.location.latitude;
			vm.longitide = SingleFeed.location.longitude;
			vm.imageUrl = SingleFeed.images.low_resolution.url;
			vm.locationName = SingleFeed.location.name;

			mapService.setMap(vm.latitude, vm.longitide, vm.imageUrl, vm.locationName);



		}


}());