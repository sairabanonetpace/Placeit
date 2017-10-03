(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('requestResponseExpensionController', requestResponseExpensionController)
        .directive('requestResponseExpension', requestResponseExpension);

    /** @ngInject */
    function requestResponseExpensionController($scope)
    {
        
    }

    /** @ngInject */
    function requestResponseExpension()
    {
        return {
            restrict : "E",
            templateUrl : "app/main/common/request-response-expension/request-response-expension.html",
            scope: {
                response: '='
            },
            controller:"requestResponseExpensionController"
        };
    }

})();