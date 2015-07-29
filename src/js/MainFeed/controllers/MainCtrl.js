/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'dataService'];

			function MainCtrl($scope, dataService){
					
					var vm = this;

					dataService.getUserFeed(1015738).then( function(data){
			
					}, function(error){
						console.log(error);
					});

					dataService.getFeed().then(function(data){



						//all photos from feed
						vm.images = data.data.data;
						console.log(vm.images)
						//user profile picture
						vm.photo = data.data.data[0].user.profile_picture;

						//username 
						vm.userId = data.data.data[0].user.username;

						//invokes plugin to work in effect 
						// ****bad practice to manipulate dom in controller
			

					},function(error){

						console.log(error);

					});

				

			}





}());