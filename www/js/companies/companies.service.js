;(function() {
	'use strict';

	angular.module('app.companies')
		.factory(companies);

	companies.$inject = ['$http', 'AppSettings'];

	function companies($http, AppSettings) {
		var service = {
			getAll: getAll
		};

		return service;

		function getAll() {
			return $http.get(AppSettings.api + '/associacoes');
		}
	}

}());