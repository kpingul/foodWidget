/* Data Service Test */

describe('Data Service Test', function() {

	var DataService,
		$httpBackend;


		beforeEach(function() {
			module('myApp');

			inject(function(_dataService_, _$httpBackend_){

				DataService 	= _dataService_;
				$httpBackend 	= _$httpBackend_;

			});
		});

		it('should have data service defined', function() {
			expect(DataService).toBeDefined();

		});

		it('should send a request to the instagram server', function() {
			$httpBackend.expectJSONP('https://api.instagram.com/v1/users/self/feed?access_token=2078950030.1f5c74e.fa614065af4e484d92b96e91332850b0&callback=JSON_CALLBACK&count=30').respond(200);
			DataService.getFeed();
			$httpBackend.flush();
		});



});