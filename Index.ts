//	Create array that accept  number only 
let arrNums1:number[]= [1,2,3]; //arr
let arrNums2 :Array<number>=[1,2,3];


//	Create array that accept string and number only and print all items
let arrStrNum:(string|number)[];
arrStrNum = [1,2,'str1', 'str2'];
console.log(arrStrNum);

//	Create a variable that accept number and Boolean only 
let boolNum :boolean|number;

//	Create function with two parameter try to call it without any parameter “handling”
function TwoPram1(num1:number=0, num2:number=0):void
{
    console.log(num1+num2);
}

TwoPram1();
function TwoPram2(num1?:number, num2?:number):void
{
    if (num2 !== undefined && num1 !== undefined)
    console.log(num1+num2);
     else
     console.log(0);
  
}

TwoPram2();


// 	Create class Employee implement IEmployee using this object as implementation
//  {"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz","address": {"street": "Kulas Light","suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3874","geo": {"lat": "-37.3159","lng": "81.1496"}}
// ⦁	Username private
// ⦁	Address public

interface IEmployee {
    id: number;
    name: string;
    username: string; 
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    getDetails(): string;
}

class Employee implements IEmployee {  
    id: number;
    name: string;
    private _username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

   
    constructor(employeeData: any) {
        this.id = employeeData.id;
        this.name = employeeData.name;
        this._username = employeeData.username;
        this.email = employeeData.email;
        this.address = employeeData.address;
    }

    get username(): string {
        return this._username;
    }

    getDetails(): string {
        return `Employee details --> ID: ${this.id}, Name: ${this.name}, Username: ${this.username}, Email: ${this.email}`;
    }

  
 viewEmployeeAddress(): void {
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

    constructor(employeeData: any) {
        super(employeeData);
    }
}


const manager = new Manager(employeeData);

employee.viewEmployeeAddress();