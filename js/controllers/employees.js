var app = angular.module('employeeDemoApp');
app.controller('employeesCtrl', function($scope, $state, EmployeeService, $stateParams) {
	console.log("Hello")


        $scope.saveEmployee = function(){

			EmployeeService.saveEmployee($scope.employee);
			$state.go("employees");
	    }
        
        $scope.employeeslist = EmployeeService.getEmployees();
        if($stateParams && $stateParams.id){
        	$scope.employee = EmployeeService.getEmployee($stateParams.id);
        }
         
        $scope.updateEmployee = function(req){
          EmployeeService.updateEmployee($stateParams.id, $scope.employee);
		  $state.go("employees")
	    }

 	     $scope.deleteEmployee = function (index) {
             EmployeeService.deleteEmployee(index);
          };    

  });





 
		
	