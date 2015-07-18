;(function() {
	'use strict';

	angular.module('app.core')
		.config(configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.views.maxCache(0);

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
			      	controller: 'HomeCtrl as vm',
			        templateUrl: "js/core/home.html"
			      }
			    },
			    resolve: {
			    	companiesList: function(companies) {
			    		return companies.getAll().then(function (data) {
			    			return data;
			    		});
			    	}
			    }
			});

		$urlRouterProvider.otherwise('/app/home');
	}

}());