/* Main Feed Controller */

(function(){

	'use strict';

		angular.module('myApp')

			.controller('MainCtrl', MainCtrl);

			MainCtrl.$inject = ['$scope', 'RecentFeed', 'MainFeed'];

			function MainCtrl($scope, RecentFeed, MainFeed){
			
					var vm = this;

					vm.images = RecentFeed;
					vm.feed = MainFeed;

					var navbar = $('.navbar');
					var navDropdown = $('.dropdown-menu');
					
					$(window).scroll(function(){
						if($(window).scrollTop() <= 250){
							navbar.removeClass('navbar-scroll');
							navDropdown.removeClass('nav-dropdown-scroll');
							$('.top').hide();
						} else {
							navbar.addClass('navbar-scroll');
							navDropdown.addClass('nav-dropdown-scroll');
							$('.top').show();
						}
					});
				

			}


}());