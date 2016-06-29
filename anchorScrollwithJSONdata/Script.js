/**
 * Created by grvis on 6/10/2016.
 */
var app = angular.module("anchorScroll",[])
                 .controller('demoController',['$scope','$location','$anchorScroll','$http',function ($scope,$location,$anchorScroll,$http) {
                     $http.get('data.json').then(function(res) {
                         $scope.countries = res.data;
                         console.log($scope.countries);
                         
                     });
                     
                     $scope.scrollTo = function(scrollLocation) {
                         $location.hash(scrollLocation);
                         $anchorScroll();
                     }
                 }]);