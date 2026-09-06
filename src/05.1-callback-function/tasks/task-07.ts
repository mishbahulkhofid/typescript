import { futimesSync } from "node:fs";

/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type Students = {
    name:string,
    score:number,
    attendance:number
}

const students :Students[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudent<T>(
    arr:Students[],
    callback: (student: Students) => T
): T[]{
   return arr.map((item) => callback(item))
}

type PASS_STATUS = "PASS"|"FAIL";
type STUDENT_PASS = Students & {status:PASS_STATUS }

function getStatus(selectedStudent:Students):STUDENT_PASS{
    let status:PASS_STATUS;
    if(selectedStudent.score >= 90 && selectedStudent.attendance >= 90){
        status = "PASS"
    }else if(selectedStudent.score >= 75 && selectedStudent.attendance >= 90){
        status = "PASS"
    }else if(selectedStudent.score >= 75 && selectedStudent.attendance < 90){
        status = "FAIL"
    }else{
        status = 'FAIL'
    }
  return{
    ...selectedStudent,
    status:status
  }
}

type RECOMMENDATION_STUDENT = "Excellent"|"Good"|"Improve Attendance "|"Improve Academic Performance";
type STUDENT_RECOMMENDATION = Students & {recommendation :RECOMMENDATION_STUDENT}

function getRecommendation(selectedStudent: Students): STUDENT_RECOMMENDATION{
    let recommendation:RECOMMENDATION_STUDENT
    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90){
        recommendation = "Excellent"
    }else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90){
        recommendation = "Good"
    }else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90){
        recommendation = "Improve Attendance "
    }else {
        recommendation = "Improve Academic Performance"
    }
    return{
        ...selectedStudent,
        recommendation:recommendation
    }
}

type STUDENT_SUMMARY = Students & {
    status:PASS_STATUS
    recommendation:RECOMMENDATION_STUDENT
};

function getStudentSummary(selectedStudent:Students):STUDENT_SUMMARY{
    let status :PASS_STATUS = "FAIL"
    if (selectedStudent.score >= 75 &&  selectedStudent.attendance >= 90 ){
        status = "PASS"
    }

    let recommendation:RECOMMENDATION_STUDENT
    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90){
        recommendation = "Excellent"
    }else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90){
        recommendation = "Good"
    }else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90){
        recommendation = "Improve Attendance "
    }else {
        recommendation = "Improve Academic Performance"
    }
    return{
        ...selectedStudent,
        recommendation:recommendation,
        status:status
    }
}


const studentStatus = processStudent(students, getStatus);
const studentRecommendations = processStudent(students, getRecommendation);
const studentSummary = processStudent(students, getStudentSummary);

// Tampilan Output
console.log("====== STUDENT PASS/FAIL STATUS ======");
console.table(studentStatus);

console.log("====== STUDENT RECOMMENDATIONS ======");
console.table(studentRecommendations);

console.log("====== STUDENT FULL SUMMARY ======");
console.table(studentSummary);