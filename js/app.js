// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'App' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'App.controllers' is found in controllers.js
angular.module('App', ['ionic', 'App.controllers', 'App.directives'/*'App.menu', 'App.home'*/])

.constant('appConstants', (function(){
  return {
    'appName': 'Franklin Chieze',
    'backdropPic': 'img/backdrop.png',
    'blogspotLink': 'http://1990hackaholic.blogspot.com/',
    'codeprojectLink': 'https://codeproject.com/Members/FranklinChieze',
    'coverPic': 'img/cover.png',
    'githubLink': 'https://github.com/Chieze-Franklin',
    'googleplusLink': 'https://plus.google.com/+FranklinChieze',
    'facebookLink': 'https://facebook.com/franklin.chieze.5',
    'facebookpageLink': 'https://www.facebook.com/1990hackaholic',
    'linkedinLink': 'https://ng.linkedin.com/pub/franklin-chieze/aa/10/b4b',
    'profilePic': 'img/profile.png',
    'researchgateLink': 'https://researchgate.com/profile/FrankChieze',
    'twitterLink': 'https://twitter.com/1990hackaholic',
    'userName': 'Franklin Chieze',
    'userRole': 'Software Developer'
  };
})())

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.bio', {
    url: '/bio',
    views: {
      'menuContent': {
        templateUrl: 'views/home/bio.html',
        controller: 'BioCtrl'
      }
    }
  })

  .state('app.cv', {
    url: '/cv',
    views: {
      'menuContent': {
        templateUrl: 'views/cv/cv.html',
        controller: 'CvCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.projectlists', {
    url: '/projectlists',
    views: {
      'menuContent': {
        templateUrl: 'views/projectlists/projectlists.html',
        controller: 'ProjectListsCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});