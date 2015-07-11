;(function() {
	'use strict';

	angular.module('app.companies')
		.factory('companies', companies);

	companies.$inject = ['$http', 'AppSettings'];

	function companies($http, AppSettings) {
		var service = {
			get: get,
			getAll: getAll
		};

		return service;

		function get(companyId) {
			return $http.get(AppSettings.api + '/companies/' + companyId);
		}

		function getAll() {
			return $http.get(AppSettings.api + '/companies');
		}
	}

}());