
angular.module('fretado.controllers', ['ionic'])

.controller('AppHomeCtrl', ['$scope', '$location', '$ionicPopup', '$rootScope', 'DataService', 
							function ($scope, $location, $ionicPopup, $rootScope, DataService) {	

    DataService.loadData($scope, function() {
		$scope.associacoes = DataService.getAssocs();
	});

	$scope.buscas = DataService.getSavedSearch();

    $scope.buscarLinhas = function() {      	
    	if( typeof $scope.origem !== "undefined" && typeof $scope.destino !== "undefined" ) {
	        $location.search('/busca')
	            .search('origem', $scope.origem)
	            .search('destino', $scope.destino);
        } else {
	    	$ionicPopup.alert({
	       		title: 'Preencha a origem e o destino'
	     	});
        }
    }
}])

.controller('BuscaCtrl', ['$scope', '$location', 'DataService', function ($scope, $location, DataService) {
    var search = $location.search();
    $scope.associacao = DataService.getLinhasBySearch(search.origem, search.destino);
    $scope.search = search; 
}])

.controller('LinhasCtrl', ['$scope', '$ionicSlideBoxDelegate', '$ionicScrollDelegate', '$stateParams', 'DataService', 
							function ($scope, $ionicSlideBoxDelegate, $ionicScrollDelegate, $stateParams, DataService) {
	$scope.showLinhas = function() {
		$scope.slideChanged(0);
		$ionicSlideBoxDelegate.slide(0);
		$ionicScrollDelegate.scrollTop();
	}
	$scope.showEmpresa = function() {
		$scope.slideChanged(1);
		$ionicSlideBoxDelegate.slide(1);
		$ionicScrollDelegate.scrollTop();
	}
	$scope.slideChanged = function(index) {
		var btnLinhas = document.querySelector('.nav-android a:nth-child(1)');
		var btnEmpresa = document.querySelector('.nav-android a:nth-child(2)');

		switch (index) {
			case 0:
				btnLinhas.classList.add("android-active");
				btnEmpresa.classList.remove("android-active");
				break;
			case 1:
				btnLinhas.classList.remove("android-active");
				btnEmpresa.classList.add("android-active");
				break;
		}
		$ionicScrollDelegate.scrollTop();
	}

	$scope.associacao = DataService.getLinhasByAssoc($stateParams.idAssociacao);

	$scope.$on('$viewContentLoaded', function() {
		$ionicScrollDelegate.scrollTop();
	});
}])


.controller('ItinerarioCtrl', ['$scope', '$ionicSlideBoxDelegate', '$ionicScrollDelegate', '$stateParams', 'DataService', 
								function ($scope, $ionicSlideBoxDelegate, $ionicScrollDelegate, $stateParams, DataService) {
	
	$scope.showInfo = function() {
		$scope.slideChanged(0);
		$ionicSlideBoxDelegate.slide(0);
		$ionicScrollDelegate.scrollTop();
	}
	$scope.showIda = function() {
		$scope.slideChanged(1);
		$ionicSlideBoxDelegate.slide(1);
		$ionicScrollDelegate.scrollTop();
	}
	$scope.showVolta = function() {
		$scope.slideChanged(2);
		$ionicSlideBoxDelegate.slide(2);
		$ionicScrollDelegate.scrollTop();
	}

	$scope.slideChanged = function(index) {
		var btnInfo = document.querySelector('.nav-android a:nth-child(1)');
		var btnIda = document.querySelector('.nav-android a:nth-child(2)');
		var btnVolta = document.querySelector('.nav-android a:nth-child(3)');

		switch (index) {
			case 0:
				btnInfo.classList.add("android-active");
				btnIda.classList.remove("android-active");
				btnVolta.classList.remove("android-active");
				break;
			case 1:
				btnInfo.classList.remove("android-active");
				btnIda.classList.add("android-active");
				btnVolta.classList.remove("android-active");
				break;
			case 2:
				btnInfo.classList.remove("android-active");
				btnIda.classList.remove("android-active");
				btnVolta.classList.add("android-active");
				break;
		}
		$ionicScrollDelegate.scrollTop();
	}

    $scope.associacao = DataService.getLinhasByAssoc($stateParams.idAssociacao);
    $scope.linha = DataService.getItinerarioByLinha($stateParams.idAssociacao, $stateParams.idLinha);

    $scope.$on('$viewContentLoaded', function() {
		$ionicScrollDelegate.scrollTop();
	});
}])

.controller('SobreCtrl', ['$scope',	function ($scope) {

	$scope.version = "0.0.1";

}]);