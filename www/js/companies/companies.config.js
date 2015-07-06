;(function() {
	'use strict';

	angular.module('app.companies')
		.config(configure);

	configure.$inject = ['$stateProvider'];

	function configure($stateProvider) {
		$stateProvider
			.state('app.company', {
				url: "/company/:id",
			    abstract: true,
			    views: {
			      'menuContent': {
			        templateUrl: "js/companies/company.html"
			      }
			    }
			})
			.state('app.company.lines', {
		  		url: "/lines",
		  		views: {
			      'company-lines': {
			        templateUrl: "js/companies/lines.html"
			      }
			    }
		  	})
		  	.state('app.company.info', {
		  		url: "/info",
		  		views: {
			      'company-info': {
			        templateUrl: "js/companies/info.html"
			      }
			    }
		  	});
	}

}());