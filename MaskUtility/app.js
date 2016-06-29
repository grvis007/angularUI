/*** Created by grvis on 6/12/2016.*/

var app = angular.module('myApp',['ui.mask'])
                 .controller('myController',['$scope',function($scope){
                     $scope.msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                         "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when " +
                         "an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                         " It has survived not only five centuries, but also the leap into electronic typesetting," +
                         " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset " +
                         "sheets containing Lorem Ipsum passages, " +
                         "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                     
                     $scope.mask1= '999 999 999 9999' ;
                     $scope.mask2 = '(999) 999 9999';
                     $scope.mask3 = 'A90****A99'
                 }]);