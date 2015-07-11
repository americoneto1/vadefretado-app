;(function() {
	'use strict';

	angular.module('app.line')
		.config(configure);

	configure.$inject = ['$stateProvider'];

	function configure($stateProvider) {
		$stateProvider
			.state('app.line', {
				url: "/line/:id",
				params: {
					companyId: null
				},
			    abstract: true,
			    views: {
			      'menuContent': {
			      	controller: 'LineCtrl as vm',
			        templateUrl: "js/line/line.html"
			      }
			    },
			    resolve: {
			    	lineData: function(line, $stateParams) {
			    		return line.get($stateParams.id).success(function (data) {
							return data;
						});
			    	},
			    	companyData: function(companies, $stateParams) {
			    		return companies.get($stateParams.companyId).success(function (data) {
							return data;
			    		});
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