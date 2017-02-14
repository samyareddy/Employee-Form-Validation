var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

    var factory = {};
    var employeeList = []; 
            
    factory.saveEmployee = function(employee){


     employeeList =  JSON.parse(localStorage.getItem('employeeList')); 
     console.log(angular.copy(employeeList));
     if(employeeList == null){
      employeeList = [];
     }
     employeeList.push(employee);
       console.log(angular.copy(employeeList));
      localStorage.setItem('employeeList', JSON.stringify(employeeList));
     
       }
    
       factory.employeeDetails = function(){
   
       var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
       console.log(angular.copy(employeeList));
       return employeeList;
       }


      factory.getEmployee = function(index){
     
       var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
      console.log(angular.copy(employeeList));

       return employeeList[index];
    }
    

    factory.updateEmployee = function(index, employee){

      var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
     console.log(angular.copy(employeeList));
    	
     employeeList[index] = employee ;
     localStorage.setItem('employeeList', JSON.stringify(employeeList));
    }

     factory.deleteEmployee = function(index){
    

        var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
        console.log(angular.copy(employeeList));
        employeeList.splice(index, 1);
        console.log(angular.copy(employeeList));
        localStorage.setItem('employeeList', JSON.stringify(employeeList));
        return employeeList;
    }

    return factory;


});