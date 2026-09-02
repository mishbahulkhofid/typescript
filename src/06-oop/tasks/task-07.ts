/**
 * A company has different types of employees.
 * Every employee has:
 * - Name
 * - Employee ID
 * - Basic salary
 * 
 * However, the way their total salary is calculated differs.
 * - Full-Time Employee receive Basic Salary + Fixed Allowance
 * - Part-Time Employee receive Basic Salary + Hours Worked × Hourly Rate
 * 
 * example:
 * Fulltime Employee
 * Name: Mohamed Salah
 * Basic Salary: Rp8,000,000
 * Allowance: Rp1,500,000
 * 
 * ParttimeEmployee
 * Name: Erling Haaland
 * Basic Salary: Rp2,000,000
 * Hours Worked: 40
 * Hourly Rate: Rp50,000
 * 
 */

class Employee {
    constructor(
        public name: string,
        public employeeID: string,
        protected basicSalary: number
    ) { }

    calculateSalary(): number {
        return this.basicSalary
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        return 0
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        return 0
    }
}

/** implement of polymorphism */
const employees: Employee[] = [
    new FullTimeEmployee(`Mohamed Salah`, `111`, 8000000),
    new PartTimeEmployee(`Erling Haaland`, `112`, 2000000)
]

for (const employee of employees) {
    console.log(`${employee.name} receive ${employee.calculateSalary()}`);
}