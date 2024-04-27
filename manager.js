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
    _totalSubSalary() {
        let sum = 0
        if (this.employees.length === 0) {
            return sum;
        }

        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i]
            if (employee instanceof Manager) {
                sum += employee.salary;
                this.employees.shift();
                return sum + employee._totalSubSalary()
            } else {
                sum += employee.salary;
            }
        }
        return sum
    }

    //method
    calculateBonus(multiplier){
        let totalSum = this._totalSubSalary()
        return (this.salary + totalSum) * multiplier
    }
}

module.exports = Manager;