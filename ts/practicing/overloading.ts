class Employee {}
 
function getEmployee(id: number): Employee;                     //Overload 1
function getEmployee(email: string): Employee;                  //Overload 2
function getEmployee(email: number, name: string): Employee;    //Overload 3
 
//function getEmployee(name: string): Employee;                 //Error - Conflict with Overload 2
 
//Implement the function
function getEmployee (paramOne: string | number, paramTwo?: string ): Employee { 
     
    let employee: Employee;
 
    if( typeof paramOne === 'number') {
        //Logic for overload 1
    } else if( typeof paramTwo != 'undefined') {
        //Logic for overload 3
    } else {
        //Logic for overload 2
    }
 
    return employee;
} 