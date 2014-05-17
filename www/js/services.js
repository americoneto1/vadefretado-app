
angular.module('fretado.services', [])

.factory('DataService', ['$http', '$q', '$rootScope', '$ionicLoading', function ($http, $q, $rootScope, $ionicLoading) {

	var STORAGE_NAME = "API_DATA";

	var CALLBACK = "?callback=JSON_CALLBACK";
	var URL_API = "https://vadefretado.azure-mobile.net/api/linhas/associacoes" + CALLBACK;
	
	$rootScope.storageData = [];

	function saveSearch(origem, destino) {
		var obj = {
			origem: origem,
			destino: destino
		}

		if(!localStorage.getItem("BUSCAS_RECENTES")) {
			localStorage.BUSCAS_RECENTES = JSON.stringify([obj]);
		} else {
			var buscas = JSON.parse(localStorage.getItem("BUSCAS_RECENTES"));
			if( obj.origem != buscas[0].origem && obj.destino != buscas[0].destino ) {
				buscas.splice(0, 0, obj); //Add at first position
				localStorage.BUSCAS_RECENTES = JSON.stringify(buscas.slice(0, 3));	
			}			
		}
	}

	return {		
		loadData: function($scope, callback) {
			$ionicLoading.show({
		      template: '<i class="ion-loading-c"></i> Carregando linhas...',
		    });
			$http.get(URL_API).then(function (values) {	
				$rootScope.storageData = [];
				for(var i = 0; i < values.data.length; i++) {
					$rootScope.storageData.push(values.data[i]);
				}
				localStorage.setItem(STORAGE_NAME, JSON.stringify($rootScope.storageData));
				$ionicLoading.hide();
				callback();
			}).catch(function (err) {
				if(localStorage.getItem(STORAGE_NAME)) {
					$rootScope.storageData = JSON.parse(localStorage.getItem(STORAGE_NAME));
					$ionicLoading.hide();
					callback();
				} else {
					$ionicLoading.show({
				      content: 'Não foi possível recuperar as linhas'
				    });					
				}
			});			
		},
		getAssocs: function() {
			var assocs = [];
			for(var i = 0; i < $rootScope.storageData.length; i++) {
				assocs.push({
					_id: $rootScope.storageData[i]._id,
					nome: $rootScope.storageData[i].nome,
					telefone: $rootScope.storageData[i].telefone,
				});
			}
			return assocs;
		},
		getLinhasByAssoc: function(idAssoc) {
			return _.find($rootScope.storageData, function(assoc){
				return assoc._id == idAssoc;
			});
		},
		getItinerarioByLinha: function(idAssoc, numeroLinha) {
			var assoc = this.getLinhasByAssoc(idAssoc);
			return _.find(assoc.linhas, function(linha) {
				return linha.numero == numeroLinha;
			});
		},
		getLinhasBySearch: function(origem, destino) {
			var filtered = $rootScope.storageData.clone();
			var results = _.filter(filtered, function(assoc) {
				var resLinhas = _.filter(assoc.linhas, function(linha) {		
					var resIda = _.filter(linha.ida, function(ida) {
						if(typeof origem !== "undefined") {
							return (ida.toLowerCase().indexOf(origem.toLowerCase()) > -1);							
						} else {
							return true;
						}
					});
					var resVolta = _.filter(linha.volta, function(volta) {
						if(typeof destino !== "undefined") {
							return (volta.toLowerCase().indexOf(destino.toLowerCase()) > -1);							
						} else {
							return true;
						}
					});
					if(resIda.length > 0 && resVolta.length > 0) {
						return linha;
					}
				});						
				assoc.linhas = resLinhas;				
				return assoc;
			});
			saveSearch(origem, destino);
			return results;
		},
		getSavedSearch: function() {
			return JSON.parse(localStorage.getItem("BUSCAS_RECENTES"));
		}
	};

}]);