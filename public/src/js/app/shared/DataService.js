/* Data Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('dataService', ['$http', function($http){

				var service = {

					getFeed: getFeed,

					getRecentFeed: getRecentFeed,

					getHighestRated: getHighestRated

				}
				var url = 'https://api.instagram.com/v1/users/2078950030/media/recent?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=100';
				
				function getHighestRated() {
	       			return $http
	       				.jsonp(url)
						.then(handleHighestRated)
						.catch(handleError);

					function handleHighestRated(data) {
						return handleHighestRatedData(data);
					}

				}


				function getFeed() {
	       			return $http
	       				.jsonp(url)
						.then(handleFeed)
						.catch(handleError);

					function handleFeed(data) {
						return handleFeedData(data);
					}

					
				}
		
				function getRecentFeed(){
					
					//$HTTP returns promise
	       			return $http
	       				.jsonp(url)
						.then(handleRecentFeed)
						.catch(handleError);

					function handleRecentFeed(data) {
						return handleRecentFeedData(data);

					}

				}

				/* Utility Functions */	

				function handleHighestRatedData(data) {
					

					return sortHighest(data);
				}


				function handleFeedData(data) {
					var feed = [];
					data.data.data.map(function(val, index) {
						feed.push(val);
					});
					return feed;
				}

				function handleRecentFeedData(data) {
					var recentFeed = [];
					data.data.data.map(function(val, index) {
						if( recentFeed.length >= 3 ) {

						} else {
							recentFeed.push(val);
						}
					});

					return recentFeed;
				}

				/* Handle Errors */

				function handleError(error) {
					return error;
				}

				/* Utility Methods */

				function sortHighest(data) {
					var highest = data.data.data;
				
					for( var i = 0; i < highest.length; i++ ) {
						for( var j = i + 1; j < highest.length; j++ ) {
							if( highest[j].likes.count > highest[i].likes.count ) {
								var temp = highest[j];
								highest[j] = highest[i];
								highest[i] =temp;

							}
						}
					}
					return highest[0];

				}

				return service;


			}])


}());