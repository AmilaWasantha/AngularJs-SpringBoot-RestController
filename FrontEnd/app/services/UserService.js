'use strict';

angular.module('myApp').factory('UserService', ['$http', '$q', function($http, $q){


    var REST_SERVICE_URI = 'http://localhost:8080/api/v1/users'
    var createUserDetails = '/saveUser'
    var allUsers='/getAllUsers'
    var modifyUser='/updateUser'

    var factory = {
        createUser: createUser,
        fetchAllUsers:fetchAllUsers,
        deleteUser:deleteUser,
        findById: findById,
        updateUser:updateUser

    };

    return factory;



    function fetchAllUsers() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI + allUsers)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function createUser(user) {
        console.log("onna awa : "+user.data)
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI + createUserDetails, user)
            .then(
                function (response) {
                    console.log("responce"+ response.data)
                    alert("User save successfully");
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+ "/" +id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                    alert("User Delete Successfully");
                },
                function(errResponse){
                    console.error('Error while deleting User');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function findById(id) {
        console.log("findById userService : "+id)
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI+ "/"+id)
            .then(
                function (responce) {
                    deferred.resolve(responce.data);
                    console.log("responce Data :"+responce.data)
                },
                function (errResponce) {
                    console.error('Error while deleting User');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;


    }

    function updateUser(user) {
        console.log("update user : "+user.data)
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI + modifyUser, user)
            .then(
                function (response) {
                    console.log("responce"+ response.data)
                    alert("User update successfully");
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }




}]);
