/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 *
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

import { BADNAME } from "node:dns";
import { createContext } from "node:vm";

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 },
];


let muridMengumpulkan = 0;
let muridTidakMengumpulkan = 0;
let siswaLulus = 0;
let harusRevisi = 0;
let totalNilai = 0;
let rataRata = 0;
let namaTidakSubmit: string[] = [];
let namaHarusRevisi: string[] = [];

for (let i = 0; i < submissions.length; i++) {
  if (submissions[i].score >= 75) {
    siswaLulus++;
  } else harusRevisi++;

  if (submissions[i].submitted === true) {
    muridMengumpulkan++;
  } else muridTidakMengumpulkan++;

  if (submissions[i].submitted === false) {
    namaTidakSubmit.push(submissions[i].student);
  }else if(submissions[i].submitted === true && submissions[i].score <= 74)
    namaHarusRevisi.push(submissions[i].student)

    totalNilai += submissions[i].score
    rataRata = totalNilai/submissions.length;
}
  console.log("Total Siswa Yang Mengumpulkan: ", muridMengumpulkan);
  console.log("Total Siswa Yang Tidak Mengumpulkan: ", muridTidakMengumpulkan);
  console.log("Total Siswa Yang Lulus: ", siswaLulus);
  console.log("Siswa Yang Harus Revisi: ", harusRevisi);
  console.log("Nama-nama Siswa Yang Tidak Mengumpulkan: ", namaTidakSubmit.join(","));
  console.log("Nama nama Yang Harus Revisi: ", namaHarusRevisi.join(","),namaTidakSubmit.join(","));
  console.log("Rata-rata Nilai Murid: ",rataRata)



