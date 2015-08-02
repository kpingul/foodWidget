/* Activate Map Test */

describe('Activate Map Test', function() {
	
	var $rootScope,
		$compile,
		$scope,
		$timeout,
		MapService,
		element,
		html = '<a href="#mapview" activate-map aria-controls="home" role="tab" data-toggle="tab">Map View</a>',
		body = $('body');

		beforeEach(function() {
			module('myApp');

			inject(function(_$rootScope_,_$timeout_,_mapService_, _$compile_){
				$rootScope 	= _$rootScope_;
				$scope 		= _$rootScope_.$new();
				$compile 	= _$compile_;
				MapService 	= _mapService_;
				$timeout 	= _$timeout_;
				element 	= $compile(angular.element(html))($scope);

			});
			body.append(element);
			$rootScope.$digest();
		});

		it('should activate map', function() {
			element.click();

			$scope.$digest();

		});


});