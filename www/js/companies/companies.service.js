;(function() {
	'use strict';

	angular.module('app.companies')
		.factory('companies', companies);

	companies.$inject = ['util', 'AppSettings'];

	function companies(util, AppSettings) {
		var service = {
			get: get,
			getAll: getAll
		};

		return service;

		function get(companyId) {
			return util.getData(AppSettings.api + '/companies/' + companyId);
		}

		function getAll() {
			return util.getData(AppSettings.api + '/companies');
		}
	}

}());