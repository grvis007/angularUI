/**
 * Created by grvis on 6/10/2016.
 */

var app = angular.module("anchorScroll",[])
                  .controller("myController",['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll) {
                        //scrollLocation is the id of the element where you want to go. In thsi case we want to go to the top and bottom of the page
                      $scope.scrollTo = function(scrollILocation) {
                         //So pass that id to location service(which will then append it to url. for eg.. localhost...##top)
                          $location.hash(scrollILocation);
                          //leaves some space at the top of the page after navigating to the top
                          $anchorScroll.yOffset = 20;
                          //and from where anchorScroll service will grab it and will do our job
                          $anchorScroll();
                      }
                  }]);