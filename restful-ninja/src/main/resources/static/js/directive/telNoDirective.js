(function() {
    'use strict';

    angular.module('ninja.directives').directive('telNo', telNo);

    function telNo() {
        var directive = {
            restrict : 'A',
            require : '?ngModel',
            link : link
        }

        return directive;

        function link(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
                if (inputValue == undefined)
                    return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    }
})();