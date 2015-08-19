/* Map Service Test */

describe('Map Service Test', function() {

	var mapService,
		$httpBackend;


		beforeEach(function() {
			module('myApp');

			inject(function(_mapService_){

				mapService 	= _mapService_;

			});
		});

		it('should have data service defined', function() {
			expect(mapService).toBeDefined();

		});

		it('should have a set map function', function() {
			expect(mapService.setMap).toBeDefined();
		});

		it('should have a set map function', function() {
			expect(mapService.getMap).toBeDefined();
		});
		it('should behave...', function() {
			expect(mapService).toContain(lat)
		});
});