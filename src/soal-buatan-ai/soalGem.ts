/*Batas nilai kelulusan (KKM) adalah 60. Siswa dinyatakan lulus jika nilainya $\ge 60$, dan remedi jika nilainya $< 60$
Seorang guru menerima data nilai ujian pemrograman untuk 
satu kelompok belajar dalam bentuk array berikut:
*/

const examScores = [
  { name: "Andi", score: 85 },
  { name: "Bambang", score: 55 },
  { name: "Chandra", score: 70 },
  { name: "Deni", score: 40 },
  { name: "Eva", score: 90 },
  { name: "Farah", score: 60 }
];

/*Tugas Kamu:
Menggunakan perulangan (loop):
- Hitung jumlah siswa yang lulus.
- Hitung jumlah siswa yang remedi.
- Masukkan nama-nama siswa yang remedi ke dalam sebuah array daftarRemedi.
- Hitung rata-rata nilai seluruh kelas.*/

let siswaLulus = 0;
let siswaRemedi = 0;
let daftarRemedi:string[]=[];
let rataRata = 0;
let totalNilai = 0;

for (let i = 0; i < examScores.length;i++){
    if (examScores[i].score >= 60){
        siswaLulus++;
    }else{
        siswaRemedi++
        daftarRemedi.push(examScores[i].name)
    }

    totalNilai += examScores[i].score;
    rataRata = totalNilai/6;
};

console.log ("Jumlah Siswa Yang Lulus: ",siswaLulus);
console.log ("Jumlah Siswa Yang Remedi: ",siswaRemedi);
console.log ("Nama Siswa Yang Remedi: ",daftarRemedi);
console.log (`Rata Rata Nilai Siswa: ${rataRata.toFixed(2)}`)
