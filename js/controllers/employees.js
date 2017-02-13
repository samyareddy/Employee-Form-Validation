var app = angular.module('employeeDemoApp');
app.controller('employeesCtrl', function($scope, $state, EmployeeService, $stateParams) {
	


      $scope.saveEmployee = function(){
  			EmployeeService.saveEmployee($scope.employee);
  			$state.go("employees");
	   
     }

    $scope.employeeList = EmployeeService.employeeDetails();
    
       if($stateParams && $stateParams.id){
           $scope.employee = EmployeeService.getEmployee($stateParams.id);
       }

      $scope.updateEmployee = function(req){
      EmployeeService.updateEmployee($stateParams.id, $scope.employee);
		  $state.go("employees")
	    }

 	     $scope.deleteEmployee = function(index){
             EmployeeService.deleteEmployee(index);
          };    

  });





 
		
	