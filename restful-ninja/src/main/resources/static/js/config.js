(function() {
    'use strict';

    angular.module('ninja').config(config);
    config.$inject = [ '$stateProvider', '$urlRouterProvider' ]

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url : '/home',
            templateUrl : '/view/home.html',
            controller : 'homeCtrl',
            controllerAs : 'vm'
        });
    }

})();