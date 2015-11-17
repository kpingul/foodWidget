/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'RecentFeed', 'MainFeed', 'HighestRated', 'YelpService', 'dataService', '$http'];

			function MainCtrl($scope, RecentFeed, MainFeed, HighestRated, YelpService, dataService, $http){

	
				var vm = this;
				vm.images = RecentFeed;
				vm.feed = MainFeed;
				vm.highestRated = HighestRated;
				vm.highestRatedRestaurant = {};
				vm.mostLiked = {};
				dataService.getTotalMeals();

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
				

				$http
					.jsonp('https://api.instagram.com/v1/users/2078950030/media/recent?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=30')
					.then( function( response ) {
						var likers = {};
						var mostLiked = {
								username: response.data.data[0].likes.data[0].username,
								img: response.data.data[0].likes.data[0].profile_picture,
								liked: []
							}
						response.data.data.map(function( photo, index ) {

							photo.likes.data.forEach( function(liker, index) {
								if( !likers[liker.username] ) {
									likers[liker.username] = {username: liker.username ? liker.username : '', img: liker.profile_picture, liked: []};
								} 
								likers[liker.username].liked.push(true);
							});
						});

						for( var prop in likers ) {
							if (mostLiked['liked'].length < likers[prop]['liked'].length ) {
								mostLiked = likers[prop]
							}
						}
						console.log(likers);
						vm.mostLiked = mostLiked;
					
					});
				

			}


}());

