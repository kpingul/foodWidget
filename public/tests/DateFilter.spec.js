/* Date Filter Test */

describe('Date Filter Test', function() {

	var $filter,
		filter;

		beforeEach(function() {
			module('myApp');

			inject(function(_$filter_){

				$filter = _$filter_;
				filter   = $filter('timefilter');

			});

		});



		it('should return value in correct month', function() {

			expect(filter(1438145845)).toEqual("July 28 2015");

			expect(filter(1437292851)).toEqual("July 19 2015");
			
		});

	
});