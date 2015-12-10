/* Data Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('dataService', ['$http', function($http){

				var service = {

					getFeed: getFeed,

					getRecentFeed: getRecentFeed,

					getHighestRated: getHighestRated,

					getTotalMeals: getTotalMeals,

					getPopularLiker: getPopularLiker

				}
				var url = 'https://api.instagram.com/v1/users/2078950030/media/recent?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=50';
				
				function getHighestRated() {
	       			return $http
	       				.jsonp(url)
						.then(handleHighestRated)
						.catch(handleError);
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

				function getTotalMeals() {

					$http
						.jsonp(url)
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
							            fillColor: "rgba(52,73,91,.9)",
							            strokeColor: "rgba(52,73,91,.3)",
							            highlightFill: "rgba(52,73,91,.3)",
							            highlightStroke: "rgba(52,73,91,.3)",
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

				function getPopularLiker() {

					return $http
						.jsonp(url)
						.then(function(response) {
							var likers = {};
							var mostLiked = {
								username: response.data.data[0].likes.data[0].username,
								img: response.data.data[0].likes.data[0].profile_picture,
								liked: [],
								images: []
							}
							response.data.data.map(function(photo, index) {


								photo.likes.data.forEach(function(liker, index) {
									if (!likers[liker.username]) {
										likers[liker.username] = {
											username: liker.username ? liker.username : '',
											img: liker.profile_picture,
											liked: [],
											images: []
										};
									}
									likers[liker.username].liked.push(true);
								});
							});

							for (var prop in likers) {
								if (mostLiked['liked'].length < likers[prop]['liked'].length) {
									mostLiked = likers[prop]
								}
							}



							response.data.data.map(function(photos, index) {
								photos.likes.data.forEach(function(user, index) {
									if (mostLiked.username === user.username) {
										mostLiked.images.push(photos.images.low_resolution.url)
									}
								});
							});

							return mostLiked;

						});

				}

				/* Utility Functions */	

				function handleHighestRated(data) {
					var mostLikedPhoto = _.max( data.data.data, function(photo){ return photo.likes.count; });
					return mostLikedPhoto;
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





				return service;


			}])


}());