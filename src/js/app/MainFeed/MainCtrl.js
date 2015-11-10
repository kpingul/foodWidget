/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'RecentFeed', 'MainFeed', 'HighestRated'];

			function MainCtrl($scope, RecentFeed, MainFeed, HighestRated){
			
					var vm = this;
					vm.images = RecentFeed;
					vm.feed = MainFeed;
					vm.highestRated = HighestRated[1];
					console.log(vm.highestRated)
				
				
				

			}


}());