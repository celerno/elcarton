'use strict';

/**
 * @ngdoc function
 * @name elcartonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elcartonApp
 */
angular.module('elcartonApp', [])
  .controller('MainCtrl',['$scope','$http',
    function ($scope, $http) {

      $http.get('localhost:3000/api/cartones', function(req, data){
           $scope.cartones = [];
           $scope.cartones = data;
                $scope.newComment = '';
                $scope.comentar = function(cartonId){
                  if(newComment !==''){
                    $http.post('localhost:3000/api/comentario', {_id:cartonId, comment: {brief:newComment}}).
                      success(function(data, status, headers, config){console.log("comment OK");})
                        .error(function(data, status, headers, config){console.log("comment NO");});
                  }
                };
      });
  }]);
