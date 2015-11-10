/* Data Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('dataService', ['$http', function($http){

				var service = {

					getFeed: getFeed,

					getRecentFeed: getRecentFeed

				}
				var url = 'https://api.instagram.com/v1/users/2078950030/media/recent?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=30';
				
				function getFeed() {
					//$HTTP returns promise
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
				function handleFeedData(data) {
					var feed = [];
					data.data.data.map(function(val, index) {
						feed.push(val);
					});
					return feed;
				}

				function handleRecentFeedData(data) {
					var feed = [];
					data.data.data.map(function(val, index) {
						if( feed.length >= 3 ) {

						} else {
							feed.push(val);
						}
					});
					console.log(feed);
					return feed;
				}
				function handleError(error) {
					return error;
				}


				return service;


			}])


}());