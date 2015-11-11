/* Activate Map Test */

describe('Activate Map Test', function() {
	
	var $rootScope,
		$compile,
		$scope,
		$timeout,
		mockMapService,
		element,
		html = '<a href="#mapview" activate-map aria-controls="home" role="tab" data-toggle="tab">Map View</a>',
		body = $('body');

		beforeEach(function() {
			module('myApp');

			inject(function(_$rootScope_,_$timeout_, _$compile_){
	
				$scope 		= _$rootScope_.$new();
				$compile 	= _$compile_;
				$timeout 	= _$timeout_;
				element 	= $compile(angular.element(html))($scope);

			});

			mockMapService = {
				getMap: function(){}
			}
			
			body.append(element);
			$scope 	.$digest();
		});
		it('should have map service defined', function() {
			expect(mockMapService).toBeDefined();
		});

		it('should activate map', function() {
			spyOn(mockMapService, 'getMap');
			element.triggerHandler('click');
			mockMapService.getMap();
			expect(mockMapService.getMap).toHaveBeenCalled();

		});


});