/*** Created by grvis on 6/12/2016.*/

var app = angular.module('myApp',['ui.unique'])
                 .controller('myController',['$scope','$http',function($scope,$http){
                     $http.get('employee.json').then(function(res) {
                         $scope.employees = res.data;
                     })
                 }]);