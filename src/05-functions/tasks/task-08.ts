/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

import { countReset } from "node:console";
import { stdout } from "node:process";

/*
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];
*/

interface Submission{
    student: string;
    submitted: boolean;
    score:number;
}

const submissions: Submission[] = [
  { student: "Alya", submitted: true, score: 90 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 84 },
  { student: "Dimas", submitted: true, score: 72 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 96 }
];

const passing_score = 75;

function countTotalStudent(submissions:Submission[]):number{
    return submissions.length
}

function countSubmitted(submissions:Submission[]):number{
    let count = 0;
    for(let student of submissions){
        if(student.submitted === true){
            count++
        }
    }return count;
}

function countUnSubmitted(submissions:Submission[]):number{
    let count = 0;
    for(let student of submissions){
        if(student.submitted === false){
            count++
        }
    }return count;
}

//menghitung siswa yang submit dan nilainya diatas 75
function countPassed(submissions:Submission[]):number{
    let count = 0;
    for(let student of submissions){
        if(student.submitted === true && student.score >= passing_score){
            count++
        }
    }return count;
}

//menghitung siswa yang revisi
function countNeedRevision(submissions:Submission[]):number{
    let count = 0;
    for(let student of submissions){
        if(student.submitted === true && student.score < passing_score){
            count++
        }
    }return count;
}

//menghitung rata rata nilai 
function AverageScore(submissions:Submission[]):number{
    let count = 0
    for(let student of submissions){
        count += student.score
    }return count / submissions.length;
}

//mecari nilai tertinggi
function HighestScore(submissions:Submission[]):number{
    let highest =submissions[0].score
    for(let student of submissions){
        if(student.score > highest){
            highest = student.score
        }
    }return highest;
}

//mencari nilai terendah
function LowestScore(submissions:Submission[]):number{
    let lowest = submissions[0].score
    for(let student of submissions){
        if(student.score< lowest){
            lowest = student.score
        }
    }return lowest
}

// Fungsi VOID: mencetak laporan lengkap ke console, tidak mengembalikan nilai apapun
function printAssignmentReport(submissions: Submission[]): void {
  console.log("=== LMS Assignment Report ===");
  console.log("Total Students:", countTotalStudent(submissions));
  console.log("Submitted:", countSubmitted(submissions));
  console.log("Missing:", countUnSubmitted(submissions));
  console.log("Passed:", countPassed(submissions));
  console.log("Needs Revision:", countNeedRevision(submissions));
  console.log("Average Score:", AverageScore(submissions).toFixed(2)); // dibulatkan 2 desimal
  console.log("Highest Score:", HighestScore(submissions));
  console.log("Lowest Score:", LowestScore(submissions));
}
printAssignmentReport(submissions);