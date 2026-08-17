const numbers = [1, 2, 3, 4, 5];

console.log("Array Akan DIkalikan 5: ",numbers.map((n) =>n * 5));
console.log("Jika Bilangan dibagi dengan 2 ada sisa maka angka tersebut tidak ditampilkan:",numbers.filter((n) => n % 2 === 0))
console.log("Semua Nilai Dari Array Akan di Total:",numbers.reduce((sum,n) => sum + n,0))
console.log("Akan Menampilkan Nilai Yang Lebih Besar Dari 3:",numbers.find((n)=> n > 3))
console.log("Include Akan mengecek Apakah Ada Angka 4 pada array",numbers.includes(4))
