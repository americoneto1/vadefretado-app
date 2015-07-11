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
			      	controller: 'CompanyCtrl as vm',
			        templateUrl: "js/companies/company.html"
			      }
			    },
			    resolve: {
			    	linesData: function(lines, $stateParams) {
			    		return lines.get($stateParams.id).success(function (data) {
			    			return data;
			    		});
			    	},
			    	companyData: function(companies, $stateParams) {
			    		return companies.get($stateParams.id).success(function (data) {
							return data;
			    		});
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