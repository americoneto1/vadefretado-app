;(function() {
	'use strict';

	angular.module('app.search')
		.factory('search', search);

	search.$inject = ['$http', 'AppSettings'];

	function search($http, AppSettings) {
		var service = {
			get: get
		};

		return service;

		function get(origem, destino) {
			return $http.get(AppSettings.api + '/search?origem=' + origem + '&destino=' + destino);
		}
	}

}());