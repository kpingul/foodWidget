/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')


			.controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService){

					dataService.getFeed().then(function(data){

						console.log(data.data.data);

						//all photos from feed
						$scope.images = data.data.data;

						//user profile picture
						$scope.photo = data.data.data[0].user.profile_picture;

						//username 
						$scope.userId = data.data.data[0].user.username;

						//invokes plugin to work in effect 
						// ****bad practice to manipulate dom in controller
						$('#da-thumbs > li').hoverdir();

					},function(error){

						console.log(error);

					});

			}]);




}());