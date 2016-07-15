(function() {
    'use strict';

    angular.module('ninja.services').factory('homeSvc', homeSvc);
    
    homeSvc.$inject = [ '$http', '$location', '$q' ];
    
    function homeSvc($http, $location, $q) {
        var service = {
            getUsers : getUsers,
            addUser : addUser,
            deleteUser : deleteUser
        };

        return service;

        function getUsers() {
            return $http.get('/users').then(getUserComplete).catch(getUserFailed);
            
            function getUserComplete(response, status, headers, config) {
                return response.data;
            }
            
            function getUserFailed(error) {
                logger.error('XHR Failed for getUser.' + error.data);
            }
        }
        
        function addUser(fname,lname,contactNo) {
            var data = {
                fname: fname,
                lname: lname,
                contactNo: contactNo
            };
            return $http.post('/users/', data).then(getUserComplete).catch(getUserFailed);
            
            function getUserComplete(response, status, headers, config) {
                return response.data;
            }
            
            function getUserFailed(error) {
                logger.error('XHR Failed for getUser.' + error.data);
            }
        }
        
        function deleteUser(id) {
            return $http.delete('/users/' + id).then(getUserComplete).catch(getUserFailed);
            
            function getUserComplete(response, status, headers, config) {
                return response.data;
            }
            
            function getUserFailed(error) {
                logger.error('XHR Failed for getUser.' + error.data);
            }
        }
    }

})();