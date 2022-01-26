let EmployeE = localStorage.getItem("Employee");
let myNewArray = JSON.parse(EmployeE);
let theMainDiv = document.getElementById("main");

let table = document.createElement('table');
theMainDiv.appendChild(table)
let tablerone = document.createElement('tr');
table.appendChild(tablerone);
let tablehone = document.createElement('th');
tablehone.textContent = "Department";
tablerone.appendChild(tablehone);
let tablehtwo = document.createElement('th');
tablehtwo.textContent = "# of employees";
tablerone.appendChild(tablehtwo);
let tablehthree = document.createElement('th');
tablehthree.textContent = 'Total Salary';
tablerone.appendChild(tablehthree);
let tablehfour = document.createElement('th');
tablehfour.textContent = "Average";
tablerone.appendChild(tablehfour);
//
let tablertwo = document.createElement('tr');
table.appendChild(tablertwo);
let tableDone = document.createElement('td')
tableDone.textContent = "Administration";
tablertwo.appendChild(tableDone);
let tableDtwo = document.createElement('td');
tableDtwo.innerHTML = AdministrationNofemp();
tablertwo.appendChild(tableDtwo);
let tableDthree = document.createElement('td');
tableDthree.innerHTML = TotalSalaryofAdministration();
tablertwo.appendChild(tableDthree);
let tableDfour = document.createElement('td');
tableDfour.innerHTML = AverageSalaryofAdministration();
tablertwo.appendChild(tableDfour);
//
let tablerThree = document.createElement('tr');
table.appendChild(tablerThree);
let tableDfive = document.createElement('td')
tableDfive.textContent = "Marketing";
tablerThree.appendChild(tableDfive);
let tableDsix = document.createElement('td');
tableDsix.innerHTML = MarketingNofemp();
tablerThree.appendChild(tableDsix);
let tableDseven = document.createElement('td');
tableDseven.innerHTML = TotalSalaryofMarketing();
tablerThree.appendChild(tableDseven);
let tableDeight = document.createElement('td');
tableDeight.innerHTML = AverageSalaryofMarketing();
tablerThree.appendChild(tableDeight);
//
let tablerFour = document.createElement('tr');
table.appendChild(tablerFour);
let tableDnine = document.createElement('td')
tableDnine.textContent = "Development";
tablerFour.appendChild(tableDnine);
let tableDten = document.createElement('td');
tableDten.innerHTML = DevelopmentNofemp();
tablerFour.appendChild(tableDten);
let tableDeleven = document.createElement('td');
tableDeleven.innerHTML = TotalSalaryofDevelopment();
tablerFour.appendChild(tableDeleven);
let tableDtwelve = document.createElement('td');
tableDtwelve.innerHTML = AverageSalaryofDevelopment();
tablerFour.appendChild(tableDtwelve);
//
let tablerFive = document.createElement('tr');
table.appendChild(tablerFive);
let tableDtherteen = document.createElement('td')
tableDtherteen.textContent = "Finance";
tablerFive.appendChild(tableDtherteen);
let tableDfourteen = document.createElement('td');
tableDfourteen.innerHTML = FinanceNofemp();
tablerFive.appendChild(tableDfourteen);
tableDeleven = document.createElement('td');
tableDeleven.innerHTML = TotalSalaryofFinance();
tablerFive.appendChild(tableDeleven);
tableDtwelve = document.createElement('td');
tableDtwelve.innerHTML = AverageSalaryofFinance();
tablerFive.appendChild(tableDtwelve);
//
let tableFooter = table.createTFoot();
let tableRow = tableFooter.insertRow(0);
let dataCell = tableRow.insertCell(0);
dataCell.innerHTML = "Total";
let totalNofEmp = tableRow.insertCell(1);
totalNofEmp.innerHTML = TotalEmpNumb();
let x = tableRow.insertCell(2)
    x.innerHTML = Total();
let y = tableRow.insertCell(3);
y.innerHTML = Totalavg();

function AdministrationNofemp() {
    var number = 0;
    myNewArray.forEach(element => {
        if (element.employeeDepartment == "Administration") {
            number++;
        }
        console.log(number);
    }); return number;
}
function MarketingNofemp() {
    let number = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Marketing") {
            number = number + 1;


        }

    }
    return number;
}
function DevelopmentNofemp() {
    let number = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Development") {
            number = number + 1;

        }

    }
    return number;
}
function FinanceNofemp() {
    let number = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Finance") {
            number = number + 1;

        }

    }
    return number;
}

function TotalEmpNumb() {
    let number = myNewArray.length;
    return number;
}


function TotalSalaryofAdministration() {
    let salary = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Administration") {
            salary = salary + myNewArray[i].result;
        }

    } return Math.floor(salary);
}

function TotalSalaryofMarketing() {
    let salary = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Marketing") {
            salary = salary + myNewArray[i].result;
        }

    } return Math.floor(salary);
}

function TotalSalaryofDevelopment() {
    let salary = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Development") {
            salary = salary + myNewArray[i].result;
        }

    } return Math.floor(salary);
}


function TotalSalaryofFinance() {
    let salary = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        if (myNewArray[i].employeeDepartment == "Finance") {
            salary = salary + myNewArray[i].result;
        }

    } return Math.floor(salary);
}
function Total() {
    let num = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        num = myNewArray[i].result + num;
    } return Math.floor(num);
}
function Totalavg() {
    let num = 0;
    for (let i = 0; i < myNewArray.length; i++) {
        num = myNewArray[i].result + num;
    } return Math.floor(num / myNewArray.length);
}

function AverageSalaryofAdministration() {
    let avg = 0;
    avg = TotalSalaryofAdministration() / AdministrationNofemp();

    return Math.floor(avg);

}

function AverageSalaryofMarketing() {
    let avg = 0;
    avg = TotalSalaryofMarketing() / MarketingNofemp();

    return Math.floor(avg);

}
function AverageSalaryofDevelopment() {
    let avg = 0;
    avg = TotalSalaryofDevelopment() / DevelopmentNofemp();

    return Math.floor(avg);

}
function AverageSalaryofFinance() {
    let avg = 0;
    avg = TotalSalaryofFinance() / FinanceNofemp();

    return Math.floor(avg);

}