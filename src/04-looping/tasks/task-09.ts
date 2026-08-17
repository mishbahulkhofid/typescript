/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let studentsA = 0;
let studentsB = 0;
let studentsC = 0;
let studentsD = 0;
let nilaiTertinggi = 0;

for(let i = 0;i < students.length; i++){
    let nilai = students[i];
    
    if (nilai.score >= 90 && nilai.score <= 100){
        studentsA++
    }else if (nilai.score >= 80 && nilai.score <= 89){
        studentsB++
    }else if (nilai.score >= 70 && nilai.score <= 79){
        studentsC++
    }else {
        studentsD++
    }
    nilaiTertinggi = Math.max(nilaiTertinggi,nilai.score)
}

console.log ("Student A (90-100): ",studentsA);
console.log ("Student B (80-89): ",studentsB);
console.log ("Student C (70-79): ",studentsC);
console.log ("Student D (Bellow 70): ",studentsD);
console.log ("Nilai Tertinggi: ",nilaiTertinggi);
