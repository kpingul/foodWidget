/* Main Controller Test */

describe('Main Controller Test', function() {
		
		var $provide,
			MainCtrl,
			$scope,
			$rootScope,
			$controller;

			beforeEach(function() {
				
				module('myApp')
				var mockData = [];
				
				inject(function(_$rootScope_, _$controller_){

					$scope = _$rootScope_.$new();
					$controller = _$controller_;

					
				});

				MainCtrl = $controller('MainCtrl as vm', {

					$scope: $scope, 
					MainFeed: mockData
			
				});



			});

			it('should contain a controller', function() {
				expect(MainCtrl).toBeDefined();
			});

			it('should contain a list of images', function() {
				expect($scope.vm.images).toEqual([]);
			});



});