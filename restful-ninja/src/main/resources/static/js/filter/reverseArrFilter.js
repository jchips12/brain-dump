(function() {
    'use strict';

    angular.module('ninja.filters').filter('reverseArr', reverseArr);

    function reverseArr() {

        return filter;

        function filter(obj) {
            if (obj === undefined || !angular.isArray(obj)) {
                return obj;
            }
            return obj.slice().reverse();
        }
    }
})();
