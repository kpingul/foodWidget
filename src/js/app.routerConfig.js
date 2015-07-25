/* Routing Configurations */

(function(){

	'use strict';

		angular.module('myApp')

			.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

					$urlRouterProvider.when('', '/');

					$stateProvider

						.state('home', {

							url: '/',

							templateUrl: 'src/js/MainFeed/templates/photofeed.tpl.html',

							controller: 'MainCtrl',

							controllerAs: 'vm'
						})

						.state('photos', {

							url: '/photos/:id',

							templateUrl: 'src/js/SingleFeed/templates/singlefeedphoto.tpl.html',

							controller: 'PhotoCtrl',

							controllerAs: 'vm'

						})

				}])

}());


