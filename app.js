'use strict'
let myArray=[];
function Employee(EmployeeID, FullName, Department, Level) {
    this.employeeId = EmployeeID;
    this.name= FullName;
    this.employeeDepartment = Department;
    this.employeeLevel = Level;
    this.img = 'ImageURL';
    this.result= 0;
    myArray.push(this);
}

Employee.prototype.SalaryOfEmploee = function () {
        let Salary =0;
        if (this.employeeLevel == "Senior") {
        Salary = Math.random() * (2000 - 1500) + 1500;
    } else
        if (this.employeeLevel == "Mid-Senior") {
            Salary = Math.random() * (1500 - 1000) + 1000;
        } else if (this.employeeLevel == "Junior") {
            Salary = Math.random() * (1000 - 500) + 500;
        }
        let taks=(Salary*0.075);
         this.result = Salary-taks; 
    return  Salary-taks;
}
let firstEmployee= new Employee(1000,"Ghazi Samer","Administration","Senior");
let secondEmployee= new Employee(1001,"Lana Ali	","Finance","Senior");
let thirdEmployee= new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let forthEmployee= new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let fifthEmployee= new Employee(1004,"Omar Zaid	","Development","Senior");
let sixthEmployee= new Employee(1005,"Rana Saleh","Development","Junior");
let seventhEmployee= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.rander=function(){       
   let result = this.SalaryOfEmploee();
document.write (`<p> ${this.name}</p>`);
document.write (` ${result}`);
}

myArray.forEach(element => {
    element.rander();
});
