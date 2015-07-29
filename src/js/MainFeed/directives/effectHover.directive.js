/* Hover Effect Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('effectHover', function(){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){

						$('.effectHover').hoverdir();

					}


				};


			});



}());
