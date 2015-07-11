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
			      	controller: 'SearchCtrl as vm',
			        templateUrl: "js/search/form.html"
			      }
			    }
		  	});
	}

}());