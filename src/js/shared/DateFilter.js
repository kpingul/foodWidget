/* Filter out Unix timestamp */

(function(){

	'use strict';

		angular.module('myApp')

			.filter('timefilter', function(){

				return function(value){
					
					var	months 	= ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December]'],
					 	time 	= new Date(parseInt(value * 1000)),
						month 	= (time.getMonth() + 1),
						day 	= (time.getDate()),
						year 	= (time.getFullYear());

					

					return months[month - 1] + ' ' + day + ' ' + year;

				};


			});


}());