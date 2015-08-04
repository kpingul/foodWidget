/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'dataService', '$state', 'MainFeed'];

			function MainCtrl($scope, dataService, $state, MainFeed){
			
					var vm = this;

					vm.images = MainFeed.data.data;
				

			

			}


}());