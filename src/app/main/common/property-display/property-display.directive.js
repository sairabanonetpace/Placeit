(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('propertyDisplayController', propertyDisplayController)
        .directive('propertyDisplay', propertyDisplay);

    /** @ngInject */
    function propertyDisplayController($scope)
    {
        $scope.description = {
            message1  : 'My first Angular app',
            message2 : 'developing for testing'
        };
        debugger;

        $scope.isArray=function(type){
           if( angular.isArray(type))
               return true;
            else
               return false;
        }

        $scope.isObject=function(type){
            if( angular.isObject(type))
                return true;
            else
                return false;
        }
    }

    /** @ngInject */
    function propertyDisplay()
    {
        return {
            restrict : "A",
            templateUrl : "app/main/common/property-display/property-display.html",
            /*scope: {
                property: '=',
                data: '='
            },*/
            scope: {
                row : '=propertyDisplay',
                property : '=',
                data: '=',
                keyRequired: '@'
            },
            controller:"propertyDisplayController"
        };
    }

})();