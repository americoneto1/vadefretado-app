;(function() {
	'use strict';

	angular.module('app.core')
		.controller('HomeCtrl', homeCtrl);

	homeCtrl.$inject = ['companiesList'];

	function homeCtrl(companiesList) {
		var vm = this;
		vm.companies = companiesList;
	}

}());