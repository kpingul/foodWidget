/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'dataService'];

			function MainCtrl($scope, dataService){
					
					var vm = this;

	
					dataService.getFeed().then(function(data){



						//all photos from feed
						vm.images = data.data.data;

						//user profile picture
						vm.photo = data.data.data[0].user.profile_picture;

						//username 
						vm.userId = data.data.data[0].user.username;
			

					},function(error){

						console.log(error);

					});

				

			}





}());