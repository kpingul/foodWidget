/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'RecentFeed', 'MainFeed', 'HighestRated', 'YelpService'];

			function MainCtrl($scope, RecentFeed, MainFeed, HighestRated, YelpService){
			
				var vm = this;
				vm.images = RecentFeed;
				vm.feed = MainFeed;
				vm.highestRated = HighestRated;
				vm.highestRatedRestaurant = {};
				
				getYelp(vm.highestRated.location.latitude, vm.highestRated.location.longitude, vm.highestRated.location.name);

				function getYelp(lat, lng, name) {
					YelpService
						.getHighestRated(lat, lng, name)
						.then(handleYelpData)
						.catch(handleError);
					
				}

				function handleYelpData(data) {

					vm.highestRatedRestaurant = data;
	
				}

				function handleError(error) {
					console.log(error);
				}
	
				

			}


}());