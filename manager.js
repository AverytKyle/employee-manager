const Employee = require("./employee.js")



class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager)
        this.employees = employees
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    // helper function //recursive
    _totalSubSalary(employees, sum = 0){
       
        if (employees.length === 0) {
            return sum;
        }
        let employee = employees.shift();
       
        if (employee instanceof Manager){
            sum += employee.salary; 
            return _totalSubSalary(employees, sum)
        }  
        else {
            sum += employee.salary;

        }

    }

    //method
    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary(this.employees, 0)) * multiplier
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000



module.exports = Manager;