import { mkdirSync } from "node:fs";

/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

let alya:number;
let budi:number;
let citra:number;

function calculateFinalGrade(assignment:number, midterm:number, finalExam:number):number {
    let finalGrade = ((assignment * 0.30)+(midterm * 0.30)+(finalExam * 0.40))
return finalGrade;
}
alya = calculateFinalGrade(85,80,92)
budi = calculateFinalGrade(78, 75, 81)
citra = calculateFinalGrade(90, 88, 95)

console.log(`Nilai Akhir Si Alya:${alya.toFixed(2)}`)
console.log("Nilai Akhir Si Budi:",budi)//baris ini tidak menggunakan template literal
console.log(`Nilai Akhir Si Citra:${citra}`)
