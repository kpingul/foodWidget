/* Single Feed photo controller */

(function() {

	'use strict';

		angular.module('myApp')

			.controller('PhotoCtrl', PhotoCtrl);

			PhotoCtrl.$inject = ['$scope', '$stateParams', 'mapService', 'dataService', '$timeout'];

			function PhotoCtrl($scope, $stateParams, mapService,dataService, $timeout){ 

	
				var vm = this;
	
				dataService.getFeed().then( function(data){


					//** Abstract away for less clutter in controller
				
					//iterates through data object and finds if the current 
					//id matches the specific data being clicked from the 
					//photofeed
					for(var i = 0; i < data.data.data.length; i++){
						
						//if photo with id matches photo id passed from
						//photofeed, vm.photo will be assigned the 
						//current photo and set the map location of the photo
						if(data.data.data[i].id == $stateParams.id){
							vm.photo = data.data.data[i];

							mapService.setMap(vm.photo.location.latitude,vm.photo.location.longitude, vm.photo.images.thumbnail.url, vm.photo.location.name);

						}

			
					}

				}, function(error){

					console.log(error);

				});



			}


}());