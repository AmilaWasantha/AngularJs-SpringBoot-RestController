'use strict';

angular.module('myApp').controller('UserController', ['$scope', 'UserService', function($scope, UserService) {

    var self = this;
    self.user={id:'',name:'',address:''};
    self.users=[];
    self.usersById=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.findById= findById;
    self.updateUser=updateUser;
    // self.reset = reset;

    fetchAllUsers();

    function fetchAllUsers(){
        UserService.fetchAllUsers()
            .then(
                function(d) {
                    self.users =d;
                    console.log("all :"+self.customer)
                },
                function(errResponse){
                }
            );
    }

    function createUser(user){
        UserService.createUser(user)
            .then(
                fetchAllUsers,
                function(errResponse){

                }
            );
    }

    function findById(id) {
        console.log("user Id : "+id)
        UserService.findById(id)
            .then(
                function (d) {
                    console.log("result : "+d)
                    self.user=d;
                    // self.user.name=d.data.name;
                    // self.user.address=d.data.address;
                    console.log("findById : "+self.user)
                },
                function (error) {

                }
            )

    }

    function submit() {
        console.log("onna id eka :" +self.user.id)
        createUser(self.user);
        console.log(self.user)
        if(self.user.id!==null) {
            console.log('Saving New Customer', self.user);

        }


    }

    function deleteUser(id){
        UserService.deleteUser(id)
            .then(
                fetchAllUsers,
                function(errResponse){
                }
            );
    }

    function remove(id){
        deleteUser(id);
        // console.log('id to be deleted', id);
        // if(self.customer.id !== null) {//clean form if the user to be deleted is shown there.
        //     deleteUser(self.customer.id);
        // }

    }


    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }

    }

    function updateUser(user){
        UserService.updateUser(user)
            .then(
                fetchAllUsers,
                function(errResponse){

                }
            );
    }





}]);
