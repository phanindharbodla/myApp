angular.module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('lengthsAndPlotsCalculator', {
        url: '/page1',
        templateUrl: 'templates/lengthsAndPlotsCalculator.html',
        controller: 'lengthsAndPlotsCalculatorCtrl'
      })

      .state('about', {
        url: '/page3',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })

      .state('expressionMode', {
        url: '/page4',
        templateUrl: 'templates/expressionMode.html',
        controller: 'expressionModeCtrl'
      })

      .state('dynamicMode', {
        url: '/page5',
        templateUrl: 'templates/dynamicMode.html',
        controller: 'dynamicModeCtrl'
      })

      .state('plotCalculator', {
        url: '/page7',
        templateUrl: 'templates/plotCalculator.html',
        controller: 'plotCalculatorCtrl'
      })

      .state('unitMode', {
        url: '/page6',
        templateUrl: 'templates/unitMode.html',
        controller: 'unitModeCtrl'
      })

    $urlRouterProvider.otherwise('/page1')


  });
