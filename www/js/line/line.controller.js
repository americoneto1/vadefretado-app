;(function() {
	'use strict';

	angular.module('app.line')
		.controller('LineCtrl', lineCtrl);

	lineCtrl.$inject = ['lineData', 'companyData'];

	function lineCtrl(lineData, companyData) {
		var vm = this;
		vm.line = lineData.data;
		vm.company = companyData.data;
	};

}());