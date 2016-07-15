(function() {
    'use strict';

    angular.module('ninja.controllers').controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [ 'homeSvc' ];
    function homeCtrl(homeSvc) {
        var vm = this;
        vm.getUsers = getUsers;
        vm.addUser = addUser;
        vm.deleteUser = deleteUser;
        
        //init table content
        vm.getUsers();

        function getUsers() {
            homeSvc.getUsers().then(function(data) {
                vm.users = data;
            });
        }

        function addUser(fname, lname, contactNo) {
            homeSvc.addUser(fname, lname, contactNo).then(function(data) {
                vm.users = data;
                vm.fname = '';
                vm.lname = '';
                vm.contactNo = '';
            });
        }

        function deleteUser(fname) {
            homeSvc.deleteUser(fname).then(function(data) {
                vm.users = data;
            });
        }
    }

})();