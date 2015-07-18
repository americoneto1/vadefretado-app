;(function() {
	'use strict';

	angular.module('app.search')
		.factory('search', search);

	search.$inject = ['util', 'AppSettings'];

	function search(util, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(origem, destino) {
			return util.getData(AppSettings.api + '/search?origem=' + origem + '&destino=' + destino);
		}
	}

}());