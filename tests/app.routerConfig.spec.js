/* Router Test */

describe('Routing Test', function() {

  var $rootScope, $state;

  beforeEach(function() {

    module('myApp');

    inject(function(_$rootScope_, _$state_, $templateCache) {
      $rootScope = _$rootScope_;
      $state = _$state_;


      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('src/js/app/MainFeed/templates/photofeed.tpl.html', 'Template for Main Feed');
      $templateCache.put('src/js/app/SingleFeed/templates/singlefeedphoto.tpl.html', 'Template for Single Feed');
    });
  });

  it('should respond to home url', function() {
  	$rootScope.$apply( function(){
  		$state.transitionTo('home');

  	});
    expect($state.current.url).toEqual('/');
    expect($state.current.templateUrl).toEqual('src/js/app/MainFeed/templates/photofeed.tpl.html');
  });

  it('should respond to home url', function() {
  	$rootScope.$apply( function(){
  		$state.transitionTo('photos');

  	});
    expect($state.current.url).toEqual('/photos/:id');
    expect($state.current.templateUrl).toEqual('src/js/app/SingleFeed/templates/singlefeedphoto.tpl.html');
  });

  




});