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
    $scope.step1 = { tValue: '', fValue: '' };
    $scope.step2 = { tValue: '', fValue: '', fValue1: '' };
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
    ///step0
    $scope.clickstepbutton1 = function() {
        $scope.step = { tValue: 'true', fValue: '' };
    }
    $scope.clickstepbutton2 = function() {
            $scope.step = { tValue: '', fValue: 'false' };
        }
        /////step1
    $scope.clickstep1button1 = function() {
        $scope.step1 = { tValue: 'true', fValue: '' };
    }
    $scope.clickstep1button2 = function() {
            $scope.step1 = { tValue: '', fValue: 'false' };
        }
        ///step2
    $scope.clickstep2button1 = function() {
        $scope.step1 = { tValue: 'true', fValue: '' };
    }
    $scope.clickstep2button2 = function() {
        $scope.step1 = { tValue: '', fValue: 'false' };
    }

    ///step3
    $scope.clickstep3button1 = function() {
        $scope.step3 = { tValue: 'true', fValue: '', fValue1: '' };
    }
    $scope.clickstep3button2 = function() {
        $scope.step3 = { tValue: '', fValue: 'false', fValue1: '' };
    }
    $scope.clickstep3button3 = function() {
            $scope.step3 = { tValue: '', fValue: '', fValue1: 'false' };
        }
        ////step4
    $scope.clickstep4button1 = function() {
        $scope.step4 = { tValue: 'true', fValue: '', fValue1: '' };
    }
    $scope.clickstep4button2 = function() {
        $scope.step4 = { tValue: '', fValue: 'false', fValue1: '' };
    }
    $scope.clickstep4button3 = function() {
            $scope.step4 = { tValue: '', fValue: '', fValue1: 'false' };
        }
        ////step5
    $scope.clickstep5button1 = function() {
        $scope.step5 = { tValue: 'true', fValue: '', fValue1: '' };
    }
    $scope.clickstep5button2 = function() {
        $scope.step5 = { tValue: '', fValue: 'false', fValue1: '' };
    }
    $scope.clickstep5button3 = function() {
            $scope.step5 = { tValue: '', fValue: '', fValue1: 'false' };
        }
        ////step6
    $scope.clickstep6button1 = function() {
        $scope.step6 = { tValue: 'true', fValue: '', fValue1: '' };
    }
    $scope.clickstep6button2 = function() {
        $scope.step6 = { tValue: '', fValue: 'false', fValue1: '' };
    }
    $scope.clickstep6button3 = function() {
        $scope.step6 = { tValue: '', fValue: '', fValue1: 'false' };
    }


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

        $scope.prozent = ($scope.valeur / 7) * 100;

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