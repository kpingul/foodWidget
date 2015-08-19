/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'MainFeed'];

			function MainCtrl($scope, MainFeed){
			
					var vm = this;

					vm.images = MainFeed;
					console.log(vm.images)

			}


}());