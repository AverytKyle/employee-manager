class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if (manager) {
            this.manager = manager.addEmployee(this)
        }
    }
}

module.exports = Employee