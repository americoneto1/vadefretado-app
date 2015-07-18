;(function() {
	'use strict';

	angular.module('app.companies')
		.controller('CompanyCtrl', companyCtrl);

	companyCtrl.$inject = ['linesData', 'companyData'];

	function companyCtrl(linesData, companyData) {
		var vm = this;
		vm.lines = linesData;
		vm.company = companyData;
	};

}());