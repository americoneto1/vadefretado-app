;(function() {
	'use strict';

	angular.module('app.line')
		.factory('line', line);

	line.$inject = ['$http', 'AppSettings'];

	function line($http, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(lineId) {
			return $http.get(AppSettings.api + '/lines/' + lineId);
		}
	}

}());