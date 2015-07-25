;(function() {
	'use strict';

	angular.module('app.line')
		.controller('FavoritesCtrl', favoritesCtrl);

	favoritesCtrl.$inject = ['$filter'];

	function favoritesCtrl($filter) {
		var vm = this;
		vm.results = getFavorites();

		function getFavorites() {
			var favorites = localStorage.getItem('favorites');
			return (favorites) ? JSON.parse(favorites) : [];
		}
	};

}());