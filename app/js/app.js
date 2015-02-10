'use strict';

/* App Module */

angular.module('App', [
  'ngRoute',
  'Controllers',
  'Filters'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/:title', {
          templateUrl: 'partials/item-detail.html',
          controller: 'ItemDetailCtrl'
        })
      .otherwise({
        redirectTo: '/'
      })
  }])
