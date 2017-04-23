'use strict';

angular.module('myApp.contact', ['ngRoute','angular-steps'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quiz', {
    templateUrl: 'quiz/quiz.html',
    controller: 'QuizCtrl'
  });
}])

.controller('QuizCtrl', function($scope) {


    $scope.email='';

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';


    $scope.houh = "";
    $scope.step1 = {'trueValue':true,'falseValue':false};
    $scope.step2 ={ 'trueValue':true ,'falseValue':false};
    $scope.step3 = {'trueValue':true,'falseValue':false};
    $scope.step4 = {'trueValue':true,'falseValue':false};
    $scope.step5 = {'trueValue':true,'falseValue':false};



    $scope.showResult=function(){
        console.log($scope.step1.trueValue);
        $scope.ResultFinalQuiz = 0;
        if ($scope.step1.trueValue === 'true' && $scope.step2.trueValue === 'true' ){
            console.log("ok");
            $scope.ResultFinalQuiz = $scope.ResultFinalQuiz + 1;
        }
        else if($scope.step1.trueValue ==='false' && $scope.step2.falseValue ==='false'){
            console.log("not ok");
            $scope.ResultFinalQuiz = $scope.ResultFinalQuiz + 0 ;
            console.log($scope.ResultFinalQuiz);
        }

        $scope.final = function(){
            if ($scope.ResultFinalQuiz === 0){
                $scope.houh ="0 %";
                console.log($scope.ResultFinalQuiz);
                console.log("Bist Inteligent"+ $scope.houh);
            }
            else if ($scope.ResultFinalQuiz === 1){
                $scope.houh ="10 %";
                console.log("bist du duemm "+ $scope.houh);
            }

            else if ($scope.ResultFinalQuiz === 2) {
                $scope.houh = "20 %";
                console.log("bist du duemm "+ $scope.houh);


            }
            else  ($scope.ResultFinalQuiz === 3)
            $scope.houh = "30 %" ;
            console.log("bist du duemm "+ $scope.houh);

        }


    }
});