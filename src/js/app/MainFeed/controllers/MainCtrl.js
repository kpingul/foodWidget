/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'dataService', '$state'];

			function MainCtrl($scope, dataService, $state){
					
					var vm = this;

					vm.images = [];
					vm.photo = {};
					vm.userId = {};

					dataService.getFeed().then(function(data){



						//all photos from feed
						vm.images = data.data.data;
						console.log(data.data.data);
						//user profile picture
						vm.photo = data.data.data[0].user.profile_picture;

						//username 
						vm.userId = data.data.data[0].user.username;
			

					},function(error){

						console.log(error);

					});

				

			}





}());