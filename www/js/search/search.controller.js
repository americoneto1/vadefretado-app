;(function() {
	'use strict';

	angular.module('app.search')
		.controller('SearchCtrl', searchCtrl);

	searchCtrl.$inject = ['$stateParams', 'companies', 'search', '$ionicPopup'];

	function searchCtrl($stateParams, companies, search, $ionicPopup) {
		var vm = this;
		vm.origem = '';
		vm.destino = '';

		vm.doSearch = function() {
			if(isValid()) {
				search.get(vm.origem, vm.destino).success(function (data) {
					vm.results = data;
				});
			}
		};

		vm.getCompany = function(id) {
			return companies.get(id).success(function (data) {
				return data;
    		});
		}

		function isValid() {
			if(!vm.origem || !vm.destino) {
				$ionicPopup.alert({
			    	title: 'Busca inválida',
			    	template: 'Preencha a origem e o destino'
			   	});
			   	return false;
			}
			return true;
		}
	};

}());