'use strict';

/**
 * @ngdoc function
 * @name elcartonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the elcartonApp
 */
angular.module('elcartonApp',[])
    .controller('EnviarCtrl',['$scope','$http',
      function ($scope, $http) {
      $scope.carton =    { title: '',
                            brief: '',
                            img_original: '',
                            monero:[{firma:''}],
                            medio:[{
                                         link:'',
                                         brief:'',
                                         img_logo:''
                                     }],
                            usuario:{
                                 user:{type: String, default: '__anon'},
                                 ip:''
                                       },
                            referencia:[{
                                 brief:'',
                                 link:{type:String}, /*can be null, if readed on paper*/
                                 medio:'' /* link of medio: https://www.reforma.com*/
                             }]};

      $scope.enviar = function(){
      $http.post("localhost:3000/api/carton", {'carton':carton})
            .success(function(data, status, headers, config){console.log(data);})
            .error(function(data, status, headers, config){console.log(data);});
      };
  }]);
