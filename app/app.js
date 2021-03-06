// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'angular-steps',
    'myApp.home',
    'myApp.contact',
    'myApp.quiz',
    'myApp.count',
    'myApp.calender',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider, $scope) {

    $routeProvider.otherwise({ redirectTo: 'home' });
}]);