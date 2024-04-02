//	Create array that accept  number only 
let arrNums1 = [1, 2, 3]; //arr
let arrNums2 = [1, 2, 3];
//	Create array that accept string and number only and print all items
let arrStrNum;
arrStrNum = [1, 2, 'str1', 'str2'];
console.log(arrStrNum);
//	Create a variable that accept number and Boolean only 
let boolNum;
//	Create function with two parameter try to call it without any parameter “handling”
function TwoPram1(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}
TwoPram1();
function TwoPram2(num1, num2) {
    if (num2 !== undefined && num1 !== undefined)
        console.log(num1 + num2);
    else
        console.log(0);
}
TwoPram2();
class Employee {
    constructor(employeeData) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this._username = employeeData.username;
        this.email = employeeData.email;
        this.address = employeeData.address;
    }
    get username() {
        return this._username;
    }
    getDetails() {
        return `Employee details --> ID: ${this.id}, Name: ${this.name}, Username: ${this.username}, Email: ${this.email}`;
    }
    viewEmployeeAddress() {
        console.log("Employee Address:");
        console.log(this.address);
    }
}
// Example usage
const employeeData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    }
};
const employee = new Employee(employeeData);
console.log(employee.getDetails());
// Create class manager inherit from employee class and 
// Create a function to view employee address
class Manager extends Employee {
    constructor(employeeData) {
        super(employeeData);
    }
}
const manager = new Manager(employeeData);
employee.viewEmployeeAddress();
