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

				templateUrl: 'src/js/app/MainFeed/MainFeed.tpl.html',

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
					],
					MostLiked: ['dataService',
						function(dataService) {

							return dataService
								.getPopularLiker()
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

		}
	])

}());