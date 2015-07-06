;(function() {
	'use strict';

	angular.module('app.core')
		.config(configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configure($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app', {
		    	url: "/app",
		    	abstract: true,
		    	templateUrl: "js/core/menu.html"
		  	})
		  	.state('app.about', {
		  		url: "/about",
		  		views: {
			      'menuContent': {
			        templateUrl: "js/core/about.html"
			      }
			    }
		  	})
			.state('app.home', {
				url: '/home',
				views: {
			      'menuContent': {
			        templateUrl: "js/core/home.html"
			      }
			    }
			});

		$urlRouterProvider.otherwise('/app/home');
	}

}());