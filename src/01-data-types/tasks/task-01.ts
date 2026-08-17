/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */


const student_Name: string = "Nadia Putri";
const IdStudent : string = "ST2026045";
const score_Assignment: number = 88.5;
const score_Midterm: number = 84;
const score_Final: number = 91.5;
const score_Attendance: number = 100;
const isParticipate: boolean = true;

console.log("=== Student Data ===");
console.log("Name:", student_Name);
console.log("ID:", IdStudent);
console.log("Assignment Score:", score_Assignment);
console.log("Midterm Score:", score_Midterm);
console.log("Final Score:", score_Final);
console.log("Attendance Score:", score_Attendance);
console.log("Participation:", isParticipate);
