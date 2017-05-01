'use strict';

angular.module('myApp.quiz', ['ngRoute', 'angular-steps'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/quiz', {
        templateUrl: 'quiz/quiz.html',
        controller: 'QuizCtrl'
    });
}])

.controller('QuizCtrl', function($scope) {






    $scope.email = '';

    // create a message to display in our view
    $scope.step = { tValue: '', fValue: '' };

    $scope.houh = "";
    $scope.step1 = { tValue: '', tValue: '' };

    $scope.step2 = { tValue: '', fValue: '', fValue1: '', fValue2: '' };

    $scope.step3 = { tValue: '', fValue: '', fValue1: '' };
    $scope.step4 = { tValue: '', fValue: '', fValue1: '' };
    $scope.step5 = { tValue: '', fValue: '', fValue1: '' };
    $scope.step6 = { tValue: '', fValue: '', fValue1: '' };
    $scope.step7 = { tValue: '', fValue: '', fValue1: '' };

    $scope.message1 = " Haben sie die Responsive Web gut Verstanden";
    $scope.message2 = " müssen sie noch die Responsive web design selb lernen";


    // Alert Bootstrap angular 
    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Bitte wälhlen sie .' },
        { type: 'success', msg: 'Gut click nächste.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({ msg: 'Another alert!' });
    };


    $scope.quizsumbit = function() {
        $scope.valeur = 0;
        if ($scope.step.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step1.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step2.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step3.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step4.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step5.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        if ($scope.step6.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }

        if ($scope.step7.tValue === 'true') {
            $scope.valeur = $scope.valeur + 1;

        }
        console.log($scope.valeur);


    }
    $scope.houh = "";
    $scope.final = function() {

        $scope.prozent = ($scope.valeur % 7) * 100;

        console.log($scope.prozent);
        if ($scope.prozent < 10) {
            $scope.houh = " Hi !!;  Haben Sie bekommen weniger als 10 Prozent ,";
        } else if ($scope.prozent < 50) {
            $scope.houh = " Hi!!   Haben Sie die nicht verstanden";

        } else if ($scope.prozent < 51 && $scope.prozent > 99) {
            $scope.houh = " Hi !! 50 Haben sie die nicht verstanden";

        }


    }

});