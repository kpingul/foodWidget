/* Caption Filter */

(function(){

	'use strict';

		angular.module('myApp')

			.filter('captionfilter', function(){

				return function(value){

					if(value !== undefined){

						var arr = value.split(" ").filter( function(item, index){

						    return item[0] !== '#';
						});
			
		
						return arr.join(" ");
					}
					
				};

			});


}());