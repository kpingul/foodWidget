/* Data Service */

(function(){

	'use strict';

		angular.module('myApp')


			.factory('dataService', ['$http', function($http){

				function getFeed(){
			
					var url = 'https://api.instagram.com/v1/users/self/feed?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=30';
	        		
	       			return $http.jsonp(url);
				}
				
				return {

					getFeed: getFeed

				};


			}])


}());