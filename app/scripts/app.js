'use strict';

/**
 * @ngdoc overview
 * @name fusionXApp
 * @description
 * # fusionXApp
 *
 * Main module of the application.
 */
angular
    .module('angularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('/index', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('/about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .state('upload', {
                url: '/Upload',
                templateUrl: 'views/uploadProfile.html',
                controller: 'uploadController',
                controllerAs: 'uploadCtrl'
            })
    });