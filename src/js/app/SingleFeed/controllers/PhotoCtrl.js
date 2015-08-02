/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

			.controller('PhotoCtrl', PhotoCtrl);

			PhotoCtrl.$inject = ['$scope', '$stateParams', 'mapService', 'dataService'];

			function PhotoCtrl($scope, $stateParams, mapService,dataService){ 


				var vm = this;

				vm.photo = {};
				
				dataService.getFeed().then( function(data){
				
					//maps through data object and finds if the current 
					//id matches the specific data being clicked from the 
					//photofeed

					data.data.data.map(function(item, index) {

						if(item.id == $stateParams.id){

							vm.photo = data.data.data[index];

							mapService.setMap(vm.photo.location.latitude,vm.photo.location.longitude, vm.photo.images.thumbnail.url, vm.photo.location.name);

						}

					});

			
				}, function(error){

					console.log(error);

				});



			}


}());