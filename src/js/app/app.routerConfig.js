/* Routing Configurations */

(function() {

	'use strict';

	angular.module('myApp')

	.config(['$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.when('', '/');

			$stateProvider

			.state('home', {

				url: '/',

				templateUrl: 'src/js/app/MainFeed/photofeed.tpl.html',

				controller: 'MainCtrl',

				controllerAs: 'vm',

				resolve: {

					HighestRated: ['dataService', 
						function(dataService) {
							return dataService
								.getHighestRated()
								.then(function(response) {
									return response;
								})
								.catch(handleError);

							function handleError(error) {
								return error;
							}

						}
					],

					MainFeed: ['dataService',
						function(dataService) {

							return dataService
								.getFeed()
								.then(handleData)
								.catch(handleError);

							function handleData(data) {
								return data;
							}

							function handleError(error) {
								return error;
							}

						}
					],

					RecentFeed: ['dataService',
						function(dataService) {

							return dataService
								.getRecentFeed()
								.then(handleData)
								.catch(handleError);

							function handleData(data) {
								return data;
							}

							function handleError(error) {
								return error;
							}


						}
					]
				}
			})

			.state('photos', {

				url: '/photos/:id',

				templateUrl: 'src/js/app/SingleFeed/singlefeedphoto.tpl.html',

				controller: 'PhotoCtrl',

				controllerAs: 'vm',

				resolve: {

					SingleFeed: ['dataService', '$stateParams', '$state',
						function(dataService, $stateParams, $state) {

							var singleFeedItem;

							//$HTTP returns promise

							return dataService.getFeed().then(function(data) {

								//Mapping out the value passed in the state params 
								//and used to check for correct item in array
								data.data.data.map(function(item, index) {

									if (item.id === $stateParams.id) {

										singleFeedItem = item;
									}
								});

								return singleFeedItem;

							}, function(error) {

								return error;
							});
						}
					]

				}

			})

		}
	])

}());