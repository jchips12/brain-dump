(function() {
    'use strict';
    
    angular.module('ninja.services').factory('utilitySvc', utilitySvc);

    utilitySvc.$inject = [];
    function utilitySvc() {
        var service = {
            isEmpty : isEmpty
        };
        return service;

        function isEmpty() {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === undefined || arguments[i] === null || arguments[i] === '') {
                    return true;
                }
            }
        }
    }

})();