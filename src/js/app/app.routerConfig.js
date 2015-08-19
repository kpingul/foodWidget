/* Routing Configurations */

(function(){

	'use strict';

	angular.module('myApp')

	.config(['$urlRouterProvider', '$stateProvider','usSpinnerConfigProvider', function($urlRouterProvider, $stateProvider, usSpinnerConfigProvider) {
 			
 			//Settings for Spinner.js 
 		   usSpinnerConfigProvider.setDefaults({color: '#fff', position: 'relative', top: '130px', right: '90px'});

			$urlRouterProvider.when('', '/');

			$stateProvider

				.state('home', {

					url: '/',

					templateUrl: 'src/js/app/MainFeed/photofeed.tpl.html',

					controller: 'MainCtrl',

					controllerAs: 'vm',

					resolve : {

						MainFeed: ['dataService', function(dataService){

							//$HTTP returns promise
							
							return dataService.getFeed().then(function(data){

								return data.data.data;

							},function(error){

								return error;

							});


						}]
					}
				})

				.state('photos', {

					url: '/photos/:id',

					templateUrl: 'src/js/app/SingleFeed/singlefeedphoto.tpl.html',

					controller: 'PhotoCtrl',

					controllerAs: 'vm',

					resolve : {

						SingleFeed: ['dataService', '$stateParams', '$state', function(dataService, $stateParams, $state) {
								
							var singleFeedItem;

							//$HTTP returns promise

							return dataService.getFeed().then(function(data){
								
								//Mapping out the value passed in the state params 
								//and used to check for correct item in array
								data.data.data.map(function(item, index){

									if(item.id === $stateParams.id) {

										singleFeedItem =  item;
									}
								});

								return singleFeedItem;
							
							}, function(error){

								return error;
							});			
						}]

					}

				})

		}])

}());


