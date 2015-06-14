// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    cache: false,
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.entradas', {
    url: '/entradas',
    cache: false,
    views: {
      'tab-entradas': {
        templateUrl: 'templates/tab-entradas.html',
        controller: 'EntradaCtrl'
      }
    }
  })

 .state('tab.entradas-detail', {
    url: '/entradas/:productId',
    cache: false,
    views: {
      'tab-entradas': {
        templateUrl: 'templates/tab-product-detail.html',
        controller: 'DetailCtrl'
      }
    }
  })

  .state('tab.principales-detail', {
    url: '/principales/:productId',
    cache: false,
    views: {
      'tab-principales': {
        templateUrl: 'templates/tab-product-detail.html',
        controller: 'DetailCtrl'
      }
    }
  }) 

  .state('tab.postres-detail', {
    url: '/postres/:productId',
    cache: false,
    views: {
      'tab-postres': {
        templateUrl: 'templates/tab-product-detail.html',
        controller: 'DetailCtrl'
      }
    }
  }) 

  .state('tab.bebidas-detail', {
    url: '/bebidas/:productId',
    cache: false,
    views: {
      'tab-bebidas': {
        templateUrl: 'templates/tab-product-detail.html',
        controller: 'DetailCtrl'
      }
    }
  })  
  

  .state('tab.principales', {
    url: '/principales',
    cache: false,
    views: {
      'tab-principales': {
        templateUrl: 'templates/tab-principales.html',
        controller: 'PrincipalCtrl'
      }
    }
  })

  .state('tab.postres', {
    url: '/postres',
    cache: false,
    views: {
      'tab-postres': {
        templateUrl: 'templates/tab-postres.html',
        controller: 'PostreCtrl'
      }
    }
  })

  .state('tab.bebidas', {
    url: '/bebidas',
    cache: false,
    views: {
      'tab-bebidas': {
        templateUrl: 'templates/tab-bebidas.html',
        controller: 'BebidaCtrl'
      }
    }
  })

  .state('tab.factura', {
    url: '/factura',
    cache: false,
    views: {
      'tab-factura': {
        templateUrl: 'templates/tab-factura.html',
        controller: 'FacturaCtrl'
      }
    }
  })

  .state('tab.factura-detail', {
    url: '/factura/:clientId',
    cache: false,
    views: {
      'tab-factura': {
        templateUrl: 'templates/tab-factura-detail.html',
        controller: 'FacturaDetailCtrl'
      }
    }
  })

  .state('table', {
    url: '/table',
    cache: false,
    templateUrl: 'templates/table.html',
    controller: 'TableCtrl'
  })


  .state('table-assign', {
    url: '/table/:tableId',
    cache: false,
    controller: 'SetTableCtrl'
  })


  .state('table-pay', {
    url: '/pay',
    cache: false,
    controller: 'PayTableCtrl'
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/table');

});
