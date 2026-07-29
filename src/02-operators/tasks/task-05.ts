/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

interface Student {
  name: string;
  gpa: number;
  familyIncome: number;
  competitionCount: number;
  hasDisciplinaryRecord: boolean;
  documentsComplete: boolean;
}

const student: Student = {
  name: "Alya Putri",
  gpa: 3.89,
  familyIncome: 4200000,
  competitionCount: 4,
  hasDisciplinaryRecord: false,
  documentsComplete: true
};

const scholarshipAmount = student.gpa >= 3.75 && student.familyIncome < 5000000 && student.competitionCount >= 3 && !student.hasDisciplinaryRecord && student.documentsComplete ? 12000000 : 0;
const remainingScholarshipBudget = 500000000 - scholarshipAmount;

console.log("=== Student Data ===");
console.log("Name:", student.name);
console.log("GPA:", student.gpa);
console.log("Family Income:", student.familyIncome);
console.log("Competition Count:", student.competitionCount);
console.log("Has Disciplinary Record:", student.hasDisciplinaryRecord);
console.log("Documents Complete:", student.documentsComplete);
console.log("Scholarship Amount:", scholarshipAmount);
console.log("Remaining Scholarship Budget:", remainingScholarshipBudget);
console.log("Accepted:", scholarshipAmount > 0);