/* Photo Controller Test */

describe('Photo Controller Test', function() {
	
	var $scope,
		$controller,
		PhotoCtrl,
		MapService,
		DataService;


	beforeEach(function() {
		module('myApp');

		inject(function(_$rootScope_,_$controller_,_mapService_, _dataService_, _$stateParams_){

			$scope  	= _$rootScope_.$new();
			$controller = _$controller_;
			MapService  = _mapService_;
			DataService = _dataService_;
			$stateParams = _$stateParams_;
		
		});

		PhotoCtrl = $controller('PhotoCtrl as vm', {$scope: $scope});

	});
	it('should controller', function() {
		expect(PhotoCtrl).toBeDefined();
	});

	it('should have map service', function() {
		expect(MapService).toBeDefined();
	});
	it('should have data service', function() {
		expect(DataService).toBeDefined();
	});


	it('should contain empty photo object', function() {
		expect($scope.vm.photo).toEqual({});
	});

	it('should use data service to send request for photo', function() {
		DataService.getFeed();
		expect($stateParams.id).toBeDefined();
		expect($scope.vm.photo).toBeDefined();
		MapService.setMap();
	});



});