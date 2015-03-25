'use strict';

/**
 * @ngdoc overview
 * @name elcartonApp
 * @description
 * # elcartonApp
 *
 * Main module of the application.
 */
angular
  .module('elcartonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/enviar', {
        templateUrl: 'views/enviar.html',
        controller: 'EnviarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
