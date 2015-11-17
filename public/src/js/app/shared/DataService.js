/* Data Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('dataService', ['$http', function($http){

				var service = {

					getFeed: getFeed,

					getRecentFeed: getRecentFeed,

					getHighestRated: getHighestRated,

					getTotalMeals: getTotalMeals

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
						.then(handleFeedData)
						.catch(handleError);

					
				}
		
				function getRecentFeed(){
					
					//$HTTP returns promise
	       			return $http
	       				.jsonp(url)
						.then(handleRecentFeedData)
						.catch(handleError);

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


				function getTotalMeals() {

					$http
						.jsonp('https://api.instagram.com/v1/users/2078950030/media/recent?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=50')
						.then(function(response) {
							var	monthVal 	= ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
							var months = {
								January: 0,
								Febuary: 0,
								March: 0,
								April: 0,
								May: 0,
								June: 0,
								July: 0,
								August: 0,
								September: 0,
								October: 0,
								November: 0,
								December: 0

							}
							var dates = [];
							var stamps = {};
							var finalMonths = [];
							var finalData = [];
							response.data.data.map(function(val, index) {
								if( val.created_time ) {
									var time = new Date(parseInt(val.created_time * 1000)),
									month 	= (time.getMonth() + 1),
									day 	= (time.getDate()),
									year 	= (time.getFullYear());


									dates.push(monthVal[month - 1]);
								}
							});
							

							dates.map(function(month, index) {
								if(!stamps[month]){
									stamps[month] = [];
								}
								stamps[month].push(true);
							});

							for( var property in stamps ) {
								
								finalMonths.push(property);
								finalData.push(stamps[property].length);

							}


							var data = {
							    labels: finalMonths.reverse(),
							    datasets: [
							        {
							            label: "My First dataset",
							            fillColor: "rgba(255,164,45, 0.8)",
							            strokeColor: "rgba(255,164,45, 0.3))",
							            highlightFill: "rgba(255,164,45, 0.3)",
							            highlightStroke: "rgba(255,164,45, 0.5)",
							            data: finalData.reverse()
							        }
							    ]
							};
							var ctx = document.getElementById("myChart").getContext("2d");
							var myBarChart = new Chart(ctx).Bar(data, {
								responsive: true
							});
						});
	
				}

				return service;


			}])


}());