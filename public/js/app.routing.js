/**
 * Author : Shoukath Mohammed
 * Date   : 10/29/2016
 * Time   : 08:00 PM EST
 * Created with Sublime Text
 */

(function() {

  'use strict';

  angular
    .module('MBTA')
    .config(config);


  function config($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider
      .state("/", {
        url: "/",
        templateUrl: "partials/grid.html"
      });

    // Use the HTML5 History API
    $urlRouterProvider.otherwise(function($injector, $location){
    	$injector.invoke(['$state', function($state) {
    		$state.go('/');
    	}]);
    });
  }
})();