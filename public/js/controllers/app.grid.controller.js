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
    .controller('GridCtrl', GridCtrl);

  GridCtrl.$inject = ['$scope', '$http'];

  function GridCtrl($scope, $http) {

    var vm = this;

    vm.getData = function() {
      d3.csv("data/departures.csv", function(result) {
        $scope.data = result;
      });
    };

    vm.getCurrentDateTime = function() {
      $scope.current = {
          time: moment().format('LT'),
          day: moment().format('dddd'),
          date: moment().format('MM-DD-YYYY'),
        };
    };

    vm.updateCurrentDateTime = function() {
      setInterval(function() {
        vm.getCurrentDateTime();
      }, 1000);
    };

    vm.getData();
    vm.getCurrentDateTime();
    vm.updateCurrentDateTime();
  }
})();