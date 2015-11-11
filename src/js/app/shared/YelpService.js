/* YelpService  */

(function(){

	'use strict';

		angular.module('myApp')

			.factory('YelpService', ['$http', function($http){

				var service = {

					getHighestRated: getHighestRated

				}	
				service.name  = "";

				function getHighestRated(lat, lng, name) {
					service.name = name;
					console.log(name);
					return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDlRrrjWcF9m_xqqDyPeVbEf8f2tFuUDjk')
						.then(handleLocation)
						.then(handleYelpBusiness)
						.catch(handleError);
				}
	
				function handleLocation(data) {
					var cityName = "";
					data.data.results.map(function(data,index) {
						if( data.address_components ) {
							data.address_components.map(function(address, index1) {
								if( address.types.length ) {
									address.types.forEach(function(type, index2) {
										if( type.toLowerCase() == "locality" ) {
											cityName = address.long_name;
											return;
										}
									});
								}	

							});
						}
					});

					return cityName;
				}

				function handleYelpBusiness(data) {
					return $http
						.get('api/yelp/business/' + service.name.split(" ").join("-") + '-' + data.split(" ").join("-"))
						.then(handleYelpBusinessData)	
						.catch(handleError);
				}

				function handleYelpBusinessData(data) {

					return data.data;
				}

				function handleError(error) {
					return error;
				}

				return service;

			}])


}());