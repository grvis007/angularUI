/**
 * Created by grvis on 6/11/2016.
 */
var app = angular.module('myApp',[])
                 .controller('myController',['$scope','$http',function($scope,$http) {
                     
                     $http.get('employee.json').then(function(res) {
                         $scope.employees = res.data;
                         console.log($scope.employees);
                     });

                     $scope.sort = function(keyName) {
                         $scope.sortKey = keyName; //set the sortKey to the param passed
                         $scope.reverse = !$scope.reverse; //if true make it false and vice versa
                     };
                     //Because we are using ng-model here we also need to specify a default sort order in our controller.
                     $scope.sortColumn = "firstName";
                     
                     $scope.shortIt = function() {
                         //$scope.printit = key;
                         //console.log($scope.printit);
                         console.log("Getting.........");
                     }
                     
                 }]);