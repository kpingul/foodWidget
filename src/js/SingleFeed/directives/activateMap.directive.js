/* Activate Map Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('activateMap', ['mapService','$timeout', function(mapService, $timeout){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){
						elem.on('click', function(event){

							$timeout(function(){
						  		mapService.getMap();

							},1000)
						})

						$('#maptab').click(function (e) {
		
						  e.preventDefault()
						  $(this).tab('show');

						});
					}


				};


			}]);



}());
