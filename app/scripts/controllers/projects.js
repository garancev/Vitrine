'use strict';

/**
 * @ngdoc function
 * @name vitrineApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the vitrineApp
 */
angular.module('vitrineApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
