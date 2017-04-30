'use strict';

angular.module('myApp.calender', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/calender', {
        templateUrl: 'calender/calender.html',
        controller: 'CalenderCtrl'
    });
}])

.controller('CalenderCtrl', [function($scope) {






}]);