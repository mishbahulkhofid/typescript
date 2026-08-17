/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeName: string = "Dimas";
const basicSalary: number = 5000000;
const overtimeHours: number = 12;
const overtimeRate: number = 50000;
const bonus: number = overtimeHours > 10 ? 300000 : 0;

console.log("===== Gaji Dimas =====")
console.log("Employe Name: ",employeName);
console.log("Basic Salary: ",basicSalary);
console.log("Overtime Hours: ",overtimeHours);
console.log("Overtime Rate: ",overtimeRate);

console.log("===== Total Gaji Yang Didapat =====")
console.log("Basic Salary: ",basicSalary)
console.log("Bonus : ",bonus);
console.log("Upah Lembur: ",overtimeRate)
console.log("Total Gaji Dimas: ",bonus+overtimeRate+basicSalary)