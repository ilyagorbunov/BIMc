(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.demoComponent'
    ])
    .config(appConfig);

  //рассавлят сам все зависимости
  // @ngInject
  function appConfig($stateProvider, $urlRouterProvider) {
    console.log('=== Start Config ===');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home.html'
      });
  }

})();