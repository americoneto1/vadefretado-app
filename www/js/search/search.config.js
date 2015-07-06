;(function() {
	'use strict';

	angular.module('app.search')
		.config(configure);

	configure.$inject = ['$stateProvider'];

	function configure($stateProvider) {
		$stateProvider
			.state('app.search', {
		  		url: "/search",
		  		views: {
			      'menuContent': {
			        templateUrl: "js/search/form.html"
			      }
			    }
		  	})
			.state('app.results', {
				url: '/results',
				views: {
			      'menuContent': {
			        templateUrl: "js/search/results.html"
			      }
			    }
			});
	}

}());