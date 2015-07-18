;(function() {
	'use strict';

	angular.module('app.line')
		.factory('line', line);

	line.$inject = ['util', 'AppSettings'];

	function line(util, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(lineId) {
			return util.getData(AppSettings.api + '/lines/' + lineId);
		}
	}

}());