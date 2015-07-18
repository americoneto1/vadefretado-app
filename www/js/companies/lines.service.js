;(function() {
	'use strict';

	angular.module('app.companies')
		.factory('lines', lines);

	lines.$inject = ['util', 'AppSettings'];

	function lines(util, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(companyId) {
			return util.getData(AppSettings.api + '/companies/' + companyId + '/lines');
		}
	}

}());