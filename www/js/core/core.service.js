;(function() {
	'use strict';

	angular.module('app.core')
		.factory('util', util);

	util.$inject = ['$http', '$q'];

	function util($http, $q) {
		var service = {
			getData: getData
		};

		function getData(url) {
			var localData = localStorage.getItem(url);
			if(localData) {
				return $q(function (resolve, reject) {
					resolve(JSON.parse(localData));
				});
			} else {
				return $q(function (resolve, reject) {
					$http.get(url).success(function (data) {
						localStorage.setItem(url, JSON.stringify(data));
						resolve(data);
					});
				});
			}
		}

		return service;
	}

}());