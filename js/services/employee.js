var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

    var factory = {};
    var employeeList = []; 
            
    factory.saveEmployee = function(employee){
        
        employeeList.push(employee);
      employeeList = JSON.stringify(employeeList);

      localStorage.setItem('employeeList', employeeList);
       }
    
       factory.employeeDetails = function(){
   
       var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
       console.log(JSON.parse(localStorage.getItem('employeeList')));
       return employeeList;
    }


    factory.getEmployee = function(index){
       
       return employeeList[index];
    }
    

    factory.updateEmployee = function(index, employee){
    	
    	return employeeList[index] = employee;
    }

    factory.deleteEmployee = function(index){
        return employeeList.splice(index, 1);
    }

    return factory;


});