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
					var highestRated = [];
					data.data.data.map(function(val, index) {

						if( val.likes.count > 7 ) {
							highestRated.push(val)
						}
					});
					return highestRated;
				}


				function handleFeedData(data) {
					var feed = [];
					data.data.data.map(function(val, index) {
						feed.push(val);
					});
					console.log(feed);
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


				return service;


			}])


}());