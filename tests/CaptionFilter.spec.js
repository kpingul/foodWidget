/* Caption Filter Test */
describe('Caption Filter Test', function() {
	var $filter,
		filter;

	beforeEach(function() {
		
		module('myApp');

		inject(function(_$filter_){

			$filter = _$filter_;
			filter  = $filter('captionfilter');
		});
	});

	it('should return undefined when undefined is passed in', function() {

		expect(filter(undefined)).toBeUndefined();
		
	});

	it('should return return values without #',  function() {

		expect(filter('Applejacks #instabreakfast #instafood #instadude')).toEqual('Applejacks');

		expect(filter('kirck #is #testing #a #filter')).toEqual('kirck');
	});

});