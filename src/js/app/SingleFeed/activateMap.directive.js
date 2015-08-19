/* Activate Map Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('activateMap', ['mapService','$timeout', 'usSpinnerService',function(mapService, $timeout, usSpinnerService){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){
						elem.on('click', function(event){
							
							 usSpinnerService.spin('maploadingSpinner');
							//delays request to service for 
							//better response time
							$timeout(function(){

						  		mapService.getMap();
								usSpinnerService.stop('maploadingSpinner');

							},1000)
						})

				
						
					}


				};


			}]);



}());
