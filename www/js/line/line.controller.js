;(function() {
	'use strict';

	angular.module('app.line')
		.controller('LineCtrl', lineCtrl);

	lineCtrl.$inject = ['lineData', 'companyData', '$filter'];

	function lineCtrl(lineData, companyData, $filter) {
		var vm = this;
		vm.line = lineData;
		vm.company = companyData;

		function getFavorites() {
			var favorites = localStorage.getItem('favorites');
			return (favorites) ? JSON.parse(favorites) : [];
		}

		function isFavorite() {
			var favorites = getFavorites();

			for (var i = 0; i < favorites.length; i++) {
				for (var j = 0; j < favorites[i].lines.length; j++) {
					if(favorites[i].lines[j]._id == lineData._id) {
						return true;
					}
				}
			}
			return false;
		}

		vm.isFavorite = isFavorite();

		vm.favorite = function() {
			vm.isFavorite = !vm.isFavorite;
			var favorites = getFavorites();

			if(vm.isFavorite) {
				var hasCompany = false;

				for (var i = 0; i < favorites.length && !hasCompany; i++) {
					if(favorites[i].company._id == companyData._id) {
						hasCompany = true;
					}
				}
				
				if(!hasCompany) {
					favorites.push({
						company: companyData,
						lines: []
					})
				}

				for (var i = 0; i < favorites.length; i++) {
					if(favorites[i].company._id == companyData._id) {
						favorites[i].lines.push({
							_id: lineData._id,
							numero: lineData.numero,
							nome: lineData.nome	
						});						
					}
				}
			} else {
				for (var i = 0; i < favorites.length; i++) {
					for (var j = 0; j < favorites[i].lines.length; j++) {
						if(favorites[i].lines[j]._id == lineData._id) {
							favorites[i].lines.splice(j, 1);
						}
					}
					if(favorites[i].lines.length == 0) {
						favorites.splice(i, 1);
					}
				}
			}

			localStorage.setItem('favorites', JSON.stringify(favorites));
		};
	};

}());