/**
 * Created by grvis on 6/12/2016.
 */
var app = angular.module('myApp',[])
                 .controller('myController',['$scope',function($scope){
                     $scope.msg="Hello Angular UI";
                 }]);