 'use strict';
  var App = angular.module('employeeDemoApp',['ngMessages']);

  angular.module('employeeDemoApp').controller('employeeCtrl', function($scope){


  $scope.submitForm = function(){
    console.log('user name : ' + $scope.userfullName);
    console.log('user email : ' +$scope.useremail);
    console.log('user password :' +$scope.userpassword);
    console.log('user dob:' +$scope.userdob);
    console.log('user gender :' +$scope.usergender);
    console.log('user profession :' +$scope.userprofession);
    console.log('user designation :' +$scope.userdesignation)

  function Validate() {
        var enterpassword = document.getElementById("txtenterPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (enterpassword != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
    }
   });

