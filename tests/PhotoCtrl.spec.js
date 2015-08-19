/* Photo Controller Test */

describe('Photo Controller Test', function() {
	
	var $scope,
		$controller,
		PhotoCtrl,
		mockInstagramData;

	beforeEach(function() {
		module('myApp');

		mockInstagramData = {

			location: {
				latitude: '20',
				longitude: '100',
				name: 'Random Area'
			},
			images: {
				low_resolution: {
					url: 'RandomUrl'
				}
			}

		}
		var mockService = {
			setMap: function(){

			}
		};

		inject(function(_$rootScope_,_$controller_){

			$scope  	= _$rootScope_.$new();
			$controller = _$controller_;


		
		});


		PhotoCtrl = $controller('PhotoCtrl as vm', {

			$scope: $scope,
			SingleFeed: mockInstagramData,
			mapService: mockService
		});

	});

	it('should contain a controller', function() {
		expect(PhotoCtrl).toBeDefined();
	});


	it('should contain empty photo object', function() {

		expect($scope.vm.photo).toEqual(mockInstagramData);
	});





});