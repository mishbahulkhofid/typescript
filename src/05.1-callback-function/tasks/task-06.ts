/**
 * A company has employee salary data below.
 * The HR department wants to process the same employee data using different rules.
 * For example:
 * - Calculate final salary.
 * - Determine bonus eligibility.
 * - Generate employee performance status.
 * 
 * Bonus rules:
 * - Performance ≥ 90 → 15% of salary and status is "Exceeds Expectations"
 * - Performance ≥ 80 → 10% of salary and status is "Meets Expectations"
 * - Performance ≥ 70 → 5% of salary and status is "Needs Improvement"
 * - Below 70 → no bonus and status is "Unsatisfactory"
 * 
 * TASK:
 * Create a reusable function that accepts:
 * - employee array
 * - callback function
 * 
 * The callback should determine what operation is performed on each employee.
 * Students should create at least three callbacks below.
 * The processing function should not contain the HR business rules.
 */
type Employee = {
    name: string
    salary: number
    performance: number
}

function employeeProcess<T>(
    arr: Employee[],
    callback: (employee: Employee) => T
): T[] {
    return arr.map((item) => callback(item));
}

type PERFORMANCE_STATUS = "Exceeds Expectations" | "Meets Expectations" | "Needs Improvement" | "Unsatisfactory"
type EMPLOYEE_BONUS = Employee & { bonus: number }
type EMPLOYEE_PERFORMANCE = Employee & { status: PERFORMANCE_STATUS }
type EMPLOYEE_SUMMARY = Employee & {finalSalary:number,status:PERFORMANCE_STATUS}

const employees: Employee[] = [
    { name: "Alya", salary: 5000000, performance: 92 },
    { name: "Budi", salary: 6500000, performance: 78 },
    { name: "Citra", salary: 7200000, performance: 88 },
    { name: "Dimas", salary: 4500000, performance: 95 },
    { name: "Eka", salary: 8000000, performance: 69 }
];


function calculateFinalSalary(selectedEmployee: Employee): EMPLOYEE_BONUS {
    // implementation: this function return employee data with bonus and updated final salary
    let bonusRate = 0;
    if(selectedEmployee.performance >= 90){
        bonusRate = 0.15;
    }else if(selectedEmployee.performance >= 80){
        bonusRate = 0.10;
    }else if(selectedEmployee.performance >= 70){
        bonusRate = 0.05;
    }else{
        bonusRate = 0;
    }
    const bonusAmmount = selectedEmployee.salary * bonusRate;
    return {
        ...selectedEmployee,
        salary :selectedEmployee.salary + bonusAmmount,
        bonus : bonusAmmount
    }
}
function getPerformanceStatus(selectedEmployee: Employee): EMPLOYEE_PERFORMANCE {
    let status : PERFORMANCE_STATUS;
    if(selectedEmployee.performance >= 90){
        status = "Exceeds Expectations"
    }else if(selectedEmployee.performance >= 80){
        status = "Meets Expectations"
    }else if(selectedEmployee.performance >= 70){
        status = "Needs Improvement"
    }else{
        status = "Unsatisfactory"
    }
    return{
        ...selectedEmployee,
        status:status
    }
}
function getEmployeSummary(selectedEmployee:Employee):EMPLOYEE_SUMMARY{
    let bonusRate = 0;
    let status:PERFORMANCE_STATUS;

    if(selectedEmployee.performance >= 90){
        bonusRate = 0.15
        status ="Exceeds Expectations"
    }else if(selectedEmployee.performance >= 80){
        bonusRate = 0.10
        status = "Meets Expectations"
    }else if(selectedEmployee.performance >= 70){
        bonusRate = 0.05
        status = "Needs Improvement"
    }else{
        status = "Unsatisfactory"
    }
    const bonusAmmount = selectedEmployee.salary * bonusRate;
    return{
        ...selectedEmployee,
        finalSalary:selectedEmployee.salary + bonusAmmount,
        status:status
    };
}



const employeeWithFinalSalary = employeeProcess(employees, calculateFinalSalary)
const employeeWithPerformanceStatus = employeeProcess(employees, getPerformanceStatus)
const employeeWithSummary = employeeProcess(employees,getEmployeSummary)

console.log(`====== EMPLOYEES WITH FINAL SALARY + BONUS ======`);
console.table(employeeWithFinalSalary)
console.log(`====== EMPLOYEES WITH PERFORMANCE STATUS ======`);
console.table(employeeWithPerformanceStatus)
console.log(`====== EMPLOYESS WITH FUL SUMMARY ======`)
console.table(employeeWithSummary)

