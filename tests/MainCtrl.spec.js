/* Main Controller Test */

describe('Main Controller Test', function() {
		
		var DataService,
			MainCtrl,
			$scope,
			$rootScope,
			$controller;

			beforeEach(function() {
				
				module('myApp')

				inject(function(_$rootScope_, _$controller_, _dataService_){

					$scope = _$rootScope_.$new();
					$controller = _$controller_;
					DataService = _dataService_;
					
				});

				MainCtrl = $controller('MainCtrl as vm', {$scope: $scope});



			});

			it('should  start with empty data', function() {
				expect($scope.vm.images).toEqual([]);
				expect($scope.vm.photo).toEqual({});
				expect($scope.vm.userId).toEqual({});
			});

			it('receive images from Service', function() {
				DataService.getFeed();
				expect($scope.vm.images).toBeDefined();
			});


});