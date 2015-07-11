;(function() {
	'use strict';

	angular.module('app.companies')
		.factory('lines', lines);

	lines.$inject = ['$http', 'AppSettings'];

	function lines($http, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(companyId) {
			return $http.get(AppSettings.api + '/companies/' + companyId + '/lines');
		}
	}

}());