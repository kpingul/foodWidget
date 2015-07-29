/* Activate Map Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('activateMap', function(){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){

						$('#maptab').click(function (e) {
		
						  e.preventDefault()
						  $(this).tab('show')
						});
					}


				};


			});



}());
