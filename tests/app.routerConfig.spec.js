/* Router Test */


describe('Routing Test', function() {

  var $rootScope,
    $state,
    myServiceMock,
    $httpBackend, home = 'home',
    photos = 'photos';

  beforeEach(function() {

    module('myApp', function($provide) {
      $provide.value('dataService', myServiceMock = {});
    });

    inject(function(_$rootScope_, _$state_, $templateCache, _$httpBackend_, _$injector_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      $templateCache.put('src/js/app/MainFeed/templates/photofeed.tpl.html', 'Template for Main Feed');
      $templateCache.put('src/js/app/SingleFeed/templates/singlefeedphoto.tpl.html', 'Template for Single Feed');
    });


  });

  it('should respond to home url', function() {
    expect($state.href(home)).toEqual('#/');
  });


  it('should respond to photos url', function() {
    expect($state.href(photos, {id: 1})).toEqual('#/photos/1');
  });


  it('should contain main feed data', function() {
    var homeState = $state.get(home);
    expect(homeState.name).toEqual(home)
    expect(homeState.resolve.MainFeed).toBeDefined();

  });

  it('should contain resolve data', function() {
    var photoState = $state.get(photos);

    expect(photoState.name).toEqual(photos)
    expect(photoState.resolve.SingleFeed).toBeDefined();
  });

});