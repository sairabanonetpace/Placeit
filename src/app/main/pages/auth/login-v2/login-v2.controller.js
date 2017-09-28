(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login-v2')
        .controller('LoginV2Controller', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller($state)
    {
        var vm = this;
        // Data
        vm.form = {password:'',username:''};
        vm.form.password = "";
        vm.form.username = "";
        
        // Methods
        vm.login = function(){
            $state.go('app.dashboards_project');
        }
        //////////
    }
})();