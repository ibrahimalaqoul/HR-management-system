'use strict'
let form = document.getElementById("from");
let emploeeDiv = document.getElementById("emploeesinformation");
let myArray=[];
function Employee(EmployeeID,FullName, Department, Level,img) {
    this.employeeId = EmployeeID;
    this.name= FullName;
    this.employeeDepartment = Department;
    this.employeeLevel = Level;
    this.image = img;
    this.result= 0;
    myArray.push(this);
}

  function newId(){
     let employeeIds = Math.floor(1000 + Math.random() * 9000);
       return employeeIds;
}
Employee.prototype.render = function(){
    let info=document.createElement('div');
        emploeeDiv.appendChild(info);
        let image =document.createElement('img');
        image.setAttribute("src",this.image);
        info.appendChild(image);
        image.width = "180";
        let discriptionOne = document.createElement('p');
        info.appendChild(discriptionOne);
        discriptionOne.textContent=`name: ${this.name} -ID: ${this.employeeId}`
        let discriptionTwo = document.createElement('p');
        discriptionTwo.textContent=` Department: ${this.employeeDepartment} -Level:${this.employeeLevel}`
        let discriptionThree = document.createElement('p');
        info.appendChild(discriptionTwo);
        info.appendChild(discriptionThree);
        discriptionThree.textContent=newId();
        info.style.backgroundColor=("#557C55");
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
    return  Math.floor(Salary-taks);
}
let firstEmployee= new Employee(1000,"Ghazi Samer","Administration","Senior","../assets/Ghazi.jpg");
let secondEmployee= new Employee(1001,"Lana Ali	","Finance","Senior","../assets/Lana.jpg");
let thirdEmployee= new Employee(1002,"Tamara Ayoub","Marketing","Senior","../assets/Tamara.jpg");
let forthEmployee= new Employee(1003,"Safi Walid","Administration","Mid-Senior","../assets/safi.jpg");
let fifthEmployee= new Employee(1004,"Omar Zaid	","Development","Senior","../assets/Omar.jpg");
let sixthEmployee= new Employee(1005,"Rana Saleh","Development","Junior","../assets/Rana.jpg");
let seventhEmployee= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","../assets/Hadi.jpg");


form.addEventListener("submit", handleSubmit)
function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    let fullName = event.target.FullName.value;
    let DepartmentName = event.target.Department.value;
    let  LevelName= event.target.Level.value;
    let thImage = event.target.img.value;
}
for (let i = 0; i < myArray.length; i++) {
     myArray[i].render(); 
}