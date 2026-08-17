/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];


let siswaHadir:number = 0;
let siswaTidakHadir:number = 0;
const daftarAbsen:string[] = [];
let presentaseKehadiran: number = 0;

for(let i = 0; i < attendances.length;i++){
  if(attendances[i].present === true){
    siswaHadir++;
  }else {
    siswaTidakHadir ++
    daftarAbsen.push(attendances[i].name);
  }
  let totalSiswa = siswaHadir+siswaTidakHadir;
  presentaseKehadiran = (siswaHadir/totalSiswa)*100;
}

console.log(`Jumlah siswa hadir: ${siswaHadir}`);
console.log(`Jumlah siswa absen: ${siswaTidakHadir}`); // Gunakan variabel angka
console.log(`Nama-nama siswa absen: ${daftarAbsen.join(", ")}`);
console.log(`Persentase kehadiran: ${presentaseKehadiran.toFixed(2)}%`);
