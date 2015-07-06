;(function() {
	'use strict';

	angular.module('app.line')
		.config(configure);

	configure.$inject = ['$stateProvider'];

	function configure($stateProvider) {
		$stateProvider
			.state('app.line', {
				url: "/line/:id",
			    abstract: true,
			    views: {
			      'menuContent': {
			        templateUrl: "js/line/line.html"
			      }
			    }
			})
			.state('app.line.about', {
		  		url: "/about",
		  		views: {
			      'company-line-about': {
			        templateUrl: "js/line/about.html"
			      }
			    }
		  	})
		  	.state('app.line.departure', {
		  		url: "/departure",
		  		views: {
			      'company-line-departure': {
			        templateUrl: "js/line/departure.html"
			      }
			    }
		  	})
		  	.state('app.line.return', {
		  		url: "/return",
		  		views: {
			      'company-line-return': {
			        templateUrl: "js/line/return.html"
			      }
			    }
		  	});
	}

}());