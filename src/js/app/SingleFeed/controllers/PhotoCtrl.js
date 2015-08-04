/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

		.controller('PhotoCtrl', PhotoCtrl);

		PhotoCtrl.$inject = ['$scope', 'mapService','SingleFeed'];

		function PhotoCtrl($scope, mapService,SingleFeed){ 


			var vm = this;

			vm.photo = SingleFeed;

			mapService.setMap(vm.photo.location.latitude, vm.photo.location.longitude, vm.photo.images.low_resolution.url, vm.photo.location.name);



		}


}());