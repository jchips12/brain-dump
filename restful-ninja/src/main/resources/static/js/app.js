(function() {
    'use strict';
    
    angular.module('ninja.controllers', []);
    angular.module('ninja.services', [])
    angular.module('ninja.directives', []);
    angular.module('ninja.filters', []);
    angular.module('ninja', ['ui.router', 'ninja.controllers', 'ninja.services', 'ninja.filters', 'ninja.directives']);
    
    angular.module('ninja').run(function($rootScope, utilitySvc){
        $rootScope.utility = utilitySvc;
    })
})();