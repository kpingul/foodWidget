/* Activate Map Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('activateMap', ['mapService','$timeout', function(mapService, $timeout){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){
						elem.on('click', function(event){

							//delays request to service for 
							//better response time
							$timeout(function(){

						  		mapService.getMap();

							},1000)
						})

				
						
					}


				};


			}]);



}());
