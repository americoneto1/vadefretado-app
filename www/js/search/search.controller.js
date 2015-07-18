;(function() {
	'use strict';

	angular.module('app.search')
		.controller('SearchCtrl', searchCtrl);

	searchCtrl.$inject = ['$stateParams', 'companies', 'search', '$ionicPopup', '$ionicLoading'];

	function searchCtrl($stateParams, companies, search, $ionicPopup, $ionicLoading) {
		var vm = this;
		vm.origem = '';
		vm.destino = '';

		vm.doSearch = function() {
			if(isValid()) {
				$ionicLoading.show({
			    	content: 'Loading',
			    	animation: 'fade-in',
			    	showBackdrop: true,
			    	maxWidth: 200,
			    	showDelay: 0
			  	});

				search.get(vm.origem, vm.destino).then(function (data) {
					vm.results = data;
					$ionicLoading.hide();
				});
			}
		};

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