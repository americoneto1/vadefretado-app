;(function() {
	'use strict';

	angular.module('fretado', [
		'app.core',
		'app.companies',
		'app.line',
		'app.search'
	]);

}());

/*
// Vá de Fretado App

angular.module('fretado', ['ionic', 'fretado.services', 'fretado.controllers'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "templates/home.html",
			controller: 'AppHomeCtrl'
		})

		.state('linhas', {
			url: "/linhas/:idAssociacao",
			templateUrl: "templates/linhas.html",
			controller: 'LinhasCtrl'
		})

		.state('itinerario', {
			url: "/itinerario/:idAssociacao/:idLinha",
			templateUrl: "templates/itinerario.html",
			controller: 'ItinerarioCtrl',
			reloadOnSearch: false
		})

		.state('busca', {
			url: "/busca",
			templateUrl: "templates/busca.html",
			controller: 'BuscaCtrl',
			reloadOnSearch: false
		})

		.state('sobre', {
			url: "/sobre",
			templateUrl: "templates/sobre.html",
			controller: 'SobreCtrl'
		})

	$urlRouterProvider.otherwise('/#');
})

Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};
*/