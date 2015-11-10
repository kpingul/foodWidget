/* Hover Effect Directive */

(function(){

	'use strict';

		angular.module('myApp')

			.directive('scroll', ['$window', function($window){

				return {

					restrict: 'A',

					link: function(scope, elem, attrs){
						var navbar = $('.navbar'),
							navDropdown = $('.dropdown-menu');
							
						if($($window).width() > 768 ) {
							$($window).scroll(function(){
								if($($window).scrollTop() <= 25){
									navbar.removeClass('navbar-scroll')
							
								} else {
									navbar.addClass('navbar-scroll');
							
								}
							});
							
						} else {
							navbar.addClass('navbar-scroll');
							
						}

					}


				};


			}]);



}());
